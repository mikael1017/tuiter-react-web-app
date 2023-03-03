import React from "react";
import PostItem from "./postItem";
import postArray from "./posts.json";
import "./index.css";

const HomeComponent = () => {
  return (
    <ul className="list-group">
      {postArray.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default HomeComponent;
