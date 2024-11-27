import { Container, Row, Col } from "react-bootstrap";
import plotbot1 from "../assets/img/plotbot1.png";
import plotbot2 from "../assets/img/plotbot2.png";
import robots from "../assets/img/drstemrobots.png";
import drawtodigit from "../assets/img/drawtodigit.png";
import highstreetgym from "../assets/img/highstreetgym.png";
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
      <Col md={6} className="project-info">
        <div className="project-title">{title}</div>
        <div className="project-desc">{description}</div>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className={`tech-tag ${tech.category}`}>
              {tech.name}
            </span>
          ))}
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
          {gitHubUrl && (
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
          )}
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
      description:
        "As a member of the development team, I contributed to the Dr. STEM Robotics Club website, which promotes STEM education through robotics. I designed and implemented the Timeline Page using React and JSON for structured data storage, dynamically showcasing the club's milestones. Additionally, I refined the main interface, improving styles, fonts, and the Sponsors section to enhance visual cohesion and usability.",
      technologies: [
        { name: "React", category: "language" },
        { name: "Front-End Development", category: "software-dev" },
        { name: "UI/UX Design", category: "software-dev" },
        { name: "Collaboration and Teamwork", category: "other" },
      ],
      imgUrl: robots,
      projectUrl: "https://drstemrobotics.com.au/",
    },
  ];

  const passionDrivenProjects = [
    {
      title: "HighStreetGym",
      description:
        "HighStreetGym is a gym management platform that enables users to book classes, manage memberships, and view schedules.  As part of the team, I focused on building and deploying the backend using Node.js, Express.js, and MySQL, designing scalable RESTful APIs for seamless data handling. The deployment process was led on AWS EC2 with PM2 and Nginx, and CI/CD workflows were implemented using GitHub Actions to streamline deployments. Collaborated with team members on the frontend, built with React.js and Tailwind CSS, to deliver a responsive and user-friendly interface.",
      technologies: [
        { name: "JavaScript", category: "language" },
        { name: "SQL", category: "language" },
        { name: "Node.js", category: "software-dev" },
        { name: "Express.js", category: "software-dev" },
        { name: "AWS EC2", category: "devops" },
        { name: "PM2", category: "devops" },
        { name: "Nginx", category: "devops" },
        { name: "React.js", category: "language" },
        { name: "Tailwind CSS", category: "software-dev" },
        { name: "RESTful API Design", category: "other" },
        { name: "CI/CD Automation", category: "other" },
      ],
      imgUrlWhite: highstreetgym,
      gitHubUrl: "",
      projectUrl: "http://13.239.112.124/",
      hasHoverEffect: false,
    },
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
