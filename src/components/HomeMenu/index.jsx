import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fonts } from '../../utils/style/variables'


const StyledMenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(clamp(60px, 21vw, 210px), 1fr));    
    grid-auto-rows: minmax(60px, auto);
    grid-gap: 30px;
    margin: 0 auto;
    width: 60vw;
`
const StyledMenuItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
    background-color: black;
    aspect-ratio: 1/1;
    border-radius: 33px;
    padding: 25px;
    cursor: pointer;
`
const StyledTitle = styled.h1`
    text-align: center;
    margin: 0 auto;
    font-family: ${fonts.header};
    color: white;
    font-size: clamp(30px, 50vw, 55px);
    width: 100%;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`

function HomeMenu() {
    return (
        <StyledMenuWrapper>
            <StyledLink to="/List/main">
                <StyledMenuItem>
                    <StyledTitle>MA<br></br>IN .</StyledTitle>
                </StyledMenuItem>
            </StyledLink>
            <StyledLink to="/List/sweet">
                <StyledMenuItem>
                    <StyledTitle>SWE<br></br>ETS</StyledTitle>
                </StyledMenuItem>
            </StyledLink>
            <StyledLink to="/List/basic">
                <StyledMenuItem>
                    <StyledTitle>BAS<br></br>ICS</StyledTitle>
                </StyledMenuItem>
            </StyledLink>
            <StyledLink to="/List/drink">
                <StyledMenuItem>
                    <StyledTitle>DRI<br></br>NKS</StyledTitle>
                </StyledMenuItem>
            </StyledLink>
        </StyledMenuWrapper>
    )
}

export default HomeMenu