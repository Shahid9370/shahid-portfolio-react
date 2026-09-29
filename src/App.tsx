import { BackToTop } from "./components/common/BackToTop";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { QAProcess } from "./components/sections/QAProcess";
import { Skills } from "./components/sections/Skills";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <QAProcess />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;