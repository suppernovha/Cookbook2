import { Link } from 'react-router-dom'
import { colors, fonts } from '../../utils/style/variables'
import styled from 'styled-components'
import Plus from '../../assets/plus.png'
import SearchBar from '../../components/SearchBar'
import Banner from '../../components/Banner'
import burgerBar from '../../assets/burger-bar.png'
import { useParams } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 3;
    height: 50px;
    background-color: white;
    padding: 0 10px;;
    overflow: hidden;
    position: relative;
`
const StyledMenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 35px);    
    grid-auto-rows: 35px;
    grid-gap: 10px;
    align-items: center;
    margin: 0;
    padding: 0 10px 0 0;
    z-index: 2;
    background-color: white;
    ${(props) => props.$shortMenu &&`
        grid-template-columns: repeat(2, 35px);  
    `}
`
const StyledTitle = styled.h2`
    color: ${colors.primary};
    font-family: ${fonts.header};
    color: ${colors.fourth};
    font-size: 18px;
    margin: 0;
    cursor: pointer;
    line-height: 0.9;
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
const BannerContainer = styled.div`
    overflow: hidden;
    width: 100%;
    border-left: 2px solid black;
    border-right: 2px solid black;
`
const StyledIcon = styled.img`
    width: 50%;
`

function Header() {
    const currentPath = window.location.pathname
    if (currentPath === '/') {
    return (
        <HeaderContainer>
            <StyledMenuWrapper $shortMenu>
                <StyledMenuItem>
                    <StyledIcon src={burgerBar} alt='menu burger' style={{width: '50%'}}/>
                </StyledMenuItem>
                <StyledMenuItem $greenBG >
                    <StyledIcon src={Plus} alt='' />
                </StyledMenuItem>
            </StyledMenuWrapper>
            <BannerContainer>
                <Banner />
            </BannerContainer>
            <SearchBar />
        </HeaderContainer>
    )
    } else {
        return (
            <HeaderContainer>
                <StyledMenuWrapper>
                    <Link style={{gridColumn: 'span 2'}} className="link" to="/">
                        <StyledTitle>COOK BOOK</StyledTitle>
                    </Link>
                    <StyledMenuItem to="/List/type/main">M</StyledMenuItem>
                    <StyledMenuItem to="/List/type/sweet">S</StyledMenuItem>
                    <StyledMenuItem to="/List/type/basic">B</StyledMenuItem>
                    <StyledMenuItem to="/List/type/drink">D</StyledMenuItem>
                    <StyledMenuItem $greenBG >
                        <StyledIcon src={Plus} alt='' />
                    </StyledMenuItem>
                </StyledMenuWrapper>
                <BannerContainer>
                    <Banner />
                </BannerContainer>

                <SearchBar />
            </HeaderContainer>
        )
    }
}

export default Header