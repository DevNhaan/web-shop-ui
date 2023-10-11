import SearchBar from '~/Component/Search/SearchBar';
import { NavBar } from '..';
import UserSection from './UserSection';
import { Logo, Header } from './header.style';
import { Link } from 'react-router-dom';
function HeaderMain() {
    return (
        <Header>
            <div className="container">
                <Logo>
                    <Link to="/">
                        <img src="/logo-dev-shop.png" alt="logo" />
                    </Link>
                </Logo>
                <NavBar />

                <UserSection>
                    <SearchBar />
                </UserSection>
            </div>
        </Header>
    );
}

export default HeaderMain;
