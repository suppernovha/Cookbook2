import { useContext, useState } from 'react'
import { SearchContext } from '../../utils/context'

import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import search from '../../assets/search.png'
import { colors } from '../../utils/style/variables'
import { RecipeMockedData } from '../../utils/Data'

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 3px solid ${colors.fourth};
    background-color: white;
    border-radius: 30px;
    padding: 5px 15px;
    margin-left: 10px;
    width: 40%;
    gap: 10px;
    z-index: 3;
`
const SearchIcon = styled.img`
    width: 25px;
`
const Input = styled.input`
    border: none;
    outline: none;
    font-size: 20px;
    color: grey;
    width: 100%;
`
function searchRecipeByIngredient(ingredient) {
    const resultId = RecipeMockedData
        .map(recipe => Object.keys(recipe.ingredients).includes(ingredient) ? recipe.id : null)
        .filter(id => id !== null)
        console.log(resultId)
    return resultId
}

function SearchBar() {
    const { inputValue, setInputValue } = useContext(SearchContext)
    const navigate = useNavigate()

    function handleChange(e) {
        setInputValue(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const result = searchRecipeByIngredient(inputValue)
        console.log('Résultat trouvé dans searchBar :', result)
        const path = Array.isArray(result) && result.length > 0 ? `/List/id/${result}` : `/SearchError`;
        navigate(path);
        e.target.reset()
    }
    return (
        <SearchBarContainer>
            <SearchIcon src={search} alt={'search icon'} />
            <form style ={{width: '100%'}} onSubmit={handleSubmit}>
            <Input onChange={handleChange}></Input>
            </form>
        </SearchBarContainer>

    )
}

export default SearchBar
