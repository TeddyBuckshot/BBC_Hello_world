import React from "react";
import SolarInfo from "../components/SolarInfo";
import "./SolarSystem.css"
import AllPlanets from "../static/All Planets.png"

const SolarSystem = () => {
    return(
        <div id="solarsystem">
            <img id="allplanets" src={AllPlanets}/>
            <h3>The Solar System</h3>
            <SolarInfo/>
        </div>
    );
};

export default SolarSystem;