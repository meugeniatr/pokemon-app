import React from "react";

import genderMale from '../../../assets/images/male.png';
import genderFemale from '../../../assets/images/female.png';

import { leftPad } from '../../../utils/leftPad';
import { PokemonInformation } from './PokemonInformation';
import { Pokemon, Species } from '../../../types';
import { getPokemonTypeColor } from '../../../utils/pokemon';

export type PokemonDetailsBiographyProps = {
    pokemon: Pick<Pokemon,
        'height' |
        'weight' |
        'baseExperience'
    > & {
        types: { name: string }[];
        description: string;
        species: string;
        abilities: { name: string; isHidden: boolean; }[];
        baseHappiness: Species['baseHappiness'];
        captureRate: Species['captureRate'];
        growthRateName: Species['growthRate']['name'];
        genderRate: Species['genderRate'];
    };
};

const PokemonDetailsBiography: React.FC<PokemonDetailsBiographyProps> = ({ pokemon }) => {
    const inches = (pokemon.height * 3.93701).toFixed(0);
    const feet = Math.floor(Number(inches) / 12);
    const genderPercentage = pokemon.genderRate !== -1 ? (pokemon.genderRate / 8) * 100 : -1;

    return (
        <>
            <div>
                <h2 className="font-semibold text-lg">Pokémon Data</h2>
                <p className="mt-4 text-darkerGray">
                    {pokemon.description}
                </p>
                <ul className="mt-5">
                    <PokemonInformation
                        title="Types"
                        content={(
                            <div className="flex">
                                {pokemon.types.map(type => (
                                    <div
                                        className="px-4 py-2 mr-2 rounded text-white font-bold capitalize"
                                        style={{ backgroundColor: getPokemonTypeColor(type.name)?.medium }}
                                    >
                                        {type.name}
                                    </div>
                                ))
                            }
                            </div>
                        )}
                    />
                    <PokemonInformation
                        title="Species"
                        content={pokemon.species}
                    />
                    <PokemonInformation
                        title="Height"
                        content={`${feet}'${leftPad(Number(inches) % 12, 2)}" (${
                            pokemon.height / 10
                        }m)`}
                    />
                    <PokemonInformation
                        title="Weight"
                        content={`${(pokemon.weight / 10).toFixed(1)} kg`}
                    />
                    <PokemonInformation
                        title="Abilities"
                        content={pokemon.abilities.map((ability, index) => (
                            <li
                                key={`ability=${ability.name}`}
                                className="capitalize"
                            >
                                {index + 1}. {ability.name}{" "}
                                {ability.isHidden && "(Hidden Ability)"}
                            </li>
                        ))}
                    />
                    <PokemonInformation
                        title="Gender"
                        content={
                            <span className="flex items-end justify-start">
                {genderPercentage === -1 ? (
                    <span>Genderless</span>
                ) : (
                    <>
                        <div className="flex items-center mr-3">
                            <img
                                className="w-4 h-4"
                                src={genderMale}
                                alt="male"
                            />
                            <span className="ml-2">{100 - genderPercentage}%</span>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="w-4 h-4"
                                src={genderFemale}
                                alt="female"
                            />
                            <span className="ml-2">{genderPercentage}%</span>
                        </div>
                    </>
                )}
              </span>
                        }
                    />
                </ul>
            </div>
            <div className="my-8">
                <h2 className="font-semibold text-lg">Training</h2>
                <ul className="mt-5">
                    <PokemonInformation
                        title="Base Exp"
                        content={pokemon.baseExperience || 0}
                    />
                    <PokemonInformation
                        title="Base Happiness"
                        content={pokemon.baseHappiness || 0}
                    />
                    <PokemonInformation
                        title="Catch Rate"
                        content={`${((pokemon.captureRate / 255) * 100).toFixed(1)}%`}
                    />
                    <PokemonInformation
                        title="Growth Rate"
                        content={
                            <span className="capitalize">{pokemon.growthRateName}</span>
                        }
                    />
                </ul>
            </div>
        </>
    );
};

export default PokemonDetailsBiography;
