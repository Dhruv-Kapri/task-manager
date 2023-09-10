import StatusCard from "../Components/StatusCard";
import graph1 from "../assets/images/Vector 3.svg";
import { AiOutlineStar } from "react-icons/ai";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BsFileEarmarkText } from "react-icons/bs";
import TaskDone from "../Components/TaskDone";

const HomePage = () => {
  return (
    <>
      <div className="not-nav row" id="home">
        <div className="col">
          {/* <div className="progress"> */}
          <StatusCard
            icon={<AiOutlineStar />}
            title="Task Completed"
            count="8"
            image={graph1}
          />
          <StatusCard
            icon={<LiaClipboardListSolid />}
            title="Task Completed"
            count="8"
            image={graph1}
          />
          <StatusCard
            icon={<BsFileEarmarkText />}
            title="Task Completed"
            count="8"
            image={graph1}
          />
          {/* </div> */}
          {/* <div className="task-done"> */}
          <TaskDone />
          {/* </div> */}
        </div>
        <div className="col-3 todays-schedule"></div>
      </div>
    </>
  );
};

export default HomePage;
