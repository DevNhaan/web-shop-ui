import Topbar from './Topbar';
import NavBar from './Navbar';

function Header() {
    return (
        <header className="box-shadow-bottom">
            <Topbar />
            <NavBar />
        </header>
    );
}

export default Header;
