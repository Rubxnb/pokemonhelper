import { defense } from "./defense";

export const combineDefenses = (types) => {
  const multipliers = {
    x0: 0,
    quarter: 0.25,
    half: 0.5,
    x1: 1,
    x2: 2
  };

  const res = {
    x0: [],
    quarter: [],
    half: [],
    x1: [],
    x2: [],
    x4: [] 
  };

  // Obtener los tipos defensivos
  const [type1, type2] = types;
  const def1 = defense[type1];
  const def2 = defense[type2];

  // Obtener todos los tipos ofensivos posibles
  const allAttackTypes = Object.keys(defense);

  for (const atkType of allAttackTypes) {
    // Buscar el multiplicador en cada tipo
    let m1 = 1;
    let m2 = 1;

    for (const key in multipliers) {
      if (def1[key]?.includes(atkType)) m1 = multipliers[key];
      if (def2[key]?.includes(atkType)) m2 = multipliers[key];
    }

    // Calcular multiplicador combinado
    const total = m1 * m2;

    // Clasificar según el multiplicador final
    if (total === 0) res.x0.push(atkType);
    else if (total === 0.25) res.quarter.push(atkType);
    else if (total === 0.5) res.half.push(atkType);
    else if (total === 1) res.x1.push(atkType);
    else if (total === 2) res.x2.push(atkType);
    else if (total === 4) res.x4.push(atkType);
  }

  return res;
}
