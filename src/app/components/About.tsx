import Image from "next/image";
import React from "react";

function About() {
  return (
    <div
      id="about"
      className="lg:px-custom flex w-full flex-col items-center justify-center gap-12 px-20  pt-20 lg:flex-row "
    >
      <div className="max-h-96 max-w-md overflow-hidden   rounded-lg lg:aspect-square">
        <img
          src="desk.jpg"
          className="h-full w-full object-cover"
          alt="about"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-center  lg:items-start lg:text-start">
        <h2 className="font-2xl font-bold uppercase text-blue-500">About me</h2>
        <h1 className="text-2xl font-bold lg:max-w-2xl">
          A dedicated and dynamic web developer always striving to improve
        </h1>
        <p className="text-lg lg:max-w-2xl">
          As a software engineering student and Junior Developer , I bring a
          strong programming foundation, particularly in{" "}
          <span className="font-bold text-cyan-800">
            {" "}
            JavaScript and growing proficiency in TypeScript
          </span>
          , I possess an impressive arsenal of skills in{" "}
          <span className="font-bold text-cyan-800">
            HTML, CSS, React, Next, Angular, Node, Nest, Spring boot and more{" "}
          </span>
          . I excel in designing and maintaining responsive websites that offer
          a smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </p>
      </div>
    </div>
  );
}

export default About;
