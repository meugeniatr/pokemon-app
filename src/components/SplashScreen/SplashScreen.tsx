import React from "react";
import { ReactComponent as PokeballIcon } from "../../assets/images/pokeball.svg";

export const SplashScreen = () => {
  return (
    <div className="bg-primary h-screen w-full text-center relative flex items-center justify-center">
      <PokeballIcon className="w-24 h-24 animate-spin mb-16" />
    </div>
  );
};
