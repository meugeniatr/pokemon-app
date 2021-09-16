import { APIResource } from './APIResource';
import { NamedAPIResource } from './NamedAPIResource';

export interface Species {
    id: number;
    name: string;
    order: number;
    genderRate: number;
    captureRate: number;
    baseHappiness: number;
    isBaby: boolean;
    isLegendary: boolean;
    isMythical: boolean;
    hatchCounter: number;
    hasGenderDifferences: boolean;
    formsSwitchable: boolean;
    growthRate: NamedAPIResource;
    pokedexNumbers: {
        entryNumber: number;
        pokedex: NamedAPIResource;
    }[];
    eggGroups: NamedAPIResource[];
    color: NamedAPIResource;
    shape: NamedAPIResource;
    evolvesFromSpecies: NamedAPIResource;
    evolutionChain: APIResource;
    habitat: NamedAPIResource;
    generation: NamedAPIResource;
    names: {
        name: string;
        language: NamedAPIResource;
    }[];
    palParkEncounters: {
        baseScore: number;
        rate: number;
        area: {
            name: string;
            url: string;
        };
    }[];
    flavorTextEntries: {
        flavorText: string;
        language: NamedAPIResource;
        version: NamedAPIResource;
    }[];
    formDescriptions: {
        description: string;
        language: NamedAPIResource;
    }[];
    genera: {
        genus: string;
        language: NamedAPIResource;
    }[];
    varieties: {
        isDefault: boolean;
        pokemon: NamedAPIResource;
    }[];
}
