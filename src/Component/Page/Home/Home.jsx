import { styled } from 'styled-components';
import { TopProducts } from '../../Layout';

const Banner = styled.section`
    margin: 20px 0;
    border-radius: 18px;
    overflow: hidden;
`;

function Home() {
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
