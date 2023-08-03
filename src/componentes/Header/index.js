
import Logo from '../../componentes/Logo';
import OpcaoHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';
import slyled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = slyled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;

`

function Header(){
    return (
        <HeaderContainer>
            <Link to="/"> 
              <Logo/>
            </Link>
            <OpcaoHeader/>
            <IconesHeader/>
        </HeaderContainer>
        
    )
}

export default Header