export default function SkillGroup({ title, items, wide = false }) {
  return (
    <div className={`skills-group${wide ? " wide" : ""}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
