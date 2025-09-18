"use client";
import About from "./components/About";
import Projects from "./components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <section>
        <h2>Extra</h2>
        <p>Joguinho extra</p>
        <Link href="/forca">Jogo da Forca</Link>
      </section>
    </main>
  );
}
