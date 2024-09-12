import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "../styles/Project.css";
import data from "../data/projects2.json";
import data2 from "../data/projects3.json";
import { useBurger } from "../utils/HamburgerContext";

const MoreProjects = () => {
  const { burgerClicked } = useBurger();

  return burgerClicked === false ? ( // to hide page when small screen nav bar is open
    <>
      <div className="project-list">
        {data.map((project, index) => (
          <div className="single-more-project" key={index}>
            <img src={project.src} alt="project image"></img>

            <div className="card-body">
              <h1 className="project-title">{project.project}</h1>
              <h3 className="project-links">
                <a href={project.repo}>
                  <span>
                    <FaGithub />
                  </span>{" "}
                  Github Repository
                </a>{" "}
              </h3>
              <h3 className="project-links">
                {" "}
                <a href={project.link}>
                  <span>
                    <CgWebsite />
                  </span>{" "}
                  Deployed Application
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* PROJECTS WITH DEMO LINKS */}
      <div className="project-list">
        {data2.map((project, index) => (
          <div className="single-more-project" key={index}>
            <img src={project.src} alt="project image"></img>

            <div className="card-body">
              <h1 className="project-title">{project.project}</h1>
              <h3 className="project-links">
                <a href={project.repo}>
                  <span>
                    <FaGithub />
                  </span>{" "}
                  Github Repository
                </a>{" "}
              </h3>
              <h3 className="project-links">
                {" "}
                {project.demoLinks.map((demoLink, index) => (
                  <a className="demoLink" href={demoLink} key={index}>
                    Watch Demo Part <span>{index + 1}</span>{" "}
                  </a>
                ))}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : null;
};

export default MoreProjects;
