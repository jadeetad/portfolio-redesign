import SectionTitle from "./SectionTitle";

const roles = [
  {
    role: "Frontend Developer Intern",
    company: "NUPEMCO",
    period: "2026",
    stack: "React · TypeScript · TanStack Start · shadcn/ui",
    points: [
      "Built the frontend of the company's staff portal dashboard in React and TypeScript, including the login screen and role-based dashboards for different staff profiles.",
      "Designed a shared layout and reusable components so new dashboards and menus could be added consistently.",
      "Presented the working demo to my supervisor and iterated on their feedback, adding progress indicators, a clearer header and per-profile navigation menus.",
      "Rebuilt the project on TanStack Start and shadcn/ui to prepare it for backend and authentication integration.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <SectionTitle index="01">Experience</SectionTitle>
      <div className="exp">
        {roles.map((r) => (
          <article className="exp-item" key={`${r.company}-${r.role}`}>
            <div className="exp-meta">
              <span className="exp-period">{r.period}</span>
              <span className="exp-company">{r.company}</span>
            </div>
            <div className="exp-body">
              <h3>{r.role}</h3>
              <ul>
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="tools">{r.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
