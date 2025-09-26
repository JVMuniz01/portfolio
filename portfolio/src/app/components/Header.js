"use client";
import Link from "next/link";
import styles from "../styles/Header.module.css" 

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link href="https://github.com/JVMuniz01?tab=repositories">Github</Link></li>
          <li><Link href="/forca">Play Forca</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
