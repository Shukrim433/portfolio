import ProjectList from "../components/UI/ProjectList";
import { useBurger } from "../utils/HamburgerContext";
import "../styles/Project.css";
export default function ProjectsPage() {
    const {burgerClicked} = useBurger()
  console.log(burgerClicked, "ProjectsPage comp");
  return (
    <div className="projects-container">
      {burgerClicked === false && <ProjectList />}
    </div>
  );
}
