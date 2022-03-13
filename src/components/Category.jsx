import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import Search from './Search';
import styled from 'styled-components';

import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/Japaneses'}>
            <GiChopsticks />
            <h4>Japaneses</h4>
        </Slink>
        <Search />
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margine: 2rem 0rem;
    margin-bottom: 2rem;
`;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color:white;
        font-size: 1.5rem;
    }
`;

export default Category