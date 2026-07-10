import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Core Skills</h2>
      <div className="skills-grid">
        <SkillGroup
          title="Frontend Development"
          items={["HTML, CSS, JavaScript, React, Next.js", "Responsive & Mobile-First Design", "Modern UI Layouts"]}
        />
        <SkillGroup
          title="Full-Stack & Backend"
          items={["Next.js (App Router), Drizzle ORM, Better Auth", "API Route Design", "Claude API / Gemini API Integration"]}
        />
        <SkillGroup
          title="UI/UX & Product Design"
          items={["Figma, User-Centered Design", "Wireframing & Visual Systems", "Design Consistency"]}
        />
        <SkillGroup
          title="Research & Documentation"
          items={["Design Research", "Content Structuring", "Clear Technical Documentation"]}
        />
        <SkillGroup
          title="Financial & Analytical"
          items={["Credit Analysis, Quantitative Analysis (Finance)", "Research Skills, Critical Thinking", "Presentation Skills, Hazard Identification"]}
        />
        <SkillGroup
          title="Collaboration & Version Control"
          items={["Team Collaboration, Clear Communication, User-Focused Problem Solving — Git, GitHub"]}
          wide
        />
      </div>
    </section>
  );
}
