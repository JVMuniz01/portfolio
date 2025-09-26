"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Forca.module.css";

const words = [
  "REACT", "NEXTJS", "PORTFOLIO", "PROGRAMACAO", "JAVASCRIPT", "COMPILADOR",
  "ARQUITETURA", "BANCO", "SISTEMA", "CODIGO", "ALGORITMO", "FUNCAO",
  "OBJETO", "VARIAVEL", "CLASSE", "METODO", "PACOTE", "SERVIDOR",
  "CLIENTE", "API", "TOKEN", "USUARIO", "PROJETO", "ESTRUTURA", "DADOS",
  "COMPILAR", "LINGUAGEM", "SOFTWARE", "HARDWARE", "PROCESSADOR"
];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default function Forca() {
  const [word, setWord] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const maxAttempts = 6;

  const displayWord = word
    .split("")
    .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  const handleGuess = (letter) => {
    letter = letter.toUpperCase();
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setWrongAttempts(wrongAttempts + 1);
      }
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongAttempts(0);
  };

  const isWinner = displayWord.replace(/ /g, "") === word;
  const isLoser = wrongAttempts >= maxAttempts;

useEffect(() => {
    const handleKeyDown = (event) => {
      const letter = event.key.toUpperCase();
      if (/^[A-Z]$/.test(letter)) {
        handleGuess(letter);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guessedLetters, wrongAttempts, word]); // dependências


  return (
    <section id="forca" className={styles.forca}>
      <h2 className={styles.title}>Jogo da Forca</h2>

      <div className={styles.gameArea}>
        <div className={styles.display}>
          <p className={styles.word}>{displayWord}</p>
          <p className={styles.attempts}>Tentativas restantes: <strong>{maxAttempts - wrongAttempts}</strong></p>
        </div>

        <div className={styles.letters}>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
            const disabled = guessedLetters.includes(letter) || isWinner || isLoser;
            const correct = guessedLetters.includes(letter) && word.includes(letter);
            return (
              <button
                key={letter}
                className={`${styles.letterBtn} ${disabled ? styles.disabled : ""} ${correct ? styles.correct : ""}`}
                onClick={() => handleGuess(letter)}
                disabled={disabled}
                aria-label={`Letra ${letter}`}
                title={letter}
              >
                {letter}
              </button>
            );
          })}
        </div>

        <div className={styles.actions}>
          <button className={styles.resetBtn} onClick={resetGame}>Reiniciar</button>
        </div>

        <div className={styles.messageArea}>
          {isWinner && <p className={styles.win}>🎉 Parabéns! Você venceu! A palavra é <strong>{word}</strong>.</p>}
          {isLoser && <p className={styles.lose}>💀 Você perdeu! A palavra era <strong>{word}</strong>.</p>}
        </div>
      </div>
    </section>
  );
}