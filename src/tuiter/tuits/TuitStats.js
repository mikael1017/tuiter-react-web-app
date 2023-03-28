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

  const updateLikeHandler = () => {
    const newTuit = {
      ...tuit,
      likes: tuit.likes + 1,
      liked: !tuit.liked,
    };
    dispatch(updateTuitThunk(newTuit));
  };

  const updateDislikeHandler = () => {
    const newTuit = {
      ...tuit,
      dislikes: tuit.dislikes + 1,
      disliked: !tuit.disliked,
    };
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
        <Link className="text-secondary" to="#">
          <FontAwesomeIcon
            style={tuit.liked ? { color: "red" } : ""}
            icon={tuit.liked ? fasHeart : faHeart}
            onClick={() => updateLikeHandler()}
          />
        </Link>
        <span className="wd-num">{" " + tuit.likes}</span>
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
            onClick={() => updateDislikeHandler()}
          />
        </Link>
        <span className="wd-num">{" " + tuit.dislikes}</span>
      </div>
    </div>
  );
};

export default TuitStats;
