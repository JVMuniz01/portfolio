"use client";
import Image from "next/image";
import styles from "../styles/About.module.css"
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.profile}>
        <Image
          src="/my-photo.jpg"
          alt="Foto de João Victor"
          className={styles.profilePic}
          width={350}
          height={350}
        />
      </div>
      <div className={styles.text}>
        <h2>About me</h2>
        <p>
          I'm a backend developer with experience in Java, Spring Boot, and PostgreSQL. I'm excited about programming with React and understanding API bindings.
          I've always been connected to sports and e-sports and it was the biggest influence for me to pursue programming.
        </p>
        <h3>knowledge</h3>
        <div className={styles.techs}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width={50} height={50}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={50} height={50} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width={50} height={50} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"width={50} height={50} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"width={50} height={50} />

        </div>
      </div>
    </section>
  );
}
