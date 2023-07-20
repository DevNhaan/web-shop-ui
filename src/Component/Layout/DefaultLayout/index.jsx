import Header from '../Header';
import Footer from '../Footer';
import NavigateBar from '../NavigateBar';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <NavigateBar />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
