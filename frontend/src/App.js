import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout";
import FilesPage from "./Pages/FilesPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import MessagesPage from "./Pages/MessagesPage";
import SettingsPage from "./Pages/SettingsPage";
import SignUpPage from "./Pages/SignUpPage";
import TasksPage from "./Pages/TasksPage";
import TimelinePage from "./Pages/TimelinePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route element={<Layout />}>
              <Route path="home" element={<HomePage />} />
              <Route path="timeline" element={<TimelinePage />} />
              <Route path="tasks" element={<TasksPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="messages" element={<MessagesPage />} />
            <Route path="files" element={<FilesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
