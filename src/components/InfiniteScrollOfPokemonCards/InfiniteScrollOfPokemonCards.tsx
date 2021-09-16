import React, { HTMLAttributes, useEffect, useState } from 'react';

import { PokemonCard, PokemonCardProps } from '../PokemonCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

type Pokemon = PokemonCardProps['pokemon'];

interface InfiniteScrollOfPokemonCardsProps extends HTMLAttributes<HTMLDivElement> {
    pokemons: Pokemon[];
    numberOfItems?: number;
    clickOnPokemonCard: (pokemonId: number) => void;
    hasMore: boolean;
    onLoadMore: () => void;
}

export const InfiniteScrollOfPokemonCards: React.FC<InfiniteScrollOfPokemonCardsProps> = ({ pokemons, numberOfItems = 9, clickOnPokemonCard, hasMore = false, onLoadMore }) => {
    const loadMore = useInfiniteScroll({ hasMore });
    const [currentPokemons, setCurrentPokemons] = useState<Pokemon[]>(Array.from({ length: numberOfItems }));

    useEffect(() => {
        if (pokemons.length > 0) {
            setCurrentPokemons(pokemons);
        }
    }, [pokemons]);

    useEffect(() => {
        if (loadMore) {
            setCurrentPokemons([...currentPokemons].concat(Array.from({ length: numberOfItems })));
            onLoadMore();
        }
    }, [loadMore]);

    return (
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-5 gap-y-6">
            {currentPokemons.map((pokemon, index) =>
                (
                    <PokemonCard
                        key={index}
                        loading={!pokemon}
                        pokemon={pokemon}
                        onClick={() => pokemon?.id ? clickOnPokemonCard(pokemon.id): undefined}
                    />
                )
            )}
        </div>
    );
};
