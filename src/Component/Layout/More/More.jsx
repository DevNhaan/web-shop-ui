import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrap = styled.div`
    display: flex;
    justify-content: end;
    margin: 20px 0;
    & a {
        font-size: 1.6rem;
        color: var(--primary-color);
        display: flex;
        align-items: center;
    }
`;

function More({ path }) {
    return (
        <Wrap>
            <Link to={path}>
                Xem thêm{' '}
                <span className="icon">
                    <BsArrowRight />
                </span>
            </Link>
        </Wrap>
    );
}

export default More;
