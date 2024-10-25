import React, { useEffect, useRef } from "react";
import aws from "../assets/img/aws.png";
import azure from "../assets/img/azure.png";
import css from "../assets/img/css.png";
import databricks from "../assets/img/databricks.png";
import git from "../assets/img/git.png";
import html from "../assets/img/html.png";
import js from "../assets/img/js.png";
import mysql from "../assets/img/mysql.png";
import python from "../assets/img/python.png";
import react from "../assets/img/react.png";
import streamlit from "../assets/img/streamlit.png";
import ts from "../assets/img/ts.png";

export const AboutMe = () => {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    if (skillsRef.current) {
      const icons = skillsRef.current.querySelectorAll("img");
      icons.forEach((icon) => observer.observe(icon));
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }

      if (skillsRef.current) {
        const icons = skillsRef.current.querySelectorAll("img");
        icons.forEach((icon) => observer.unobserve(icon));
      }
    };
  }, []);

  return (
    <section className="aboutme-container" id="aboutme">
      <div className="about-me-text hidden" ref={aboutMeRef}>
        <div className="about-me-title">Who am I?</div>
        <p>
          Hi, I’m <span className="name">Zoey Cheng</span>, a passionate
          <span className="strong-content"> Software Developer</span> with a
          strong interest in AI and cutting-edge technologies. I recently
          completed my master’s degree from{" "}
          <span className="strong-content">the University of Queensland</span>{" "}
          and am now focused on finding opportunities that allow me to combine
          my love for <span className="strong-content">backend systems</span>,{" "}
          <span className="strong-content">cloud services</span>, and{" "}
          <span className="strong-content">full-stack development</span>.
        </p>
        <p>
          I’m driven by a constant desire to learn and stay at the forefront of
          AI and software development. I thrive in challenging environments
          where innovation is key, and I’m particularly drawn to projects that
          leverage AI and data to deliver impactful solutions.
        </p>
        <p>
          Outside of my professional work, I’m a puzzle enthusiast, enjoy
          building intricate LEGO sets, and love getting lost in mystery novels.
          I’m also a fan of stand-up comedy, which helps keep me sharp and
          creative—traits I bring to every project I work on.
        </p>
      </div>
      <div className="skills-container" ref={skillsRef}>
        <div className="skills-icons">
          <img src={aws} alt="AWS" />
          <img src={azure} alt="Azure" />
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={js} alt="JavaScript" />
          <img src={ts} alt="TypeScript" />
          <img src={python} alt="Python" />
          <img src={react} alt="React" />
          <img src={mysql} alt="MySQL" />
          <img src={git} alt="Git" />
          <img src={databricks} alt="Databricks" />
          <img src={streamlit} alt="Streamlit" />
        </div>
      </div>
    </section>
  );
};
