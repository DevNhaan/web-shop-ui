import { SectionProducts } from '~/Component/Layout/Section';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Banner, BannerGrid, Contact } from '~/Component/Layout';
const ViewAll = styled.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    margin: 50px 0;
    & a {
        font-size: 1.8rem;
        border-radius: 0;
    }
`;
function Home() {
    return (
        <>
            <Banner />
            <main className="container">
                <SectionProducts tag="best-sellers" />
                <BannerGrid />
                <SectionProducts tag="hoodies" />
                <SectionProducts tag="sweater" />
                <ViewAll>
                    <Link to="/discover" className="btn btn-outline">
                        Xem thêm
                    </Link>
                </ViewAll>
            </main>

            <Contact />
        </>
    );
}

export default Home;
