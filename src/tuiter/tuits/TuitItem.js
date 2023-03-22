import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./TuitStats";
import { deleteTuit } from "./tuits-reducer";
import { useDispatch } from "react-redux";

const TuitItem = ({
  tuit = {
    _id: 234,
    topic: "Space",
    userName: "SpaceX",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    time: "2h",
    image: "spacex.png",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
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
