require("dotenv").config();
const uri = process.env.MONGO_URI;

const sec = process.env.SECRET;
const port = process.env.PORT || 4000;
const FRONT_END_URL = process.env.FRONT_END_URL || "http://localhost:3000";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

const salt = bcrypt.genSaltSync(20);
const secret = sec;

const client = new MongoClient(uri);

// Middleware
app.use(cors({ credentials: true, origin: FRONT_END_URL }));
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      // poolSize: 10,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit the application on database connection failure
  }
}

connectToMongoDB();

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// CORS Headers (repeated code removed)

app.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const userDoc = await User.create({
      email,
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: "Failed to create user" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (!userDoc) {
      return res.status(400).json({ message: "User not found" });
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Failed to generate token" });
        }
        res.cookie("token", token, { secure: true, httpOnly: true }).json({
          id: userDoc._id,
          email,
        });
      });
    } else {
      res.status(400).json({ message: "Wrong credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/home-xyz", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token").json("ok");
});

// Production Deployment (uncomment for production)
/* app.use(express.static("../frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "frontend", "build", "index.html")
  );
}); */

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
