import React from "react";

function Header() {
  return (
    <section className="header">
      <header style={headerStyle}>
        <article>
          <Logo />
        </article>
      </header>
    </section>
  );
}

const Logo = () => (
  <img
    width="100"
    src="https://image.shutterstock.com/image-vector/lets-talk-retro-speech-bubble-600w-330576869.jpg"
    alt="Let's Talk"
  />
);

const headerStyle = {
  background: "#fdfefe",
  //color: "#fff",
  textAlign: "left",
  padding: "10px"
};

export default Header;
