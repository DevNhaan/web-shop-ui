import './footer.scss';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li>
                                <a href="!#">about us</a>
                            </li>
                            <li>
                                <a href="!#">our services</a>
                            </li>
                            <li>
                                <a href="!#">privacy policy</a>
                            </li>
                            <li>
                                <a href="!#">affiliate program</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li>
                                <a href="!#">FAQ</a>
                            </li>
                            <li>
                                <a href="!#">shipping</a>
                            </li>
                            <li>
                                <a href="!#">returns</a>
                            </li>
                            <li>
                                <a href="!#">order status</a>
                            </li>
                            <li>
                                <a href="!#">payment options</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li>
                                <a href="!#">watch</a>
                            </li>
                            <li>
                                <a href="!#">bag</a>
                            </li>
                            <li>
                                <a href="!#">shoes</a>
                            </li>
                            <li>
                                <a href="!#">dress</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="!#">
                                <BsFacebook />
                            </a>
                            <a href="!#">
                                <AiFillTwitterCircle />
                            </a>
                            <a href="!#">
                                <BsInstagram />
                            </a>
                            <a href="!#">
                                <AiFillLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
