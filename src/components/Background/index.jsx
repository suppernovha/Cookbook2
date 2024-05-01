import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/style/variables";

import Fish from '../../assets/poisson.png'
import Dessert from '../../assets/dessert.png'
import Chef from '../../assets/chef.png'
import Juice from '../../assets/jus.png'
import Soupe from '../../assets/soupe.png'
import Knife from'../../assets/coutellerie.png'
import Crepe from'../../assets/jus.png'
import Bacon from '../../assets/lard.png'
import Noodles from '../../assets/nouille.png'
import Pizza from '../../assets/pizza.png'
import Salt from '../../assets/sel-et-poivre.png'

const IconsArray = [
    Dessert,
    Chef,
    Juice,
    Soupe, 
    Fish,
    Knife,
    Crepe,
    Bacon,
    Noodles,
    Pizza,
    Salt
]
const getRandomIcon = () => {
    return IconsArray[Math.floor(Math.random() * IconsArray.length)]
}

const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    z-index: -3;
    width: 100VW;
    height: 100vh;
    background-color: ${colors.secondary};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6vw, 1fr));
    gap: 0;
    overflow-x: hidden;
    overflow-y: hidden;
`
const Icon = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    opacity: 0.6;
`

function Background() {
    return (
        <StyledBackground>
            {Array.from({ length: Math.ceil((window.innerWidth * window.innerHeight) / (4 * 4)) }).map((_, index) => (
                <Icon key={index} src={getRandomIcon()} alt=''/>
            ))}
        </StyledBackground>
    )
}

export default Background