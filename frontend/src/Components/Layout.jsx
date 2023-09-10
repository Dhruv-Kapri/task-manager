import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const Layout = () => {
  return (
    <>
      <>
        <Navbar />
        <TopNav />
      </>
      <Outlet />
    </>
  );
};

export default Layout;
