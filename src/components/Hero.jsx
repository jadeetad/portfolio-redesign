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
        <div className="eyebrow-line">
          frontend.dev()<span className="cursor"></span>
        </div>
        <h1>Oghenekevwe Jade Etaduovie</h1>
        <h3>
          Frontend Developer Intern · UI/UX Design Intern · Full-Stack Product Builder
        </h3>
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
          A focused and forward-thinking <strong>frontend and full-stack developer</strong> with
          a passion for building intuitive, people-centered digital experiences. Combines UI/UX
          design principles with clean, responsive frontend development and modern full-stack
          architecture to create functional, scalable web solutions. Actively advancing skills in{" "}
          <strong>React and Next.js</strong> while expanding technical breadth through the
          Ultimate AWS Certified AI Practitioner course to build scalable, future-ready products.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn btn-plum">
            Explore My Work
          </a>
          <a href="/Jade_Etaduovie_Resume.pdf" className="btn btn-ghost" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
