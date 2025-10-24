export const defense = {
  normal: {
    "x2": ["fighting"],
    "x1": ["normal", "flying", "poison", "ground", "rock", "bug", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"],
    "half": [],
    "quarter": [],
    "x0": ["ghost"]
  },
  fire: {
    "x2": ["water", "ground", "rock"],
    "x1": ["normal", "electric", "fighting", "flying", "poison", "psychic", "ghost", "dragon", "dark"],
    "half": ["fire", "grass", "ice", "bug", "steel", "fairy"],
    "quarter": [],
    "x0": []
  },
  water: {
    "x2": ["electric", "grass"],
    "x1": ["normal", "fighting", "poison", "ground", "flying", "rock", "psychic", "bug", "ghost", "dragon", "dark", "fairy"],
    "half": ["fire", "water", "steel", "ice"],
    "quarter": [],
    "x0": []
  },
  grass: {
    "x2": ["fire", "ice", "poison", "flying", "bug"],
    "x1": ["normal", "fighting", "rock", "ghost", "steel", "psychic", "dragon", "dark", "fairy"],
    "half": ["water", "electric", "grass", "ground"],
    "quarter": [],
    "x0": []
  },
  electric: {
    "x2": ["ground"],
    "x1": ["normal", "fire", "water", "grass", "ice", "fighting", "poison", "rock", "psychic", "bug", "ghost", "dragon", "dark", "fairy"],
    "half": ["electric", "flying", "steel"],
    "quarter": [],
    "x0": []
  },
  ice: {
    "x2": ["fire", "fighting", "rock", "steel"],
    "x1": ["normal", "water", "electric", "grass", "poison", "ground", "flying", "psychic", "bug", "ghost", "dragon", "dark", "fairy"],
    "half": ["ice"],
    "quarter": [],
    "x0": []
  },
  fighting: {
    "x2": ["flying", "psychic", "fairy"],
    "x1": ["normal", "fighting", "fire", "water", "electric", "ice", "poison", "ground", "ghost", "dragon", "steel", "grass"],
    "half": ["rock", "bug", "dark"],
    "quarter": [],
    "x0": []
  },
  poison: {
    "x2": ["ground", "psychic"],
    "x1": ["normal", "fire", "water", "electric", "ice", "flying", "rock", "ghost", "dragon", "dark", "steel"],
    "half": ["grass", "fighting", "poison", "bug", "fairy"],
    "quarter": [],
    "x0": []
  },
  ground: {
    "x2": ["water", "grass", "ice"],
    "x1": ["normal", "fire", "ground", "flying", "ghost", "dragon", "dark", "fairy", "fighting", "psychic", "bug", "steel"],
    "half": ["poison", "rock"],
    "quarter": [],
    "x0": ["electric"]
  },
  flying: {
    "x2": ["electric", "ice", "rock"],
    "x1": ["normal", "fire", "water", "poison", "psychic", "ghost", "dragon", "dark", "fairy", "flying", "steel"],
    "half": ["fighting", "bug", "grass"],
    "quarter": [],
    "x0": ["ground"]
  },
  psychic: {
    "x2": ["bug", "ghost", "dark"],
    "x1": ["normal", "fire", "water", "electric", "ice", "poison", "ground", "flying", "rock", "dragon", "steel", "fairy", "grass"],
    "half": ["fighting", "psychic"],
    "quarter": [],
    "x0": []
  },
  bug: {
    "x2": ["fire", "flying", "rock"],
    "x1": ["normal", "water", "electric", "ice", "poison", "psychic", "ghost", "dragon", "dark", "fairy", "bug", "steel"],
    "half": ["fighting", "grass", "ground"],
    "quarter": [],
    "x0": []
  },
  rock: {
    "x2": ["water", "grass", "fighting", "ground", "steel"],
    "x1": ["rock", "electric", "ice", "psychic", "bug", "ghost", "dragon", "dark", "fairy"],
    "half": ["normal", "fire", "poison", "flying"],
    "quarter": [],
    "x0": []
  },
  ghost: {
    "x2": ["ghost", "dark"],
    "x1": ["fire", "water", "electric", "ice", "ground", "flying", "psychic", "rock", "dragon", "steel", "fairy", "grass"],
    "half": ["bug", "poison"],
    "quarter": [],
    "x0": ["normal", "fighting"]
  },
  dragon: {
    "x2": ["ice", "dragon", "fairy"],
    "x1": ["normal", "fighting", "poison", "ground", "flying", "psychic", "bug", "ghost", "rock", "dark", "steel"],
    "half": ["fire", "water", "electric", "grass"],
    "quarter": [],
    "x0": []
  },
  dark: {
    "x2": ["fighting", "bug", "fairy"],
    "x1": ["normal", "fire", "water", "electric", "grass", "ice", "poison", "ground", "rock", "dragon", "steel", "flying"],
    "half": ["ghost", "dark"],
    "quarter": [],
    "x0": ["psychic"]
  },
  steel: {
    "x2": ["fire", "fighting", "ground"],
    "x1": ["water", "electric", "dark", "ghost"],
    "half": ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "fairy", "steel"],
    "quarter": [],
    "x0": ["poison"]
  },
  fairy: {
    "x2": ["poison", "steel"],
    "x1": ["normal", "fire", "water", "electric", "grass", "ice", "ground", "flying", "psychic",  "rock", "ghost", "fairy"],
    "half": ["fighting", "bug", "dark"],
    "quarter": [],
    "x0": ["dragon"]
  }
}
