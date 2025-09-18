"use client";
import styles from "../styles/Header.module.css" 

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hangman">Jogo da Forca</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
