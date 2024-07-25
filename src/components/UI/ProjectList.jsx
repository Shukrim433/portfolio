import data from "../../data/projects.json";

export default function ProjectList() {
  return (
    <div className="project-list">
      {data.map((project, index) => (
        <div className="single-project" key={index}>
          <img src={project.src} alt="project image"></img>

          <div className="card-body">
            <h1 className="project-title">{project.project}</h1>
            <h3 className="project-links">
              <a href={project.repo}>
                Github Repository
              </a>{" "}
            </h3>
            <h3 className="project-links">
              {" "}
              <a href={project.link}>Deployed Application</a>
            </h3>
          </div>
          {/* <a className="github-link" href={project.repo}>Github Repository</a> */}
        </div>
      ))}
    </div>
  );
}
