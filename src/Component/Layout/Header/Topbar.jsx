import { TopBarContainer, TopLeft, TopRight } from './header.style';
import { FaFacebook, FaInstagram, FaBell, FaQuestionCircle, FaGlobe } from 'react-icons/fa';

function Topbar() {
    return (
        <section className="background-primary">
            <TopBarContainer className="container">
                <TopLeft className="d-flex">
                    <span className="c-flex">
                        <label htmlFor="phone" className="line-hover line-hover-white">
                            Liên hệ
                        </label>
                        <a href="#!">
                            <FaFacebook />
                        </a>
                        <a href="#!">
                            <FaInstagram />
                        </a>
                    </span>
                    <a id="phone" className="line-hover line-hover-white" href="tel:0376578602">
                        +84 0376 578 602
                    </a>
                </TopLeft>
                <TopRight className="d-flex">
                    <label className="c-flex line-hover line-hover-white" htmlFor="noti">
                        <a id="noti" href="#!">
                            <FaBell />
                        </a>
                        Thông báo
                    </label>
                    <label className="c-flex line-hover line-hover-white" htmlFor="support">
                        <a id="support" href="#!">
                            <FaQuestionCircle />
                        </a>
                        Hỗ trợ
                    </label>
                    <label className="c-flex line-hover line-hover-white" htmlFor="lang">
                        <a id="lang" href="#!">
                            <FaGlobe />
                        </a>
                        Ngôn ngữ
                    </label>
                </TopRight>
            </TopBarContainer>
        </section>
    );
}

export default Topbar;
