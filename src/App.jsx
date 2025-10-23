// ...existing code...
import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { getPokemon } from './api/pokemonApi'
import TypeBadge from './components/typeBadge';
import DefenseTypeBadge from './components/defenseTypeBadge';

function App() {
  const [searchText, setSearchText] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);

   const handleSearch = async () => {
    if (!searchText.trim()) return;
    try {
      const res = await getPokemon(searchText.trim().toLowerCase());
      const data = typeof res === 'string' ? JSON.parse(res) : res;

      const sprites = data.sprites || {};
      const img =
        sprites.other?.['official-artwork']?.front_default ||
        sprites.other?.['dream_world']?.front_default ||
        sprites.front_default ||
        Object.values(sprites).find(v => typeof v === 'string' && v) ||
        null;

      setImageUrl(img);
      setPokemonName(data.name || "");

      // Normalizar 'types' para asegurarnos de pasar strings a TypeBadge
      const rawTypes = data.types || [];
      console.log('raw types:', rawTypes);
      const normTypes = rawTypes
        .map(t => {
          if (!t) return '';
          if (typeof t === 'string') return t;
          // casos comunes de la API: { slot, type: { name, url } } o { type: 'grass' } o { name: 'grass' }
          if (typeof t === 'object') {
            if (typeof t.type === 'string') return t.type;
            if (t.type && typeof t.type.name === 'string') return t.type.name;
            if (typeof t.name === 'string') return t.name;
          }
          // fallback: convertir a string para evitar pasar objetos como children
          try { return JSON.stringify(t); } catch { return String(t); }
        })
        .filter(Boolean);
      setTypes(normTypes);

      console.log('forms:', data.forms);
    } catch (err) {
      console.error(err);
      alert(`Error: ${err.message}`);
    }
  };
  return (
    <>
      <div>
      <TextField
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      id="outlined-basic" label="Nombre o ID" variant="outlined" />
      <Button onClick={handleSearch} variant="contained">Buscar</Button>
      </div>
      {pokemonName && (
        <div style={{ marginTop: 16 }}>
          <h2>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
          {types.length > 0 && (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <p style={{ margin: 0 }}>Tipo:</p>
          {types.map((type, i) => (
            <div key={`${type}-${i}`} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <TypeBadge type={type} />
              <DefenseTypeBadge type={type} />
            </div>
          ))}
        </div>
      )}
        </div>
      )}
      {imageUrl && (
        <div style={{ marginTop: 16 }}>
          <img src={imageUrl} alt={pokemonName || 'pokemon'} style={{ maxWidth: 300 }} />
        </div>
      )}
    </>
  )
}

export default App
// ...existing code...