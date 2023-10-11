import { styled } from 'styled-components';
const Banner = styled.section`
    position: relative;
    animation: scale 3s forwards infinite;
    width: 100%;
    height: 100%;
    @keyframes scale {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1);
        }
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Wrapper = styled.div`
    width: 100%;
    height: 250px;
    user-select: none;
    overflow: hidden;
    position: relative;
`;
const Subscribe = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Input = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 10px;
    transition: all 0.2s ease-in-out;
    & input {
        border: 3px solid var(--white-color);
    }
    & button {
        background-color: transparent;
        text-transform: uppercase;
        border: 3px solid var(--white-color);
        &:hover {
            background-color: var(--white-color);
            color: var(--black-color);
        }
    }
    & input,
    & button {
        color: var(--white-color);
        padding: 10px 20px;
        font-size: 1.8rem;
    }
`;
const Description = styled.div`
    color: var(--white-color);
    width: 50%;
    & .heading {
        font-size: 3rem;
        font-weight: 700;
    }
    & span {
        font-size: 1.6rem;
        color: var(--background-white);
    }
`;
function Contact() {
    return (
        <Wrapper>
            <Banner>
                <img
                    src="https://res.cloudinary.com/devshopcloud/image/upload/v1694239310/devshop/banner/banner-nho_skazxp.png"
                    alt="banner"
                />
            </Banner>
            <Subscribe>
                <Description>
                    <p className="heading">Subscribe Our News</p>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut hic impedit rem minus veniam,
                        suscipit labore, quia, omnis ex voluptatem et esse itaque quod adipisci! Eveniet alias deleniti
                        veritatis blanditiis?
                    </span>
                </Description>
                <Input>
                    <input className="input" type="text" placeholder="Email" />
                    <button className="button">subscribe</button>
                </Input>
            </Subscribe>
        </Wrapper>
    );
}

export default Contact;
