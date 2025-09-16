import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Hangman from "../components/Hangman";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Hangman />
      </main>
      <Footer />
    </>
  );
}
