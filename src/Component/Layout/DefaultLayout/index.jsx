import Header from '../Header';
import Footer from '../Footer';
import NavigateBar from '../NavigateBar';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <NavigateBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
