import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunk";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  // console.log("from TuitItem " + tuit._id);
  return (
    <li className="list-group-item">
      <div className="row px-2 py-2">
        <div className=" col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
          <img
            alt=""
            src={`/images/${tuit.image}`}
            className="rounded-circle"
            height="50px"
            width="50px"
          />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 ms-3">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
          <div>
            <div className="fw-bold">
              {tuit.userName} <FontAwesomeIcon icon={faCircleCheck} />
              <span> </span>
              <span className="text-secondary fw-normal">
                {tuit.handle} - {tuit.time}
              </span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: tuit.tuit }} />
          </div>
          <TuitStats key={tuit._id} tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
