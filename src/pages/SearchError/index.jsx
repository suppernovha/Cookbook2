import styled from 'styled-components'

const ErrorContainer = styled.div`
    font-size: 40px;
    color: white;
    background-color: black;
    border-radius: 30px;
    padding: 110px 30px;
    text-align: center;
    width: 70vw;
    margin: 0 auto;
    position: absolute;
    top: 30%;
    right: 15%;
`

function SearchError() {
    return (
        <ErrorContainer>Aucune recette ne correspond à votre recherche !</ErrorContainer>
    )
}

export default SearchError