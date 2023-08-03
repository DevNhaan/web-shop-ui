import Searchbar from './Searchbar';
import UserSection from './UserSection';
import { Logo, AuthContainer } from './header.style';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <AuthContainer className="container align-center-flex">
            <Logo>
                <Link to="/">
                    <img src="/logo-dev-shop-v3.png" alt="logo" />
                </Link>
            </Logo>
            <Searchbar />
            <UserSection />
        </AuthContainer>
    );
}

export default NavBar;
