"use client";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Contact</h2>
      <p>Email: j040vmr@gmail.com</p>
      <p>Phone: (81)98105-1727</p>
      <a 
        href="/curriculo.pdf" 
        download 
        className={styles.downloadButton}
      >
        Download Currículo
      </a>
      <p className={styles.copy}>© 2025 João Victor. All rights reserved.</p>
    </footer>
  );
}