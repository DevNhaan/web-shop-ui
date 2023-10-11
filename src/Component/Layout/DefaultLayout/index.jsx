import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    min-height: 100vh;
`;
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
