import { Link } from 'react-router-dom'
import { colors, fonts } from '../../utils/style/variables'
import styled from 'styled-components'
import Plus from '../../assets/plus.png'
import SearchBar from '../../components/SearchBar'
import Banner from '../../components/Banner'
import burgerBar from '../../assets/burger-bar.png'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 3;
    height: 50px;
    background-color: white;
    padding: 0 15px;
    gap: 15px;
    overflow: hidden;
    position: relative;
`
const StyledTitle = styled.h2`
    color: ${colors.primary};
    font-family: ${fonts.header};
    color: ${colors.fourth};
    font-size: 20px;
    margin: 0;
    cursor: pointer;
`
const StyledMenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 35px);    
    grid-auto-rows: 35px;
    grid-gap: 30px;
    margin: 0;
    grid-gap: 15px;
    z-index: 2;
    background-color: white;
`
const StyledMenuItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    aspect-ratio: 1/1;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    ${(props) => props.$greenBG && `
        background-color: ${colors.fourth};
        `}
`
const StyledIcon = styled.img`
    width: 50%;
`

function Header() {
    return (
        <StyledContainer>
            <Link className="link" to="/">
                <StyledTitle>COOK BOOK</StyledTitle>
            </Link>
            <StyledMenuWrapper>
            <StyledMenuItem $greenBG>
                    <StyledIcon src={burgerBar} alt='menu burger' style={{width: '50%'}}/>
                </StyledMenuItem>
                <StyledMenuItem to="/List/main">M</StyledMenuItem>
                <StyledMenuItem to="/List/sweet">S</StyledMenuItem>
                <StyledMenuItem to="/List/basic">B</StyledMenuItem>
                <StyledMenuItem to="/List/drink">D</StyledMenuItem>
                <StyledMenuItem $greenBG >
                    <StyledIcon src={Plus} alt='' />
                </StyledMenuItem>
            </StyledMenuWrapper>
            <Banner />
            <SearchBar />
        </StyledContainer>
    )
}

export default Header