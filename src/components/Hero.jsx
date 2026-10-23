import heroImg from "../assets/Screenshot_20250718-224436.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-img">
        <div className="frame">
          <img src={heroImg} alt="Oghenekevwe Jade Etaduovie" />
        </div>
      </div>

      <div className="hero-text">
        <h1>Oghenekevwe Jade Etaduovie</h1>
        <h3>Full-Stack Software Developer · AI/ML · UI/UX Design</h3>
        <div className="contact-line">
          <a href="mailto:jadeetad@jadeetad.com">jadeetad@jadeetad.com</a>
          <span className="sep">|</span>
          <span>08028739017</span>
          <span className="sep">|</span>
          <a href="https://github.com/jadeetad" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="sep">|</span>
          <a
            href="https://www.linkedin.com/in/jade-etaduovie-95445231b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="hero-about">
          <strong>Full-stack software developer</strong> building with React, Next.js and Flutter,
          with <strong>AI/ML training</strong> from my Advanced Diploma in Software Engineering
          (Java, AI/ML) at APTECH. I build AI-powered products with the Claude and Gemini APIs
          and a Random Forest classifier, and pair them with clean, people-centered design.
          Currently deepening my skills through the AWS Certified AI Practitioner course.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn btn-plum">
            Explore My Work
          </a>
          <a href="/Oghenekevwe_Jade_Etaduovie_CV.pdf"
            className="btn btn-ghost"
            download="Oghenekevwe_Jade_Etaduovie_CV.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
