import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";

import { leftPad } from '../../../utils/leftPad';
import { ProgressiveImage } from '../../ProgressiveImage';
import { getPokemonTypeColors, getPokemonTypeColorOrLinearGradient } from '../../../utils/pokemon';

export type PokemonDetailsEvolutionsProps = {
    pokemon: {
        types: { name: string }[];
        evolutions: {
            id: number;
            name: string;
            image: string;
            minLevel: number;
            canEvolved: boolean;
        }[];
    }
    clickOnEvolution: (pokemonId: number) => void;
};

export const PokemonDetailsEvolutions: React.FC<PokemonDetailsEvolutionsProps> = ({ pokemon: { types, evolutions }, clickOnEvolution }) => {
    const colors = getPokemonTypeColors(types);
    const colorOrLinearGradient = getPokemonTypeColorOrLinearGradient(colors);

    return (
        <div className="mt-12 text-center ">
            <div className="lg:grid lg:grid-cols-2 lg:gap-y-10">
                {evolutions.map(evolution => (
                    <div className="mb-5 lg:mb-0 lg:flex lg:flex-row w-full">
                        <div className="text-center mx-auto flex-1">
                            <div className="relative mx-auto h-48 w-full">
                                <div
                                    style={{
                                        width: 200,
                                        height: 200,
                                        bottom: 0,
                                        background: colorOrLinearGradient(true),
                                    }}
                                    className="rounded-full absolute inset-x-auto mx-auto z-0 inline-block left-0 right-0"
                                />
                                <div
                                    //onClick={() => history.push(`/pokemons/${pokemon.id}`)}
                                    className="cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                                    style={{
                                        width: 150,
                                        height: 150,
                                        display: "block",
                                        left: 0,
                                        right: 0,
                                        bottom: 25,
                                        margin: "auto",
                                        position: "absolute",
                                    }}
                                    onClick={() => clickOnEvolution(evolution.id)}
                                >
                                    <ProgressiveImage
                                        src={evolution.image}
                                        alt={evolution.name}
                                    />
                                </div>
                            </div>
                            <p className="mt-1 text-sm text-black font-semibold">
                                #{leftPad(evolution.id, 3)}
                            </p>
                            <h1 className="capitalize font-semibold text-xl">{evolution.name}</h1>
                            <p className="text-black text-sm font-semibold text-opacity-75">
                                {evolution.minLevel && `Level ${evolution.minLevel}`}
                            </p>
                        </div>
                        <p className="flex items-center mx-auto mt-2 mb-4 lg:mb-0 lg:mt-0">
                            {evolution.canEvolved && (
                                <>
                                    <AiOutlineCaretDown
                                        className="block mx-auto lg:hidden opacity-75"
                                        size={24}
                                    />
                                    <AiOutlineCaretRight
                                        className="hidden mx-auto lg:block opacity-75"
                                        size={24}
                                    />
                                </>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
