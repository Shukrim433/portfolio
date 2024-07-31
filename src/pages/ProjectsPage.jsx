import ProjectList from "../components/UI/ProjectList";
import ImageSlider from "../components/ImageSlider";
import { Typewriter } from "react-simple-typewriter";
import hero1 from "../imgs/hero1.png"
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
      url: "http://localhost:3000/image-1.jpeg",
      title: "beach",
      skill: "React",
      icon: <FaReact />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "boat",
      skill: "JavaScript",
      icon: <TbBrandJavascript />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "forest",
      skill: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "city",
      skill: "HTML",
      icon: <IoLogoHtml5 />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "italy",
      skill: "SQL",
      icon: <TbSql />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "beach",
      skill: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "boat",
      skill: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "forest",
      skill: "Mongoose",
      icon: <SiMongodb />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "city",
      skill: "Express JS",
      icon: <SiExpress />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "italy",
      skill: "Node JS",
      icon: <FaNodeJs />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "italy",
      skill: "Handlebars",
      icon: <SiHandlebarsdotjs />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "italy",
      skill: "Jquery",
      icon: <SiJquery />,
    },
    {
      url: "http://localhost:3000/image-1.jpeg",
      title: "italy",
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
