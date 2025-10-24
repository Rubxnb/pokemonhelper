import Chip from '@mui/material/Chip';
import { colorMap } from '../helpers/colorType';
import { espType } from '../helpers/espType';

const getTypeName = (t) => {
  if (t === null || t === undefined) return '';
  if (typeof t === 'string') return t;
  if (typeof t === 'number') return String(t);
  if (typeof t === 'object') {
    if (typeof t.name === 'string') return t.name;
    if (t.type && typeof t.type === 'object' && typeof t.type.name === 'string') return t.type.name;
    if (typeof t.type === 'string') return t.type;
    try { return JSON.stringify(t); } catch { return String(t); }
  }
  return String(t);
}

export default function TypeBadge({ type }) {
  const rawName = getTypeName(type).toLowerCase();
  const label = espType[rawName] || rawName || '';
  const bg = colorMap[rawName] || "#777";

  return (
    <Chip
      label={label}
      size="large"
      style={{ 
        backgroundColor: bg,
        color: "#fff",
        border: "1pxsolid #000",}}
    />
  );
}