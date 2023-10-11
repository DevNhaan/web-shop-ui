import styled from 'styled-components';
export const ListWrap = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
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
        font-weight: 500;
        font-size: 1.8rem;
        color: var(--black-color);
    }
    & .price {
        font-size: 2rem;
        font-weight: 600;
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
        transition: all 0.2s ease-in-out;
        object-fit: cover;
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
    transition: all 0.3s ease-in-out;
    z-index: 1;
    opacity: 0;

    & button {
        border-radius: 6px;
        color: var(--black-color);
        background-color: var(--white-color);
        transform: translateX(80px);
        &:hover {
            color: var(--white-color);
            background-color: var(--primary-color);
        }
    }
`;

export const ProductImgWrap = styled.div`
    position: relative;
    & button.add-to-cart {
        position: absolute;
        font-size: 1.8rem;
        top: 100%;
        width: 90%;
        height: 0;
        opacity: 0;
        transition: all 0.2s ease-in-out;
        transform: translateY(50px);
        color: var(--black-color);
        background-color: var(--white-color);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 5px;

        border-radius: 6px;
        & span {
            font-size: 1.6rem;
        }
        &:hover {
            color: var(--white-color);
            background-color: var(--primary-color);
        }
    }
    &:hover button.add-to-cart {
        opacity: 1;
        height: auto;
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
export const Sale = styled.div`
    font-size: 1.2rem;
    position: absolute;
    top: 5%;
    left: 5%;
    padding: 2px 10px;
    color: var(--white-color);
    background-color: var(--primary-color);
    border-radius: 6px;
`;
