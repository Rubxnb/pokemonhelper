const BASE_URL = 'https://pokeapi.co/api/v2';
const DEFAULT_TIMEOUT = 10000;

async function request(path, options = {}, timeout = DEFAULT_TIMEOUT) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      signal: controller.signal,
      ...options,
    });
    clearTimeout(id);
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`API error ${res.status}: ${res.statusText} ${text}`);
    }
    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('Request aborted / timeout');
    throw err;
  }
}

export const getPokemon = async (nameOrId) => JSON.stringify(await request(`/pokemon/${encodeURIComponent(nameOrId)}`), null, 2);
export const getPokemons = (limit = 20, offset = 0) => request(`/pokemon?limit=${limit}&offset=${offset}`);
export const getAbility = (ability) => request(`/ability/${encodeURIComponent(ability)}`);

export default { getPokemon, getPokemons, getAbility };