import "../styles/AboutMe.css";
export default function AboutMePage() {
  return (
    <div className="about-me">
      <div className="about-header" style={{ color: "#C7B65C" }}>
        <h2>
          {" "}
          <b>
            {" "}
            <i>Hey, my name is Shukri! </i>
          </b>
        </h2>
      </div>{" "}
      <br />
      <div className="about-body">
        <p>
          I am a{" "}
          <span style={{ color: "#C7B65C" }}>full stack web developer</span>{" "}
          with an extensive technical skillset in both front-end and back-end
          development.
        </p>{" "}
        <br />
        <p>
          I have a certificate from the{" "}
          <span style={{ color: "#C7B65C" }}> University of Birmingham </span>
          for completing a six-month-long web development bootcamp. This course
          gave me hands-on experience working on a multitude of projects of
          varying sizes and complexity. I also had the opportunity to
          collaborate on group projects, which gave me the opportunity to experience coding in a team setting. I have created sites that rely solely on front-end
          frameworks and technologies like{" "}
          <span style={{ color: "#C7B65C" }}>React, Handlebars</span>, etc., as
          well as sites that utilize
          <span style={{ color: "#C7B65C" }}> SQL and NoSQL </span> databases.
        </p>
        <br />
        <p>
          Prior to completing this bootcamp, I didn't have much experience with
          coding. I completed my A-levels in the summer of 2022 and decided to
          take a <span style={{ color: "#C7B65C" }}>gap year</span> before
          attending university the following year to study{" "}
          <span style={{ color: "#C7B65C" }}> Dental Hygiene and Therapy</span>{" "}
          at the University of Birmingham. While on my gap year, my mother
          convinced me to pick up a new skill to spend my off-time more
          productively. This is when I came across the world of coding and web
          development. I came to enjoy coding so much that I made the tough
          decision to withdraw from university just before i was due to start. I
          realized that{" "}
          <span style={{ color: "#C7B65C" }}>
            dentistry was not the path for me;
          </span>{" "}
          instead, my true interest was in coding and web development.
        </p>
      </div>
    </div>
  );
}
