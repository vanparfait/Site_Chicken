import React from "react";
import Chicken from "./Chicken";
import burger from "../assets/burger.webp";
import pouletfrit from "../assets/pouletfrit.jpg";
import pouletfrit2 from "../assets/pouletfrit2.jpg";
import cuissespoulet from "../assets/cuissespoulet.webp";
import filetpoulet from "../assets/filetpoulet.webp";
import brochettes from "../assets/brochettes.webp";

const Collection = () => {
  return (
    <div className="collection">
      <Chicken
        image={burger}
        titre="burger au poulet"
        description="elle est faite dans les zones asiatiques"
      />
      <Chicken
        image={pouletfrit}
        titre="poulet-frit"
        description="elle est faite dans les zones africaines"
      />
      <Chicken
        image={cuissespoulet}
        titre="poulet-frit"
        description="elle est faite dans les zones europeennes"
      />
      <Chicken
        image={pouletfrit2}
        titre="poulet-frit2"
        description="elle est faite dans les zones africaines"
      />
      <Chicken
        image={brochettes}
        titre="Brochettes"
        description="elle est faite dans les zones americaines"
      />
      <Chicken
        image={filetpoulet}
        titre="filet-poulet"
        description="elle est faite dans les zones asiatiques"
      />
    </div>
  );
};

export default Collection;
