import { Container, Row, Col } from "react-bootstrap";
import plotbot1 from "../assets/img/plotbot1.png";
import plotbot2 from "../assets/img/plotbot2.png";
import robots from "../assets/img/drstemrobots.png";
import drawtodigit from "../assets/img/drawtodigit.png";
import githubIcon from "../assets/img/github.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import "animate.css";
import { useState } from "react";

const RealWorldProjectItem = ({
  title,
  description,
  technologies,
  imgUrl,
  projectUrl,
}) => {
  return (
    <Row
      className="real-world-project-item align-items-center"
      style={{ marginBottom: "3rem" }}
    >
      <Col md={6}>
        <div className="project-image">
          {projectUrl ? (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <img src={imgUrl} alt={title} className="img-fluid" />
            </a>
          ) : (
            <img src={imgUrl} alt={title} className="img-fluid" />
          )}
        </div>
      </Col>
      <Col md={6}>
        <div className="project-info" style={{ textAlign: "left" }}>
          <div className="project-title">{title}</div>
          <div className="project-desc">{description}</div>
          <div className="project-tech">
            {technologies.map((tech, index) => (
              <span key={index} className={`tech-tag ${tech.category}`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

const ProjectItem = ({
  title,
  description,
  technologies,
  imgUrlWhite,
  imgUrlBlack,
  gitHubUrl,
  projectUrl,
  hasHoverEffect,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Row
      className="project-item align-items-center"
      style={{ marginBottom: "3rem" }}
    >
      <Col md={6}>
        <div className="project-info" style={{ textAlign: "left" }}>
          <div className="project-title">{title}</div>
          <div className="project-desc">{description}</div>
          <div className="project-tech">
            {technologies.map((tech, index) => (
              <span key={index} className={`tech-tag ${tech.category}`}>
                {tech.name}
              </span>
            ))}
          </div>
          <a
            href={gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img
              src={githubIcon}
              alt="Github Repo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </div>
      </Col>
      <Col md={6}>
        <div
          className="project-image"
          onMouseEnter={hasHoverEffect ? () => setHovered(true) : null}
          onMouseLeave={hasHoverEffect ? () => setHovered(false) : null}
        >
          {projectUrl ? (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={
                  hasHoverEffect && hovered && imgUrlBlack
                    ? imgUrlBlack
                    : imgUrlWhite
                }
                alt={title}
                className="img-fluid"
              />
            </a>
          ) : (
            <img src={imgUrlWhite} alt={title} className="img-fluid" />
          )}
        </div>
      </Col>
    </Row>
  );
};

export const Projects = () => {
  const realWorldProjects = [
    {
      title: "DrStemRobotics Website",
      description: "Developed the website",
      technologies: [{ name: "React", category: "language" }],
      imgUrl: robots,
      projectUrl: "https://drstemrobotics.com.au/",
    },
  ];

  const passionDrivenProjects = [
    {
      title: "PlotBot",
      description:
        "PlotBot is designed to help users easily generate interactive plots by simply uploading a CSV file and describing the desired chart type in natural language. It analyzes the data and creates visualizations such as bar charts, line charts, and pie charts. Users can upload their own datasets or use a default CSV file provided. Built with a user-friendly interface, PlotBot leverages technologies like Streamlit, Plotly, OpenAI, and pandas for seamless interaction and data processing.",
      technologies: [
        { name: "Python", category: "language" },
        { name: "OpenAI API (GPT-4o-mini)", category: "other" },
        { name: "Streamlit", category: "software-dev" },
        { name: "Pandas", category: "data-engineering" },
        { name: "Matplotlib", category: "data-engineering" },
        { name: "Seaborn", category: "data-engineering" },
        { name: "Data Visualization", category: "other" },
      ],
      imgUrlWhite: plotbot1,
      imgUrlBlack: plotbot2,
      gitHubUrl: "https://github.com/Panda-ZoeyCheng/PlotBot",
      projectUrl: "https://plotbot.streamlit.app/",
      hasHoverEffect: true,
    },
    {
      title: "DataToDigit",
      description:
        "DrawToDigit is an intuitive platform where users can hand-draw numbers directly on the interface, and the system uses a custom-trained neural network model to recognize and display results in real-time. The project combines a responsive React frontend with a powerful Flask backend, offering a smooth interactive experience that allows users to easily explore digit recognition technology.",
      technologies: [
        { name: "Python", category: "language" },
        { name: "React", category: "language" },
        { name: "TensorFlow", category: "data-engineering" },
        { name: "matplotlib", category: "data-engineering" },
        { name: "numpy", category: "data-engineering" },
        { name: "FlaskAPI", category: "other" },
      ],
      imgUrlWhite: drawtodigit,
      gitHubUrl: "https://github.com/Panda-ZoeyCheng/DrawToDigit",
      projectUrl: "",
      hasHoverEffect: false,
    },
  ];

  return (
    <section className="project" id="projects">
      <Row>
        <Col>
          <h2>Real-World Projects</h2>
        </Col>
      </Row>
      {realWorldProjects.map((project, index) => (
        <RealWorldProjectItem key={index} {...project} />
      ))}

      <div className="divider">
        <div className="divider-line"></div>
        <span className="divider-dot">·</span>
        <div className="divider-line"></div>
      </div>

      <Container>
        <Row>
          <Col>
            <h2>Passion-Driven Projects</h2>
          </Col>
        </Row>
        {passionDrivenProjects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};