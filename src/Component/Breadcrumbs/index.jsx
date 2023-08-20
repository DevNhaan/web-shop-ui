import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const List = styled.ul`
    display: flex;
    gap: 10px;
    font-size: 1.4rem;
    color: var(--gray-color);
    text-transform: uppercase;
    margin: 20px 0;
    & li a {
        display: inline;
        margin-left: 5px;
        transition: all 0.5s linear;
    }
    & li a:hover {
        color: var(--primary-color);
    }
`;

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <nav>
            <List>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((pathname, index) => {
                    const url = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={index}>
                            <span className="breadcrumb-arrow">&gt;</span>
                            <Link to={url}>{pathname}</Link>
                        </li>
                    );
                })}
            </List>
        </nav>
    );
}

export default Breadcrumbs;
