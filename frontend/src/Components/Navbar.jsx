import { useState } from "react";
import { AiOutlineSend, AiOutlineSetting } from "react-icons/ai";
import { GrTask } from "react-icons/gr";
import { MdSchedule } from "react-icons/md";
import { RiFolderUploadLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Navbar = (props) => {
  const iconSize = "2rem";
  const [active, setactive] = useState("home");

  return (
    <>
      <nav id="navbar">
        <ul>
          <Link to="home">
            <img src={logo} alt="" />
          </Link>
          <br />
          <Link to="home">
            <li>
              <RxDashboard
                size={iconSize}
                className={active === "home" ? "active" : ""}
              />
            </li>
          </Link>
          <Link to="/timeline">
            <li>
              <MdSchedule
                size={iconSize}
                className={active === "timeline" ? "active" : ""}
              />
            </li>
          </Link>
          <Link to="/tasks">
            <li>
              <GrTask
                size={iconSize}
                className={active === "tasks" ? "active" : ""}
              />
            </li>
          </Link>
          <Link to="/settings">
            <li>
              <AiOutlineSetting
                size={iconSize}
                className={active === "settings" ? "active" : ""}
              />
            </li>
          </Link>
          <Link to="/messages">
            <li>
              <AiOutlineSend
                size={iconSize}
                className={active === "messages" ? "active" : ""}
              />
            </li>
          </Link>
          <Link to="/files">
            <li>
              <RiFolderUploadLine
                size={iconSize}
                className={active === "files" ? "active" : ""}
              />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
