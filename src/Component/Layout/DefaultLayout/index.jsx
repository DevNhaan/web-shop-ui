import Header from '../Header';
import Footer from '../Footer';
import NavigateBar from '../NavigateBar';
const style = {
    height: 'fit-content',
};
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <NavigateBar />
            <main style={style}>{children}</main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
