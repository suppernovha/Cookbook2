import styled from 'styled-components'
import { colors, fonts } from '../../utils/style/variables'
import HomeMenu from '../../components/HomeMenu'

const HomeHeader = styled.h1`
    text-align: center;
    font-family: ${fonts.header};
    font-size: clamp(20px, 12vw, 110px);
    color: ${colors.fourth};
    background-color: ${colors.secondary};
    border-radius: 45px;
    margin: 0 auto;
    margin-top: 80px;
    padding-bottom: 80px;
    line-height: 1.1
`

function Home() {
    return (
        <div>
            <HomeHeader>COOK BOOK</HomeHeader>
            <HomeMenu />
        </div>
    );
  }
  
  export default Home;