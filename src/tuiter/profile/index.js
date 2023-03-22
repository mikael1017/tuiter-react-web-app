import React from "react";
import { Link } from "react-router-dom";

const ProfileComponent = ({
  profile = {
    name: "Manchester United",
    handle: "@jaegba",
    profilePicture: "muprofile.jpeg",
    bannerPicture: "banner.jpeg",
    bio: "One of the most popular and successful football (soccer) clubs in the world. The club is based in Manchester, England, and was founded in 1878 as Newton Heath LYR Football Club. The club was later renamed Manchester United in 1902.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "4/2009",
    followingCount: 23,
    followersCount: "3.4m",
  },
}) => {
  return (
    <>
      <div className="wd-navbar-container row">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-2"
        >
          <i class="bi bi-arrow-left"></i>
        </div>
        <div className="col-10">
          <h4 className="row">{profile.name}</h4>
          <div className="row">6,144 Tweets</div>
        </div>
      </div>
      <div className="wd-profile-container row">
        <div className="row">
          <img alt="" src={`/images/${profile.bannerPicture}`} />
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col mt-2">
            <Link to="/tuiter/edit-profile">
              <button className="btn btn-outline-secondary rounded-pill">
                <b>Edit profile</b>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div
          style={{
            margin: "-150px 0px 5px 20px",
          }}
        >
          <img
            alt=""
            src={`/images/${profile.profilePicture}`}
            className="rounded-circle"
            height={200}
            width={200}
          />
        </div>
      </div>
      <div className="wd-name-container row">
        <div className="row">
          <h4 className="font-heading text-lg mb-0">
            <b>{profile.name}</b>
          </h4>
          <p>
            <small>{profile.handle}</small>
          </p>
        </div>
      </div>
      <div className="bio-container row">
        <p>{profile.bio}</p>
      </div>
      <div className="add-info-container row">
        <div className="col">
          <i class="bi bi-geo-alt"></i>
          <span className="ms-1">{profile.location}</span>
        </div>
        <div className="col">
          <i class="bi bi-balloon"></i>
          <span className="ms-1">Born {profile.dateOfBirth}</span>
        </div>
        <div className="col">
          <i class="bi bi-calendar3"></i>
          <span className="ms-1">Joined {profile.dateJoined}</span>
        </div>
      </div>
      <div
        className="follow-stats-container row"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="col">
          <b>{profile.followingCount}</b> Following
        </div>
        <div className="col">
          <b>{profile.followersCount}</b> Followers
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default ProfileComponent;
