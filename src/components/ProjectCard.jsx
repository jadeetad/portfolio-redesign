export default function ProjectCard({ tag, title, link, description, tools, featured = false }) {
  const className = `project-card${featured ? " featured" : ""}${link ? " is-link" : ""}`;

  const content = (
    <>
      {tag && <span className="project-tag">{tag}</span>}
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <p className="tools">{tools}</p>
      {link && (
        <span className="project-cta">
          View project <span className="arrow" aria-hidden="true">↗</span>
        </span>
      )}
    </>
  );

  // Whole card is the link when a project has a live URL.
  if (link) {
    return (
      <a className={className} href={link} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
