import { IoMdNotifications } from "react-icons/io";
import { BsPersonCircle, BsSearch } from "react-icons/bs";

import { Link } from "react-router-dom";

const TopNav = () => {
  const iconSize = "2rem";

  return (
    <>
      <div id="top-nav">
        <ul>
          <form action="" id="search">
            <input
              type="search"
              name="search"
              placeholder="Search anything..."
            />
            <button type="submit">
              <BsSearch />
            </button>
          </form>
          <li>
            <Link to="/settings">
              <BsPersonCircle size={iconSize} />
            </Link>
          </li>
          <li>
            <Link to="">
              <IoMdNotifications size={iconSize} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopNav;
