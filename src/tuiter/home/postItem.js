import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faRetweet,
  faArrowUpFromBracket,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./index.css";

const PostItem = ({
  post = {
    _id: "1",
    avatarIcon: "spacex.jpeg",
    id: "Elon Musk",
    handle: "@elonmusk",
    time: "23h",
    tweet: 'Amazing show about <a href="#">@Inspiration4x</a> mission!',
    postImg: "countdown.jpeg",
    imgTitle:
      "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    imgDesc:
      "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
    postLink: '<i class="fas fa-link"></i>netflix.com',
    comments: "4.2K",
    retweets: "3.5K",
    likes: "37.5K",
  },
}) => {
  return (
    <div className="row px-2 border-top border-secondary py-2">
      <div className=" col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
        <img
          alt=""
          src={`/images/${post.avatarIcon}`}
          className="rounded-circle"
          height="50px"
          width="50px"
        />
      </div>
      <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 ms-3">
        <div className="img-post-container">
          <div className="fw-bold">
            {post.id} <FontAwesomeIcon icon={faCircleCheck} />
            <span className="text-secondary fw-normal">
              {post.handle} - {post.time}
            </span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.tweet }} />
          <div className="image-container">
            <img
              alt=""
              className="border border-secondary rounded-top"
              src={`/images/${post.postImg}`}
              width="512.66px"
              height="264px"
            />
          </div>
          <div className="img-description ps-2 border border-top-0 border-secondary rounded-bottom">
            <div className="img-title">{post.imgTitle}</div>
            <div className="img-info text-secondary">{post.imgDesc}</div>
            <div className="img-link text-secondary">{post.postLink}</div>
            <div dangerouslySetInnerHTML={{ __html: post.postLink }} />
          </div>
        </div>
        <div className="action-row d-flex justify-content-between mt-2">
          <div>
            <Link className="text-secondary" to="#">
              <FontAwesomeIcon icon={faComment} />
              <span className="wd-num">{post.comments}</span>
            </Link>
          </div>
          <div>
            <Link className="text-secondary" to="#">
              <FontAwesomeIcon icon={faRetweet} />
              <span className="wd-num">{post.retweets}</span>
            </Link>
          </div>
          <Link className="text-secondary" to="#">
            <FontAwesomeIcon icon={faHeart} />
            <span className="wd-num">{post.likes}</span>
          </Link>

          <Link className="text-secondary" to="#">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
