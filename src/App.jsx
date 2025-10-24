import { useState } from 'react'
import './styles/App.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { getPokemon } from './api/pokemonApi'
import TypeBadge from './components/typeBadge';
import DefenseTypeBadge from './components/defenseTypeBadge';
import { combineDefenses } from './helpers/calculateDoubleType';
import { defense } from './helpers/defense';

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

        console.log('normTypes types:', normTypes);
      setTypes(normTypes);

    } catch (err) {
      console.error(err);
      alert(`Error: ${err.message}`);
    }
  };
  return (
    <div className="app">

      <div className="search-bar" style={{ display: 'flex', gap: 8 }}>
        <TextField
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        id="outlined-basic" label="Nombre o ID" variant="outlined" />
        <Button onClick={handleSearch} variant="contained">Buscar</Button>
      </div>

      <div clasasName="pokemon-info"
      style={{
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}>
        <h2>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
        <div style={{ marginTop: 12, display: 'flex', gap: 6, justifyContent: 'center' }}>
          {types.map((t) => {
            const typeName = typeof t === "string" ? t : (t && (t.name || t.type)) || String(t);
            return <TypeBadge key={typeName} type={typeName} />;
          })}
        </div>
          {imageUrl && <img src={imageUrl} alt={pokemonName || 'pokemon'} style={{ maxWidth: 150 }} />}
      </div>

          {
            types.length > 1 
              ? <DefenseTypeBadge type={combineDefenses(types)} />
              : <DefenseTypeBadge type={defense[types[0]]} />
          }
      
    </div>
  )
}

export default App
// ...existing code...