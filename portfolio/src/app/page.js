"use client";
import About from "./components/About";
import styles from "./styles/Home.module.css"
import Projects from "./components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <section className={styles.extraSection}>
        <Link href="/forca" className={styles.forcaButton}  >
          Play Forca
        </Link>
      </section>
    </main>
  );
}
