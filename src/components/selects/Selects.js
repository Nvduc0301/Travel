import React from "react";
import "./SelectsStyles.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
// import Maldives2 from "../../assets/maldives2.jpg";
// import KeyWest from "../../assets/keywest.jpg";
import Maldives3 from "../../assets/maldives3.jpg";
import Bali from "../../assets/resort_bali.jpg";
import Santorini from "../../assets/beach_Santorini.jpg";
import Smeralda from "../../assets/resort_Costa Smeralda.jpg";
import SelectsImg from "../SelectsImg/SelectsImg";

function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectsImg bgImg={Smeralda} text="Smeralda" />
        <SelectsImg bgImg={Maldives} text="Maldives" />
        <SelectsImg bgImg={Santorini} text="Santorini" />
        <SelectsImg bgImg={BoraBora} text="Bora Bora" />
        <SelectsImg bgImg={Maldives3} text="Barbados" />
        <SelectsImg bgImg={Bali} text="Bali" />
        {/* <SelectsImg bgImg={KeyWest} text="Key West" /> */}
      </div>
    </div>
  );
}

export default Selects;
