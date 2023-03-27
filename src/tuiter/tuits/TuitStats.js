import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faRetweet,
  faArrowUpFromBracket,
  faThumbsDown as fasThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { updateTuitThunk } from "../../services/tuits-thunk";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const updateHandler = (tuit) => {
    const newTuit = {
      ...tuit,
      likes: tuit.likes + 1,
      liked: !tuit.liked,
    };
    console.log(newTuit);
    dispatch(updateTuitThunk(newTuit));
  };
  return (
    <div className="action-row d-flex justify-content-between mt-2">
      <div>
        <Link className="text-secondary" to="#">
          <FontAwesomeIcon icon={faComment} />
          <span className="wd-num">{tuit.replies}</span>
        </Link>
      </div>

      <div>
        <Link className="text-secondary" to="#">
          <FontAwesomeIcon icon={faRetweet} />
          <span className="wd-num">{tuit.retuits}</span>
        </Link>
      </div>

      <div>
        Likes: {tuit.likes}
        <Link className="text-secondary" to="#">
          <FontAwesomeIcon
            style={tuit.liked ? { color: "red" } : ""}
            icon={tuit.liked ? fasHeart : faHeart}
            onClick={() => updateHandler(tuit)}
          />
        </Link>
        {/* <span className="wd-num">{tuit.likes}</span> */}
      </div>

      <div>
        <Link className="text-secondary" to="#">
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </Link>
      </div>
      <div>
        <Link className="text-secondary" to="#">
          <FontAwesomeIcon
            style={tuit.disliked ? { color: "red" } : ""}
            icon={tuit.disliked ? fasThumbsDown : faThumbsDown}
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  dislikes: tuit.dislikes + 1,
                  disliked: !tuit.disliked,
                })
              )
            }
          />
        </Link>
        <span className="wd-num">{tuit.dislikes}</span>
      </div>
    </div>
  );
};

export default TuitStats;
