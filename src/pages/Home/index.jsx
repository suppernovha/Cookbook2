import styled from 'styled-components'
import { colors, fonts } from '../../utils/style/variables'
import HomeMenu from '../../components/HomeMenu'

const HomeHeader = styled.h1`
    text-align: center;
    font-family: ${fonts.header};
    font-size: clamp(20px, 12vw, 140px);
    color: ${colors.fourth};
    background-color: ${colors.secondary};
    border-radius: 45px;
    margin: 0 auto;
    padding-bottom: 80px;
    width: 80vw;
    line-height: 1.1
`

function Home() {
    return (
        <div style={{transform: 'translateY(20%'}}>
            <HomeHeader>COOK BOOK</HomeHeader>
            <HomeMenu />
        </div>
    );
  }
  
  export default Home;