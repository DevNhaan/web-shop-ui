import { styled } from 'styled-components';
const Banner = styled.section`
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
    overflow: hidden;
`;

function Parallax({ url, height }) {
    return (
        <Wrapper style={{ height: `${height}px` }}>
            <Banner>
                <img src={url} alt="banner" />
            </Banner>
        </Wrapper>
    );
}

export default Parallax;
