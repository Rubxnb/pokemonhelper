import PropTypes from "prop-types";
import TypeBadge from "./typeBadge";

export default function DefenseTypeBadge({ type }) {
  if (!type) return null;

  const quadrupleFrom = type.x4 || [];
  const doubleFrom = type.x2 || [];
  const equal = type.x1 || [];
  const halfFrom = type.half || [];
  const quarterFrom = type.quarter || [];
  const noneFrom = type.x0 || [];

  const renderList = (label, list) => {
    if (!list || list.length === 0) return null;
    return (
      <div style={{ marginBottom: 6 }}>
        <h3>{label}</h3>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {list.map((t) => {
            const typeName = typeof t === "string" ? t : (t && (t.name || t.type)) || String(t);
            return <TypeBadge key={typeName} type={typeName} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderList("Sufre x4 por", quadrupleFrom)}
      {renderList("Sufre x2 por", doubleFrom)}
      {renderList("Sufre x1 por", equal)}
      {renderList("Sufre x0.5 por", halfFrom)}
      {renderList("Sufre x0.25 por", quarterFrom)}
      {renderList("Sufre x0 por", noneFrom)}
    </div>
  );
}

DefenseTypeBadge.propTypes = {
  type: PropTypes.string.isRequired,
};