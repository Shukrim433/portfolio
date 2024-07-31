import ProjectList from "../components/UI/ProjectList";
import ImageSlider from "../components/ImageSlider";
import { Typewriter } from "react-simple-typewriter";

import { FaReact, FaCss3Alt, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript, TbSql } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiHandlebarsdotjs,
  SiJquery,
} from "react-icons/si";
import { useBurger } from "../utils/HamburgerContext";
import "../styles/Project.css";
import "../styles/ImageSlider.css";

export default function ProjectsPage() {
  const { burgerClicked } = useBurger();
  /* console.log(burgerClicked, "ProjectsPage comp"); */
  const slides = [
    {
      skill: "React",
      icon: <FaReact />,
    },
    {
      skill: "JavaScript",
      icon: <TbBrandJavascript />,
    },
    {
      skill: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      skill: "HTML",
      icon: <IoLogoHtml5 />,
    },
    {
      skill: "SQL",
      icon: <TbSql />,
    },
    {
      skill: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      skill: "Mongoose",
      icon: <SiMongodb />,
    },
    {
      skill: "Express JS",
      icon: <SiExpress />,
    },
    {
      skill: "Node JS",
      icon: <FaNodeJs />,
    },
    {
      skill: "Handlebars",
      icon: <SiHandlebarsdotjs />,
    },
    {
      skill: "Jquery",
      icon: <SiJquery />,
    },
    {
      skill: "Bootstrap",
      icon: <FaBootstrap />,
    },
  ];

  return (
    <>
      <div className="hero" style={{ background: '#C7B65C' }}>
        <div className="img-slider-container">
          {burgerClicked === false && <ImageSlider slides={slides} />}
        </div>
        <h1 className="hero-text">
          <Typewriter
            words={["These are my technical skills and projects"]}
            loop={1}
            typeSpeed={70}
            delaySpeed={1000}
            cursor
          />
        </h1>
        
      </div>

      <div className="projects-container">
        {burgerClicked === false && <ProjectList />}
      </div>
    </>
  );
}
