import React, { HTMLAttributes, useState } from 'react';

import { Pokemon } from '../../types';
import { leftPad } from '../../utils/leftPad';
import { getPokemonTypeColorOrLinearGradient, getPokemonTypeColors } from '../../utils/pokemon';
import { Tabs } from '../Tabs';
import { PokemonDetailsSkeleton } from './PokemonDetailsSkeleton';
import { PokemonDetailsStats, PokemonDetailsStatsProps } from './Stats';
import PokemonDetailsBiography, { PokemonDetailsBiographyProps } from './Biography/Biography';
import { ProgressiveImage } from '../ProgressiveImage';
import { PokemonDetailsEvolutions, PokemonDetailsEvolutionsProps } from './Evolutions';

interface PokemonDetailsProps extends HTMLAttributes<HTMLDivElement> {
    loading: boolean;
    pokemon?: Pick<Pokemon, 'id' | 'name'> & {
        kanjiName?: string;
        image: string;
        types: { name: string }[];
        stats: PokemonDetailsStatsProps['stats'];
    } & PokemonDetailsBiographyProps['pokemon'] & PokemonDetailsEvolutionsProps['pokemon'];
    clickOnEvolution: PokemonDetailsEvolutionsProps['clickOnEvolution'];
}

type PokemonTabs = "biography" | "stats" | "evolutions";

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({ loading = true, pokemon, clickOnEvolution }) => {
    const [activeTabKey, setActiveTabKey] = useState<PokemonTabs>("biography");

    if (loading || !pokemon) {
        return (
            <PokemonDetailsSkeleton />
        );
    }

    const { types } = pokemon;
    const backgroundColors = getPokemonTypeColors(types);
    const backgroundColorOrLinearGradient = getPokemonTypeColorOrLinearGradient(backgroundColors);
    const handleSelect = (tabKey: string) => setActiveTabKey(tabKey as PokemonTabs);

    return (
        <div className="flex flex-col lg:flex-row justify-center w-full mx-auto my-4 rounded-lg shadow-lg">
            <div className="w-full" style={{ background: backgroundColorOrLinearGradient() }}>
                <div className="px-4 md:px-8">
                    <p className="text-md mt-4 text-white font-medium">
                        #{leftPad(pokemon.id, 3)}
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold pb-6 capitalize">
                        {pokemon.name}
                    </h1>
                </div>
                <div className="relative text-center mx-auto w-full h-96 mt-8 lg:mt-24">
                    <h1 className="absolute -mt-2 text-6xl z-0 w-full text-white opacity-50 font-extrabold overflow-hidden">
                        {pokemon.kanjiName}
                    </h1>
                    <div className="w-80 m-auto">
                        <ProgressiveImage
                            src={pokemon.image}
                            alt={pokemon.name}
                        />
                    </div>
                </div>
            </div>
            <div className="-mt-12" />
            <div className="bg-white lg:mt-0 rounded-t-3xl rounded-b-lg lg:rounded-t-none lg:rounded-b-none lg:rounded-r-lg overflow-hidden w-full pt-16 lg:pt-8 px-6 md:px-12 lg:px-24">
                <div className="flex flex-row justify-between w-full">

                </div>
                <Tabs
                    tabs={[
                        {
                            key: 'biography',
                            title: 'Biography',
                            content: <PokemonDetailsBiography pokemon={pokemon} />,
                        },
                        {
                            key: 'stats',
                            title: 'Stats',
                            content: <PokemonDetailsStats stats={pokemon.stats} />,
                        },
                        {
                            key: 'evolutions',
                            title: 'Evolutions',
                            content: <PokemonDetailsEvolutions pokemon={pokemon} clickOnEvolution={clickOnEvolution} />,
                        }
                    ]}
                    handleSelect={handleSelect}
                    activeTabKey={activeTabKey}
                />
            </div>
        </div>
    );
};
