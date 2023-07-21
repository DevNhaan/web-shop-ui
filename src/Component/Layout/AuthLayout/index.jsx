import { Container } from './AuthLayout.style';
function AuthLayout({ children }) {
    return (
        <Container>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            {children}
        </Container>
    );
}

export default AuthLayout;
