import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faRetweet,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const TuitStats = ({
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
      <Link className="text-secondary" to="#">
        <FontAwesomeIcon
          style={tuit.liked ? { color: "red" } : ""}
          icon={tuit.liked ? fasHeart : faHeart}
        />
        <span className="wd-num">{tuit.likes}</span>
      </Link>

      <Link className="text-secondary" to="#">
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </Link>
      <div></div>
    </div>
  );
};

export default TuitStats;
