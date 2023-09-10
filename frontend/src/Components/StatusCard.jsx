import { IconContext } from "react-icons/lib";

const StatusCard = (props) => {
  return (
    <>
      <div className="status-card">
        <div className="row">
          <IconContext.Provider value={{ className: "col myReact-icons" }}>
            {props.icon}
          </IconContext.Provider>
          <p className="col">{props.title}</p>
          <h5 className="col">{props.count}</h5>
        </div>
        <div className="row">
          <img src={props.image} alt="" className="col" />
          <p className="col">
            <span>{props.count}+</span> more from last week
          </p>
        </div>
      </div>
    </>
  );
};

export default StatusCard;
