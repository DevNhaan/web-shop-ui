import { styled } from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    margin: 20px 0;
    & ul {
        justify-content: center;
        gap: 0 30px;
    }
    & ul a {
        font-weight: 700;
        font-size: 1.8;
        text-transform: uppercase;
        color: var(--gray-color);
    }
`;
function NavigateBar() {
    return (
        <Nav>
            <ul className="align-center-flex">
                <li>
                    <Link className="item active line-hover line-hover-gray" to="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link className="item line-hover line-hover-gray" to="/categories">
                        Danh mục sản phẩm <AiOutlineDown />
                    </Link>
                </li>
                <li>
                    <Link className="item line-hover line-hover-gray" to="/">
                        Thông báo
                    </Link>
                </li>
            </ul>
        </Nav>
    );
}

export default NavigateBar;
