import styled from "styled-components";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import { useFetch } from "../../hooks";
import { useContext } from "react";
import { SearchContext } from "../../utils/context";

const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 20px;
    width: 100vw;
    height: 100vh;
    background-color: black;

`
const MainTitle = styled.h2`
    font-size: clamp(20px, 6vw, 70px);
    font-weight: 400;
    color: white;

    ${(props) => 
    props.$search &&`
        font-size: clamp(10px, 4vw, 40px);
        margin-top: 70px;
        margin-bottom: 80px;
    `
}
`
const StyledList = styled.ul`
    width: 80%;
    list-style-type: '> ';
`

function List() {
    const { type } = useParams()
    const { id } = useParams()
    const { inputValue } = useContext(SearchContext)

    const { isLoading, data } = useFetch('http://localhost:4200/recipes')

    if(!isLoading && data && type) {
        const filteredRecipes = data.filter(recipe => recipe.type === type);

        return (
            <div>
            <Header></Header>
            <StyledContainer>
                <MainTitle>{ type.toUpperCase() }</MainTitle>
                <StyledList>
                    { filteredRecipes.map(recipe => (
                        <Link key={recipe.id} className="link" to={`/Recipe/${recipe.id}`}>
                            <li style={{marginBottom: '20px'}} className="list-recipe-title">{recipe.title}</li>
                        </Link>
                    ))}
                </StyledList>
            </StyledContainer>
        </div>
    )} else if(!isLoading && data && id) {
        const filteredRecipes = data.filter(recipe => {
            return Object.keys(recipe.ingredients).includes(inputValue)
        });

        return (
            <div>
            <Header></Header>
            <StyledContainer>
                <MainTitle $search>{ `Recettes avec l'ingrédient '${inputValue.toUpperCase()}'` }</MainTitle>
                <StyledList>
                    { filteredRecipes.map(recipe => (
                        <Link key={recipe.id} className="link" to={`/Recipe/${recipe.id}`}>
                            <li style={{marginBottom: '20px'}} className="list-recipe-title">{recipe.title}</li>
                        </Link>
                    ))}
                </StyledList>
            </StyledContainer>
            </div>
    )}
    return null
}

export default List