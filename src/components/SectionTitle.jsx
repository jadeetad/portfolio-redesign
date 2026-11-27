export default function SectionTitle({ index, children }) {
  return (
    <div className="section-head">
      <span className="section-idx">{index}</span>
      <h2 className="section-title">{children}</h2>
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}
