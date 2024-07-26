import ProjectList from "../components/UI/ProjectList";
import ImageSlider from "../components/ImageSlider";
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
  console.log(burgerClicked, "ProjectsPage comp");
  const slides = [
    {
      url: "http://localhost:3000/image-1.jpg",
      title: "beach",
      skill: "React",
      icon: <FaReact />,
    },
    {
      url: "http://localhost:3000/image-2.jpg",
      title: "boat",
      skill: "JavaScript",
      icon: <TbBrandJavascript />,
    },
    {
      url: "http://localhost:3000/image-3.jpg",
      title: "forest",
      skill: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      url: "http://localhost:3000/image-4.jpg",
      title: "city",
      skill: "HTML",
      icon: <IoLogoHtml5 />,
    },
    {
      url: "http://localhost:3000/image-5.jpg",
      title: "italy",
      skill: "SQL",
      icon: <TbSql />,
    },
    {
      url: "http://localhost:3000/image-1.jpg",
      title: "beach",
      skill: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
    {
      url: "http://localhost:3000/image-2.jpg",
      title: "boat",
      skill: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      url: "http://localhost:3000/image-3.jpg",
      title: "forest",
      skill: "Mongoose",
      icon: <SiMongodb />,
    },
    {
      url: "http://localhost:3000/image-4.jpg",
      title: "city",
      skill: "Express JS",
      icon: <SiExpress />,
    },
    {
      url: "http://localhost:3000/image-5.jpg",
      title: "italy",
      skill: "Node JS",
      icon: <FaNodeJs />,
    },
    {
      url: "http://localhost:3000/image-5.jpg",
      title: "italy",
      skill: "Handlebars",
      icon: <SiHandlebarsdotjs />,
    },
    {
      url: "http://localhost:3000/image-5.jpg",
      title: "italy",
      skill: "Jquery",
      icon: <SiJquery />,
    },
    {
      url: "http://localhost:3000/image-5.jpg",
      title: "italy",
      skill: "Bootstrap",
      icon: <FaBootstrap />,
    },
  ];

  return (
    <>
      <div className="img-slider-container">
        {burgerClicked === false && <ImageSlider slides={slides} />}
      </div>

      <div className="projects-container">
        {burgerClicked === false && <ProjectList />}
      </div>
    </>
  );
}
