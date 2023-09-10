import { Link } from "react-router-dom";

const TaskDone = (props) => {
  return (
    <>
      <div className="task-done-card">
        <div className="title">
          <h3>Task Done</h3>
          <ul>
            <li>
              <Link path="#">Monthly</Link>
            </li>

            <li>
              <Link path="#">Weekly</Link>
            </li>
            <li>
              <Link path="#">Daily</Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={props.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default TaskDone;
