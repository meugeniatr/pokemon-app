import React, { HTMLAttributes } from 'react';

import { Pokemon } from '../../types';
import { leftPad } from "../../utils/leftPad";
import { getPokemonTypeColors, getPokemonTypeColorOrLinearGradient } from '../../utils/pokemon';
import { ProgressiveImage } from '../ProgressiveImage';
import { PokemonCardSkeleton } from './PokemonCardSkeleton';

export interface PokemonCardProps extends HTMLAttributes<HTMLDivElement> {
  loading: boolean;
  pokemon?: Pick<Pokemon, 'id' | 'name'> & {
    image: string;
    types: { name: string }[];
  };
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ loading = true, pokemon, ...props }) => {
  if (loading || !pokemon) {
    return (
        <PokemonCardSkeleton />
    );
  }

  const { id, name, image, types } = pokemon;
  const colors = getPokemonTypeColors(types);
  const colorOrLinearGradient = getPokemonTypeColorOrLinearGradient(colors);

  return (
    <div
      {...props}
      className="w-full rounded-lg overflow-hidden shadow-lg mx-auto cursor-pointer hover:shadow-2xl transition-all duration-200 ease-in-out transform hover:-translate-y-2"
    >
      <div
        className="py-32 mx-auto w-full flex items-center justify-center relative"
        style={{
          background: colorOrLinearGradient(),
        }}
      >
        <p className="text-6xl font-semibold text-black text-opacity-25 absolute tracking-xl top-1/8 pointer-events-none">
          #{leftPad(id, 3)}
        </p>
        <div
          className="inset-x-auto bottom-0 absolute z-20"
          style={{
            width: 175,
            height: 175,
          }}
        >
          <div
            className="rounded-full absolute z-0 inset-x-auto mx-auto"
            style={{
              width: 130,
              height: 130,
              zIndex: -10,
              bottom: 8,
              left: 16,
              background: colorOrLinearGradient(true)
            }}
          />
          <ProgressiveImage src={image} alt={name} />
        </div>
      </div>
      <div className="bg-white w-full pt-5 pb-8 text-center">
        <h1 className="capitalize font-semibold text-3xl mb-2">{name}</h1>
        <div className="flex flex-wrap mx-auto justify-center">
          {types.map((type, index) => (
              <p
                key={`${id}-${type.name}`}
                className={
                  "font-bold uppercase text-sm" +
                  (index !== types.length - 1 ? " mr-6" : "")
                }
                style={{ color: colors[index].medium }}
              >
                {type.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};
