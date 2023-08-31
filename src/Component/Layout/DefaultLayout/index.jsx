import Header from '../Header';
import Footer from '../Footer';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
