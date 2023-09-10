import { Link } from "react-router-dom";
import error404 from "../assets/images/error404.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-card row">
        <div className="col">
          <h2>Uh oh, Page is broken.</h2>
          <p>Don’t panic, we won’t need to put it in nice.</p>
          <Link to="/home">Return to home page</Link>
        </div>
        <div className="col">
          <img src={error404} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
