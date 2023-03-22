import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../reducers/profile-reducer";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [birthDate, setBirthDate] = useState(profile.dateOfBirth);

  const saveHandler = (newProfile) => {
    dispatch(
      updateProfile({
        ...profile,
        name: name,
        bio: bio,
        location: location,
        website: website,
        dateOfBirth: birthDate,
      })
    );
  };
  return (
    <>
      <div
        className="wd-navbar row align-middle"
        style={{
          alignItem: "center",
        }}
      >
        <div className="col-1">
          <Link to="/tuiter/profile">
            <i class="bi bi-x-lg"></i>
          </Link>
        </div>
        <div className="col-9">
          <p>
            <b>Edit profile</b>
          </p>
        </div>
        <div className="col-1">
          {/* gotta change this so that handle onclick then change  back to profile page */}
          <Link to="/tuiter/profile">
            <button
              onClick={saveHandler}
              className="btn btn-dark rounded-pill btn-sm"
            >
              Save
            </button>
          </Link>
        </div>
      </div>
      <div className="wd-banner row">
        <div className="row">
          <img alt="" src={`/images/${profile.bannerPicture}`} />
        </div>
      </div>
      <div className="wd-profile-pic row">
        <div
          style={{
            margin: "-60px 0px 5px 20px",
          }}
        >
          <img
            alt=""
            src={`/images/${profile.profilePicture}`}
            className="rounded-circle"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className="name-container form-floating my-4">
        <textarea
          className="form-control"
          id="nameForm"
          style={{
            height: "70px",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        <label for="nameForm">Name</label>
      </div>
      <div className="bio-container form-floating my-4">
        <textarea
          className="form-control"
          id="bioForm"
          style={{
            height: "100px",
          }}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <label for="bioForm">Bio</label>
      </div>
      <div className="location-container form-floating my-4">
        <textarea
          className="form-control"
          id="locationForm"
          style={{
            height: "70px",
          }}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></textarea>
        <label for="locationForm">Location</label>
      </div>
      <div className="website-container form-floating my-4">
        <textarea
          className="form-control"
          id="websiteForm"
          rows="2"
          style={{
            height: "70px",
          }}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        ></textarea>
        <label for="websiteForm">Website</label>
      </div>
      <div className="dob-container form-floating my-4">
        <textarea
          className="form-control"
          id="websiteForm"
          rows="2"
          style={{
            height: "70px",
          }}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        ></textarea>
        <label for="websiteForm">Birth Date (mm/dd/yyyy)</label>
      </div>
      <div>Switch to professional</div>
    </>
  );
};

export default EditProfile;
