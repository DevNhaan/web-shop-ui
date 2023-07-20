import { Searchbox } from './header.style';
import { IoSearchOutline } from 'react-icons/io5';
function Searchbar() {
    return (
        <Searchbox>
            <form action="#">
                <input type="text" placeholder="search..." />
                <button className="btn btn-primary btn-s">
                    <IoSearchOutline />
                </button>
            </form>
        </Searchbox>
    );
}

export default Searchbar;
