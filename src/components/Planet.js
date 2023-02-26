import React, { useState } from "react";
import planetImage from "../image/space.jpg";

const Planet = () => {

  const planetData = useState({
    height: "",
    width: "",
    x: "",
    y: "",
  })

  const updatePlanet = () => {
    return ( 
      <div className="planet">

      </div>
    );
  }

  return (
    <>
      {updatePlanet()}
    </>
  );
}

export default Planet;
