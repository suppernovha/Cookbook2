import styled, { keyframes } from "styled-components";

import { useFetch } from "../../hooks";

const scrollText = keyframes`
    0% {
      transform: translateX(30%);
    }
    100% {
      transform: translateX(-195%);
    }
`
const MonthDataContainer = styled.div`
    animation: ${scrollText} 50s linear infinite;
    color: black;
    font-weight: 800;
    font-size: clamp(14px, 2vw, 20px);
    white-space: nowrap;
    z-index: 1;
`

function getFruitsAndVegetablesByMonth(month, data) {
    if (!data) return ''
    const monthData = data.find(item => item.mois === month)
    if (!monthData) return ''
    const fruitsAndVegetablesByMonth = `En ${month} - LEGUMES [ ${[...monthData.legumes].join(', ').split(',').join(' - ')} ] // En ${month} - FRUITS [ ${[...monthData.fruits].join(', ').split(',').join(' - ')} ]  :) `;
    return fruitsAndVegetablesByMonth
}

function Banner() {
    const { isLoading, data } = useFetch('http://localhost:4200')

    const date = new Date()
    const months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "Juillet", "aout", "septembre", "octobre", "novembre", "decembre"]
    const currentMonth = months[date.getMonth()]
    
    if(!isLoading && data) {
        const currentVegetables = getFruitsAndVegetablesByMonth(currentMonth, data)
        return (
            <MonthDataContainer>{currentVegetables}</MonthDataContainer>
        )
    }
    return null
}

export default Banner