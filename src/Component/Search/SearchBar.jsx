import Tippy from '@tippyjs/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { LiaFilterSolid, LiaTimesCircleSolid } from 'react-icons/lia';
import { BiLoaderCircle } from 'react-icons/bi';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/Component/Hook';
import { request } from '~/Untils/request';
import { Filter, Input, Loading, MoreBtn, ResultItem, SearchContent, SearchResult, Wrap } from './Search.style';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
    const navigate = useNavigate();
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setIsLoading(true);

            const res = await request.get('products/search', {
                params: {
                    keyword: searchValue,
                },
            });

            setSearchResult(res.data.content.products);
            setIsLoading(false);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const handleCancel = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        inputRef.current.focus();
    };
    const handleMoreOnClick = () => {
        navigate(`/searching/${searchValue}`);
        setSearchValue('');
        setSearchResult([]);
    };
    return (
        <>
            <Wrap>
                <Tippy
                    content={
                        <>
                            <SearchContent onSubmit={(e) => handleSubmit(e)}>
                                <Filter>
                                    <span className="icon">
                                        <LiaFilterSolid />
                                    </span>
                                    <span>All Product</span>
                                </Filter>
                                <Input>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        name="searchValue"
                                        placeholder="Search product"
                                    />
                                    {searchValue.length > 0 && (
                                        <div className="icon" onClick={handleCancel}>
                                            <LiaTimesCircleSolid />
                                        </div>
                                    )}
                                </Input>
                                <button type="submit" className="icon">
                                    <AiOutlineSearch size={20} />
                                </button>
                            </SearchContent>

                            <SearchResult>
                                {isLoading && (
                                    <Loading className="icon">
                                        <BiLoaderCircle />
                                    </Loading>
                                )}
                                {searchResult.map((item) => (
                                    <ResultItem to={`/details/${item.id}`} key={item.id}>
                                        <div className="img">
                                            <img src={item.images[0].url} alt={item.id} />
                                        </div>
                                        <p className="name">{item.name}</p>
                                        <p className="price">{Number(item.price).toLocaleString('en-US')} VND</p>
                                    </ResultItem>
                                ))}
                                {searchResult.length >= 5 && (
                                    <MoreBtn to={`/searching/${searchValue}`} onClick={handleMoreOnClick}>
                                        Xem thêm
                                    </MoreBtn>
                                )}
                            </SearchResult>
                        </>
                    }
                    theme="light"
                    animation="fade"
                    arrow={true}
                    trigger="mouseenter"
                    interactive={true}
                    placement="bottom"
                    maxWidth="auto"
                >
                    <span onClick={handleMoreOnClick} className="icon hover-primary">
                        <AiOutlineSearch size={28} />
                    </span>
                </Tippy>
            </Wrap>
        </>
    );
}

export default SearchBar;
