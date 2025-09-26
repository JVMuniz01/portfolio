"use client";
import styles from "../styles/Projects.module.css"
const projects = [
  {
    title: "Workshop",
    description: "This project is a RESTful web services system for a simple e-commerce platform, developed with Java 17, Spring Boot, JPA/Hibernate, and PostgreSQL (production) / H2 (testing) databases.",
    link: "https://github.com/JVMuniz01/workshop-springboot3-jpa.git"
  },
  {
    title: "Chess system",
    description: "This is a Java chess system project, developed to practice Object-Oriented Programming (OOP) concepts. The program runs entirely in the terminal, allowing two players to play against each other.",
    link: "https://github.com/JVMuniz01/chess-system-java.git"
  },
  {
    title: "Login system backend",
    description: "Login and user management system. This project is divided into two parts. My first project using springboot and JWT, Token and request for security",
    link: "https://github.com/JVMuniz01/login-system.git"
  },{
    title: "Login system frontend",
    description: "Login and user management system. Basic frontend just to see if the conection and request are working",
    link: "https://github.com/JVMuniz01/login-system-front.git"
  }

];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
