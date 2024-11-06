import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "McGill Software Engineering and Cell Biology student",
          "Amazon Software Development Engineer Intern",
          "Software Engineer in training",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
        
      }}
    />
  );
}

export default Type;
