import { useParams } from 'react-router-dom';

import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import { LiaTimesCircleSolid } from 'react-icons/lia';
import { BiLoaderCircle } from 'react-icons/bi';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/Component/Hook';
import { request } from '~/Untils/request';
import { Filter, Input, Loading, SearchBar, Wrapper } from './Search.style';
import { ProductsList } from '../Layout/Product';
import { styled } from 'styled-components';
import { Pagination } from '../Layout/Pagination';

const InputLage = styled(Input)`
    border: none;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 2px;
        height: 100%;
        background-color: #e7e7e9;
        display: block;
    }
`;
const ResultWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Hint = styled.div`
    display: flex;
    width: 60%;
    gap: 5px;
    flex-wrap: wrap;
    cursor: pointer;
    margin: 10px 0;
    font-weight: 500;
`;
function SearchingPage() {
    const { keyword } = useParams();
    const inputRef = useRef();

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 8,
        totalPage: 1,
    });
    const { limit: limitPage } = pagination;
    const [searchValue, setSearchValue] = useState(keyword || '');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(searchValue, 500);

    const showPagination = searchResult.length > 0 && searchValue.length > 0;

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
                    limit: limitPage,
                    page: 1,
                },
            });

            console.log(res.data.content);
            const { totalPage, page, limit, products } = res.data.content;

            setSearchResult(products);
            setPagination({ totalPage, limit, page });
            setIsLoading(false);
        };

        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limitPage, debouncedValue]);

    const handleCancel = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue);
        inputRef.current.focus();
    };

    const onNavigateNext = () => {
        setPagination((prev) => ({ ...prev, page: ++prev.page }));
    };
    const onNavigatePrev = () => {
        setPagination((prev) => ({ ...prev, page: --prev.page }));
    };
    const onPageChange = (page) => {
        setPagination((prev) => ({ ...prev, page }));
    };
    return (
        <Wrapper>
            <SearchBar onSubmit={(e) => handleSubmit(e)}>
                <div className="icon">
                    <AiOutlineSearch size={25} />
                </div>
                <InputLage>
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        name="searchValue"
                        placeholder="Search ..."
                    />
                    {searchValue.length > 0 && (
                        <div className="icon" onClick={handleCancel}>
                            <LiaTimesCircleSolid />
                        </div>
                    )}
                </InputLage>
                <Filter>
                    <span>All Product</span>

                    <span className="icon">
                        <AiOutlineDown size={15} />
                    </span>
                </Filter>
            </SearchBar>
            <Hint>
                <span onClick={() => setSearchValue('Hoodie')}>#Hoodie</span>
                <span onClick={() => setSearchValue('Sweater')}>#Sweater</span>
                <span onClick={() => setSearchValue('T-shirt')}>#t-shirt</span>
            </Hint>
            <ResultWrap>
                {isLoading && (
                    <Loading className="icon">
                        <BiLoaderCircle size={30} />
                    </Loading>
                )}
                {showPagination && <ProductsList products={searchResult} />}
                {showPagination && (
                    <Pagination
                        pagination={pagination}
                        onNavigateNext={onNavigateNext}
                        onNavigatePrev={onNavigatePrev}
                        onPageChange={onPageChange}
                    />
                )}
            </ResultWrap>
        </Wrapper>
    );
}

export default SearchingPage;
