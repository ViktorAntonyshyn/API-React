import React from "react";
import CharacterCards from "./Components/CharacterCards";
import HeadHP from "./Components/HeadHP";
import FooterHP from "./Components/FooterHP";

const AppHP = () => {
  return (
    <div>
      <HeadHP />
      <CharacterCards />
      <FooterHP />
    </div>
  );
};

export default AppHP;