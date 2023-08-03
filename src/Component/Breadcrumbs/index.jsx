import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const List = styled.ul`
    display: flex;
    gap: 10px;
    font-size: 1.4rem;
    color: var(--gray-color);
    text-transform: uppercase;
    margin: 20px 0;
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
                        <div key={index}>
                            <span className="breadcrumb-arrow">&gt;</span>
                            <li>
                                <Link to={url}>{pathname}</Link>
                            </li>
                        </div>
                    );
                })}
            </List>
        </nav>
    );
}

export default Breadcrumbs;
