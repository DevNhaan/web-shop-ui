import { styled } from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';

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
                    <a className="item active line-hover line-hover-gray" href="#!">
                        HOME
                    </a>
                </li>
                <li>
                    <a className="item line-hover line-hover-gray" href="#!">
                        Danh mục sản phẩm <AiOutlineDown />
                    </a>
                </li>
                <li>
                    <a className="item line-hover line-hover-gray" href="#!">
                        Thông báo
                    </a>
                </li>
            </ul>
        </Nav>
    );
}

export default NavigateBar;
