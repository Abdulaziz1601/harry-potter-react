import React from 'react'
import styled from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';
import { Button, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from 'reactstrap';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to='/'>
                    Harry Potter DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <UncontrolledDropdown group tabindex="0">
                        <DropdownToggle
                            caret
                            color="info"
                            tag={'a'}
                        />
                        <DropdownMenu>
                            <Link type="button" tabindex="0" role="menuitem" className="dropdown-item" to="houses/gryffindor">Gryffindor</Link>
                            <Link type="button" tabindex="0" role="menuitem" className="dropdown-item" to="houses/hufflepuff">Hufflepuf</Link>
                            <Link type="button" tabindex="0" role="menuitem" className="dropdown-item" to="houses/slytherin">Slytherin</Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </li>
                <li>
                    <Link to="/books">Books</Link>
                </li>
            </HeaderLinks>
        </HeaderBlock >
    )
}

export default Header;