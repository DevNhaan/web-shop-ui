import { TopProducts, Parallax } from '../../Layout';

function Home() {
    return (
        <>
            <Parallax height={600} url={'/banner/banner-dev-shop.png'} />
            <main className="container maxheight">
                <TopProducts />
            </main>

            <Parallax height={250} url={'/banner/banner-nho.png'} />
        </>
    );
}

export default Home;
