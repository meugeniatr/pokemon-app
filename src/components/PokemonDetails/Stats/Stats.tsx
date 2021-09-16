import React from "react";

export type PokemonDetailsStatsProps = {
    stats: {
        title: string;
        min: number;
        max: number;
    }[];
};

export const PokemonDetailsStats: React.FC<PokemonDetailsStatsProps> = ({ stats }) => (
    <>
        <h1 className="font-semibold text-lg mb-4">Base Stats</h1>
        <ul className="capitalize">
            {stats.map((stat, index) => (
                <div key={index} className="grid grid-cols-5 gap-2 md:gap-4 lg:gap-8 mt-2 md:mt-3">
                    <span className="text-darkerGray font-medium">{stat.title}</span>
                    <span className="text-center">{stat.min.toFixed(0)}</span>
                    <div className="col-span-2 w-full flex items-center">
                        <div className="w-full bg-transparent rounded-lg">
                            <div
                                className="bg-primary rounded-lg"
                                style={{
                                    padding: "2.5px 0",
                                    width: `${(stat.min / (stat.max - 75)) * 100}%`,
                                }}
                            />
                        </div>
                    </div>
                    <span className="text-center">{stat.max.toFixed(0)}</span>
                </div>
            ))}
            <div className="grid grid-cols-5 gap-2 md:gap-4 lg:gap-8 mt-5">
                <span className="text-darkerGray font-medium">Total</span>
                <span className="text-center font-semibold">
        {stats.reduce((sum, { min }) => sum + min, 0)}
      </span>
                <div className="col-span-2 w-full flex items-center" />
                <span className="text-center text-darkerGray font-medium">Max</span>
            </div>
        </ul>
        <p className="mt-10 mb-6 text-darkerGray font-medium">
            Min & Max values are calculated for level 100 Pokemon. Minimum values
            are based on 0 EVs & 0 IVs, meanwhile Maximum values are based on 252
            EVs & 31 IVs.
        </p>
    </>
);

