import { styled } from 'styled-components';
import { TopProducts } from '../../Layout';
import { useEffect } from 'react';
import httpRequest from '../../../Apis/request';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../../redux/Selector/AuthSelector';
import { getAllProducts } from '../../../Apis/ProductApi';
const Banner = styled.section`
    margin: 20px 0;
    border-radius: 18px;
    overflow: hidden;
`;

function Home() {
    const token = useSelector(getToken);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllProducts(dispatch, httpRequest(token));
    }, [token, dispatch]);

    return (
        <main className="container maxheight">
            <Banner className="box-shadow-bottom">
                <a href="#!">
                    <img src="/banner.png" alt="banner" />
                </a>
            </Banner>
            <TopProducts />
        </main>
    );
}

export default Home;
