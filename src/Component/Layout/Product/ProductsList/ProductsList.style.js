import styled from 'styled-components';
export const ListWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

    & .item {
        display: flex;
        flex-direction: column;
    }
    & .item a {
        flex-shrink: 0;
    }
    & .item .img {
        position: relative;
    }
`;
export const Description = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 16px;
    text-transform: uppercase;

    & .name {
        flex: 1;
        text-align: center;
        font-weight: 600;
        font-size: 2rem;
        color: var(--black-color);
    }
    & .price {
        font-size: 2rem;
        font-weight: 700;
    }
    & .star {
        font-size: 1.4rem;
    }
`;
export const ProductImg = styled.div`
    width: 100%;
    height: 350px;
    position: relative;
    overflow: hidden;
    border-radius: 6px;

    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        transition: all 0.5s ease-in-out;
    }
    &:hover img {
        transform: scale(1.2);
    }
`;
export const ButtonGroup = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    gap: 10px 0;
    margin: 10px;
    transition: all 0.3s linear;
    z-index: 1;
    opacity: 0;

    & button {
        border-radius: 50%;
        color: #fff;
        background-color: var(--primary-color);
        transform: translateX(80px);
    }
`;

export const ProductImgWrap = styled.div`
    position: relative;
    & button.add-to-cart {
        position: absolute;
        font-size: 1.8rem;
        color: var(--white-color);
        top: 100%;
        width: 0;
        opacity: 0;
        height: 0;
        transition: all 0.2s ease-in-out;
        transform: translateY(50px);
        background-color: var(--primary-color);
        & span {
            margin-left: 10px;
            font-size: 1.4rem;
        }
    }
    &:hover button.add-to-cart {
        opacity: 1;
        height: auto;
        width: 90%;
        transform: translateY(-50px);
    }
    &:hover {
        ${ButtonGroup} {
            opacity: 1;
            transform: translateX(-80px);
        }
    }
    & button {
        padding: 10px;
    }
`;
