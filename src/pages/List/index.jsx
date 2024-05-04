import styled from "styled-components";
import { colors, fonts } from '../../utils/style/variables'
import { RecipeMockedData } from "../../utils/Data";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import { useFetch } from "../../hooks";

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
`
const StyledList = styled.ul`
    width: 80%;
    list-style-type: '> ';
`

function List() {
    const { type } = useParams()
    const { isLoading, data } = useFetch('http://localhost:4200/recipes')

    if(!isLoading && data) {
        const filteredRecipes = data.filter(recipe => recipe.type === type);
        console.log(data)
        
        return (
            <div>
            <Header></Header>
            <StyledContainer>
                <MainTitle>{ type.toUpperCase() }</MainTitle>
                <StyledList>
                    { filteredRecipes.map(recipe => (
                        <Link key={recipe.id} className="link" to={`/Recipe/${recipe.id}`}>
                            <li className="list-recipe-title">{recipe.title}</li>
                        </Link>
                    ))}
                </StyledList>
            </StyledContainer>
        </div>
    )} 
    return null
}

export default List