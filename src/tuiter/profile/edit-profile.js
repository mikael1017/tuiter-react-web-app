import React from "react";

const EditProfile = ({
  profile = {
    name: "Manchester United",
    handle: "@jaegba",
    profilePicture: "muprofile.png",
    bannerPicture: "banner.jpeg",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "4/2009",
    followingCount: 340,
    followersCount: 223,
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
          <div className="col">profile pic</div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">Edit profile button</div>
        </div>
      </div>
      <div className="wd-name-container row">
        <div className="row">
          <h4 className="font-heading text-lg">{profile.name}</h4>
        </div>
        <div className="row">{profile.handle}</div>
      </div>
      <div className="bio-container row">
        <p>{profile.bio}</p>
      </div>
      <div className="add-info-container row">
        <div className="col">{profile.location}</div>
        <div className="col">{profile.dateOfBirth}</div>
        <div className="col">{profile.dateJoined}</div>
      </div>
      <div
        className="follow-stats-container row"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="col">{profile.followingCount} Following</div>
        <div className="col">{profile.followersCount} Followers</div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default EditProfile;
