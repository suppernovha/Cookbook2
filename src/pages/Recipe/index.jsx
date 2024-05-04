import { useParams } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

import { useFetch } from "../../hooks"
import { utensils } from "../../utils/Data"
import { colors } from '../../utils/style/variables'
import PlayIcon from '../../assets/play.png'
import Header from "../../components/Header"

const RecipeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr 3fr;
    grid-gap: 20px;
    margin: 0 auto;
    margin-top: 60px;
    padding: 50px;
    max-width: 1300px;
    background-color: black;
    border-radius: 30px;

`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: span 3;
    color: ${colors.fourth};
    font-size: 25px;
`
const DisplayContainer = styled.div`
    grid-column: span 1;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    aspect-ratio: 1/1;
    ${(props) => props.$people && `
        border: 2px solid ${colors.fourth};
        `}
    ${(props) => props.$info && `
        font-size: 40px; 
        font-weight: 800; 
        color: white;
        `}
    ${(props) => props.$time && `
        border: 2px solid ${colors.fourth};
        `}
    ${(props) => props.$utensils && `
        border: 2px solid white; 
        background-color: white; 
        color: black;
        `}
    ${(props) => props.$playBtn && `
        background-color: ${colors.fourth};
        `}
`
const UtensilIcon = styled.img`
    width: 50px;
`
const Icon = styled.img`
    width: 40%;
`
const IngredientsContainer = styled.div`
    grid-column: span 3;
    list-style-type: none;
    background-color: white;
    padding: 40px;
    border-radius: 30px;
    font-size : 20px;
    letter-spacing: -1px;
    color: black;
    line-height: 1.5;
`
const IngredientsList = styled.ul`
    list-style-type: none;
    padding-left: 20px;
    line-height: 2;
`
const StepsContainer = styled.ul`
    grid-column: span 4;
    list-style-type: "-";
    color: white;
    font-size: 25px;
    letter-spacing: -1px;
    margin-top: 45px;
    line-height: 2;
    gap: 20px;
`
function calculateDuration(recipe) {
    const { preparation, cooking_duration } = recipe
    const total = (preparation || 0) + (cooking_duration || 0)
    return total
}

function getUtensilIcon(utensilName) {
    if (utensils.hasOwnProperty(utensilName)) {
        return utensils[utensilName]
    } else return null
}
function Recipe() {
    const { isLoading, data } = useFetch('http://localhost:4200/recipes')
    const { currentId } = useParams()
    const [currentRecipe, setCurrentRecipe] = useState('')

    if(!isLoading && data) {
        const recipe = data.find(recipe => recipe.id === parseInt(currentId))
        const duration = calculateDuration(recipe)

        return (
        <div>
        <Header />
        <RecipeContainer>
            <Title >
                <h1 style={{ margin: 0 }}>{ recipe.title.toUpperCase() }</h1>
            </Title>
            <DisplayContainer $info $people>{recipe.people}ps</DisplayContainer>
            <DisplayContainer $info $time>{duration}mn</DisplayContainer>
            <DisplayContainer $utensils>
                
                {recipe.utensils.map((utensil, index) => (
                    <UtensilIcon key={index} src={getUtensilIcon(utensil)} alt={utensil} />
                ))}
            </DisplayContainer>
            <DisplayContainer $playBtn>
                <Icon src={PlayIcon}/>
            </DisplayContainer>
            <IngredientsContainer>
                <h2 style={{ marginTop: 0}}>INGREDIENTS</h2>
                <IngredientsList>
                    { Object.entries(recipe.ingredients).map(([name, quantity]) => (
                        <li key={name}>
                                <span style={{fontWeight: 800}}>{name}</span> : <span style={{fontWeight: 300}}>{quantity.amount} {quantity.unit}
                                </span>
                        </li>))
                    }
                </IngredientsList>
            </IngredientsContainer>
            <StepsContainer> 
                { recipe.steps.map(step => (
                    <li>&nbsp;{step}</li>))
                } 
            </StepsContainer>
        </RecipeContainer>
        </div>
    )}
    return null
}

export default Recipe