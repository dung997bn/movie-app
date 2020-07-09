import React from "react";

const About = (props) => {
  return (
    <div>
      <h1>Hello ablout</h1>
      <h2>{props.a}</h2>
    </div>
  );
};

About.getInitialProps = () => {
  let a = 1;
  return { a };
};

export default About;
