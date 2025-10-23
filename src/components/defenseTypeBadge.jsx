// ...existing code...
import React from "react";
import PropTypes from "prop-types";
import { defense } from "../helpers/defense.js"; // ruta relativa correcta
import TypeBadge from "./typeBadge"; // componente TypeBadge espera prop `type`

/*
  Componente:
  - recibe prop `type` (string)
  - usa `defense` para obtener relaciones de daño
  - renderiza TypeBadge para cada tipo relacionado
*/
export default function DefenseTypeBadge({ type }) {
  if (!type) return null;

  const entry = (defense && defense[type]) || {};

  const doubleFrom = entry.x2 || [];
  const equal = entry.x1 || [];
  const halfFrom = entry.half || [];
  const quarterFrom = entry.quarter || [];
  const noneFrom = entry.x0 || [];

  const renderList = (label, list) => {
    if (!list || list.length === 0) return null;
    return (
      <div style={{ marginBottom: 6 }}>
        <div style={{ fontSize: 12, marginBottom: 4 }}>{label}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
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
      {renderList("2× (débil)", doubleFrom)}
      {renderList("1× (normal)", equal)}
      {renderList("1/2× (resiste)", halfFrom)}
      {renderList("1/4× (muy resistente)", quarterFrom)}
      {renderList("0× (inmune)", noneFrom)}
    </div>
  );
}

DefenseTypeBadge.propTypes = {
  type: PropTypes.string.isRequired,
};