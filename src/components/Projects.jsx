import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-row">
        <ProjectCard
          tag="Featured"
          featured
          title="KANSŌ (感想) — AI-Powered Reflective Writing Companion"
          link="https://kanso-reflections-nine.vercel.app/"
          description="A full-stack reflective writing app that returns literary observations on what you've written, rather than advice — with a custom writing interface and distinct visual identity."
          tools="Next.js · Drizzle ORM · Better Auth · Upstash Redis · Claude API / Gemini API"
        />
        <ProjectCard
          tag="Machine Learning"
          title="RenalSense — Chronic Kidney Disease Risk Classifier"
          link="https://clear-path-ckd.vercel.app/"
          description="Machine-learning project that classifies CKD risk into five levels from 42 patient inputs, using a Random Forest model served through a Flask API behind a React interface. An academic project, not a diagnostic tool."
          tools="React · Flask · scikit-learn · Random Forest"
        />
        <ProjectCard
          tag="Live"
          title="SpendWise — AI-Powered Finance Tracker"
          link="https://aura-wallet-beta.vercel.app/"
          description="Smart financial management platform with AI-powered spending habit analysis, peak period identification, and splurge tracking."
          tools="React · AI Integration · Responsive Design"
        />
        <ProjectCard
          tag="Mobile"
          title="Laptop Harbor — E-Commerce Platform for Laptops"
          link="https://laptopharbor-flutter-le6p.vercel.app/"
          description="E-commerce app for laptops of all types, covering product browsing through a full purchase flow."
          tools="Flutter"
        />
        <ProjectCard
          tag="Collaboration"
          title="EventSphere — UI/UX Design Collaboration"
          description="Collaborated with a small team designing a modern event discovery platform — research, Figma wireframes, layout systems, and user flow decisions."
          tools="Figma"
        />
      </div>
    </section>
  );
}
