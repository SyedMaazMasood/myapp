import React from "react";

function Center() {
  return (
    <section className="center">
      <Post />
    </section>
  );
}

const Post = () => {
  return (
    <article className="post">
      <Profile name="Harry" textStatus="Good Morning!" />
      <Profile name="Chris" textStatus="Party!!!" />
      <Profile name="John" textStatus="Tomorrow is the match" />
    </article>
  );
};

const Profile = props => {
  console.log(props);
  return (
    <section className="profile">
      <img
        width="50"
        src="http://tcap.pbworks.com/f/1435170280/myAvatar.png"
        alt="Profile Pic"
      />
      <h5>{props.name}</h5>
      <p>{props.textStatus}</p>
    </section>
  );
};

export default Center;
