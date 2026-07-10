export default function ProjectCard({ tag, title, link, description, tools, featured = false }) {
  return (
    <div className={`project-card${featured ? " featured" : ""}`}>
      {tag && <span className="project-tag">{tag}</span>}
      <h3>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="desc">{description}</p>
      <p className="tools">{tools}</p>
    </div>
  );
}
