import React, { HTMLAttributes } from 'react';

import { romanize } from '../../utils/romanize';

interface PokemonGenerationCardProps extends HTMLAttributes<HTMLDivElement> {
    images: string[];
    generation: number;
    isSelected?: boolean;
};

export const PokemonGenerationCard: React.FC<PokemonGenerationCardProps> = ({
   images,
   generation,
   isSelected,
   ...props
}) => (
    <div
        className={
            "w-full tracking-wide text-center mx-auto px-8 py-5 rounded-lg hover:font-medium transition-all duration-200 ease-in-out cursor-pointer " +
            (isSelected
                ? "bg-primarySecondary text-white transform hover:-translate-y-2 hover:shadow-md"
                : "bg-primaryGray text-black hover:bg-primarySecondary hover:text-white")
        }
        {...props}
    >
        <div className="flex justify-center items-center">
            {images.map((image) => (
                <img key={image} className="w-16 h-16" src={image} alt="Pokemon" />
            ))}
        </div>
        <p className="text-md mt-4">Generation {romanize(generation)}</p>
    </div>
);
