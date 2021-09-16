import { Pokemon } from '../types';

type PokemonTypeColor = { light: string; medium: string; };

const PokemonTypeColors: Record<string, PokemonTypeColor> = {
    normal: {
        light: "#CDCDB9",
        medium: "#C4C4A4",
    },
    fire: {
        light: "#F4934D",
        medium: "#F08030",
    },
    fighting: {
        light: "#BA5852",
        medium: "#C03028",
    },
    water: {
        light: "#85A5F0",
        medium: "#6890F0",
    },
    flying: {
        light: "#B8A5F2",
        medium: "#A890F0",
    },
    grass: {
        light: "#99D07D",
        medium: "#78C850",
    },
    poison: {
        light: "#A768A7",
        medium: "#A040A0",
    },
    electric: {
        light: "#F9DF78",
        medium: "#F8D030",
    },
    ground: {
        light: "#EDD081",
        medium: "#E0C068",
    },
    psychic: {
        light: "#F47DA1",
        medium: "#F85888",
    },
    rock: {
        light: "#C5B059",
        medium: "#B8A038",
    },
    ice: {
        light: "#B3E1E1",
        medium: "#98D8D8",
    },
    bug: {
        light: "#B5C534",
        medium: "#A8B820",
    },
    dragon: {
        light: "#8656FA",
        medium: "#7038F8",
    },
    ghost: {
        light: "#7D6B9B",
        medium: "#705898",
    },
    dark: {
        light: "#756459",
        medium: "#705848",
    },
    steel: {
        light: "#C1C1D1",
        medium: "#B8B8D0",
    },
    fairy: {
        light: "#EFA7B7",
        medium: "#EE99AC",
    },
};

export const getPokemonTypeColor = (typeName: string): PokemonTypeColor | undefined =>
    Object.entries(PokemonTypeColors)
        .find(([key]) => typeName === key)
        ?.[1];

export const getPokemonTypeColors = (types: { name: string }[]): PokemonTypeColor[] =>
    types.map((type) => getPokemonTypeColor(type.name) as PokemonTypeColor);

export const getPokemonTypeColorOrLinearGradient = (pokemonTypeColors: PokemonTypeColor[]) => (isLight = false) =>
    pokemonTypeColors.length === 1 ?
    (pokemonTypeColors[0][(isLight ? 'light' : 'medium')]) :
        pokemonTypeColors.reduce((str, pokemonTypeColor, index) => {
        str += `${pokemonTypeColor[(isLight ? 'light' : 'medium')]} ${(index === 0 ? 0 : (index+1)*100/pokemonTypeColors.length)}%${pokemonTypeColors.length-1 === index ? ')': ', '}`;
        return str;
    }, 'linear-gradient(90deg, ');

/*export const getPokemonKanjiName = (species) => species.names.find(
    (name) => name.language.name === "ja-Hrkt"
);*/

const transformStatNames = (statName: string) => {
    const map: string[][] = [
        ["special-attack", "Sp. Atk"],
        ["special-defense", "Sp. Def"],
    ];
    let transformed = statName;
    map.forEach(([a, b]) => {
        if (a === statName) {
            transformed = b;
        }
    });

    return transformed;
};

export const transformStats = (stats: Pokemon['stats']) => stats.map((resource) => ({
    name: transformStatNames(resource.stat.name),
    min: resource.baseStat,
    max:
        resource.stat.name === "hp"
            ? Number(resource.baseStat) * 2 + 204
            : (Number(resource.baseStat) * 2 + 99) * 1.1,
}));


/*
console.log({
  description: species.flavorTextEntries.find(
      (text) => text.language.name === "en"
  )?.flavorText,
  height: pokemon.height,
  weight: pokemon.weight,
  abilities: pokemon.abilities.map(({ ability, isHidden }) => ({
      name: ability.name,
      isHidden
  })),
  baseExperience: pokemon.baseExperience,
  growthRateName: species.growthRate.name,
  species: species.genera.find((gen) => gen.language.name === "en")?.genus,
  genderRate: species.genderRate,
});
*/

/*
const evolutions = selectedIds.map((id) => {
    const pokemon = pokemons.data.find((p) => p !== null && id === p.id);
    const chain = chainLinks.find(
        ({ species }) =>
            Number(species.url.split("/").splice(-2)[0]) === pokemon?.id
    );
    return {
      id: pokemon?.id,
      name: pokemon?.name,
      image: pokemon?.sprites?.frontDefault,
      minLevel: chain?.evolutionDetails[0]?.minLevel,
      canEvolved: chain?.evolvesTo.length !== 0,
    }
  });
*/
