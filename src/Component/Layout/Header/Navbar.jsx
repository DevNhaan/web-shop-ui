import Searchbar from './Searchbar';
import UserSection from './UserSection';
import { Logo, NavContainer } from './header.style';

function NavBar() {
    return (
        <NavContainer className="container align-center-flex">
            <Logo href="/">
                <img src="/logo-dev-shop-v3.png" alt="logo" />
            </Logo>
            <Searchbar />
            <UserSection />
        </NavContainer>
    );
}

export default NavBar;
