import { TopProducts, Parallax, Banner } from '../../Layout';

function Home() {
    return (
        <>
            <Banner />
            <main className="container maxheight">
                <TopProducts />
            </main>

            <Parallax height={250} url={'/banner/banner-nho.png'} />
        </>
    );
}

export default Home;
