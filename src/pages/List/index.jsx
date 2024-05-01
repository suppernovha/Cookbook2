import styled from "styled-components";
import { colors, fonts } from '../../utils/style/variables'
import { RecipeMockedData } from "../../utils/Data";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

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
    font-size: 80px;
    font-weight: 400;
    color: white;
`
const StyledList = styled.div`
    width: 80%;
`

function List() {
    const { type } = useParams()
    const filteredRecipes = RecipeMockedData.filter(recipe => recipe.type === type);
    return (
    <StyledContainer>
        <MainTitle>{ type.toUpperCase() }</MainTitle>
        <StyledList>
            { filteredRecipes.map(recipe => (
                <Link className="link" to={`/Recipe/${recipe.id}`}>
                    <div key={recipe.id}>
                        <img src={recipe.img} alt=''/>
                        <p className="list-recipe-title">{recipe.title}</p>
                    </div>
                </Link>
            ))}
        </StyledList>
    </StyledContainer>
    )
}

export default List