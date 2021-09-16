import React, { ReactNode } from 'react';

export type PokemonInformationProps = {
    title: string;
    content: ReactNode;
};

export const PokemonInformation: React.FC<PokemonInformationProps> = ({ title, content }) => (
    <li className="grid grid-cols-2 gap-x-1 mb-3">
        <span className="text-darkerGray font-medium">{title}</span>
        <span>{content}</span>
    </li>
);
