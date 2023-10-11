import { styled } from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { useSelector } from 'react-redux';

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
    min-width: 300px;
    border-radius: 6px;
    & li a {
        padding: 10px 20px;
        font-size: 1.6rem;
        font-weight: 500;
        &:hover {
            background-color: var(--background-white);
        }
    }
`;
const ListItem = styled.li`
    text-transform: uppercase;
    font-weight: 500;
`;
function NavBar() {
    const categories = useSelector((state) => state.categories.categories);
    return (
        <Nav>
            <ul className="align-center-flex">
                <ListItem>
                    <Link className="item active line-hover line-hover-primary" to="/">
                        HOME
                    </Link>
                </ListItem>
                <div>
                    <Tippy
                        content={
                            <Dropdown>
                                {categories?.map((cate) => (
                                    <li key={cate.tag}>
                                        <Link to={cate.tag}>{cate.title}</Link>
                                    </li>
                                ))}

                                <li>
                                    <Link to="/sweater">Coming soon</Link>
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
                            Danh mục
                            <AiOutlineDown size={12} />
                        </ListItem>
                    </Tippy>
                </div>
                <ListItem>
                    <Link className="item line-hover line-hover-primary" to="/">
                        Thông báo
                    </Link>
                </ListItem>
            </ul>
        </Nav>
    );
}

export default NavBar;
