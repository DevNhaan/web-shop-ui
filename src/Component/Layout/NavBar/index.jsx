import { styled } from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

const Nav = styled.nav`
    margin: 20px 0;
    & ul {
        justify-content: center;
        gap: 0 30px;
    }
    & ul a {
        font-size: 1.6rem;
        text-transform: uppercase;
        color: var(--black-color);
    }
`;
const Dropdown = styled.ul`
    background-color: var(--white-color);
    padding: 10px;
    & li a {
        padding: 10px 8px;
    }
`;
const ListItem = styled.li`
    text-transform: uppercase;
`;
function NavBar() {
    return (
        <Nav>
            <ul className="align-center-flex">
                <ListItem>
                    <Link className="item active line-hover line-hover-primary" to="/">
                        HOME
                    </Link>
                </ListItem>
                <Tippy
                    content={
                        <Dropdown>
                            <li>
                                <Link to="/hoodies">Hoodie</Link>
                            </li>
                            <li>
                                <Link to="/sweater">Sweater</Link>
                            </li>
                        </Dropdown>
                    }
                    theme="light"
                    animation="fade"
                    arrow={false}
                    trigger="mouseenter"
                    interactive={true}
                    placement="bottom"
                >
                    <ListItem className="item line-hover line-hover-primary">
                        Danh mục sản phẩm <AiOutlineDown />
                    </ListItem>
                </Tippy>
                <li>
                    <Link className="item line-hover line-hover-primary" to="/">
                        Thông báo
                    </Link>
                </li>
            </ul>
        </Nav>
    );
}

export default NavBar;
