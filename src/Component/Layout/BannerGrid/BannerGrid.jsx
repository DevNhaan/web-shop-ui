import { styled } from 'styled-components';
const ImgWrap = styled.div`
    & img {
        width: 300px;
        height: 400px;
        object-fit: cover;
        border-radius: 6px;
    }
`;
const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 0 20px;
    padding: 30px;
    border-radius: 6px;
    background-color: var(--white-color);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
`;
const WrapItem = styled.div`
    flex: 1 0;
    min-width: 300px;
    flex-shrink: 0;
    & span {
        display: block;
        font-size: 1.6rem;
        color: var(--gray-color);
        margin: 10px 0 20px 0;
        width: 80%;
    }
`;
const Heading = styled.p`
    width: 50%;
    font-size: 3rem;
    margin-top: 20px;
    font-weight: 700;
    font-family: 'Satisfy', cursive;
    color: var(--primary-color);
`;
function BannerGrid() {
    return (
        <Container className="container">
            <WrapItem>
                <Heading>Much more than a hooby</Heading>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe mollitia voluptatem tempora
                    numquam! Dolorem quasi totam a perspiciatis, reiciendis earum optio laborum deserunt rerum? Soluta
                    odit corrupti fuga quae?
                </span>
                <ImgWrap>
                    <img
                        src="https://res.cloudinary.com/devshopcloud/image/upload/v1694363826/devshop/banner/beautiful-young-woman-with-headphones-outdoor_1_ivtqgw.jpg"
                        alt="review-1"
                    />
                </ImgWrap>
            </WrapItem>
            <WrapItem>
                <ImgWrap>
                    <img
                        src="https://res.cloudinary.com/devshopcloud/image/upload/v1694239309/devshop/banner/banner-grid-3_gsgeuk.jpg"
                        alt="review-1"
                    />
                </ImgWrap>

                <Heading>DEV SHOP Fashion</Heading>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis quis excepturi. Nisi
                    voluptas, quae minima sequi a vitae esse corrupti mollitia animi dignissimos accusamus, illum
                    temporibus quo blanditiis incidunt?
                </span>
            </WrapItem>
        </Container>
    );
}

export default BannerGrid;
