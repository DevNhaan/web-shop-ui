import { styled } from 'styled-components';
export const Nav = styled.nav`
    margin: 30px 0;
    font-size: 1.6rem;
    font-weight: 600;
    white-space: 2px;
    text-transform: uppercase;
    color: var(--primary-color);
    cursor: pointer;
    & span {
        color: var(--gray-color);
    }
`;
export const Order = styled.div``;
export const Details = styled.div``;
export const ImageContainer = styled.div`
    display: flex;
    gap: 10px;
    background-color: var(--backgroud-white);
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr 300px;
    gap: 20px;
    padding: 30px;
    border-radius: 16px;
    background-color: var(--white-color);
`;
export const ListImg = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    height: 400px;
    flex-shrink: 0;
    gap: 10px 0;
    background-color: var(--backgroud-white);
    overflow-y: scroll;
    & .item {
        flex-shrink: 0;
        height: 70px;
        width: 70px;
        position: relative;
        opacity: 0.6;
        &:hover {
            opacity: 1;
        }
    }
    & .item.active {
        opacity: 1;
        border: 1px solid var(--gray-color);
    }
    & img {
        display: block;
        position: absolute;
        border-radius: 16px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
`;
export const MainImg = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    & img {
        border-radius: 16px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`;

export const Name = styled.h1`
    font-size: 2rem;
    color: var(--black-color);
    white-space: 1px;
    text-transform: capitalize;
    font-weight: 700;
    margin-top: 10px;
    line-height: 1.5;
`;
export const Prize = styled.div`
    gap: 15px;
    margin-top: 20px;

    & .rating {
        display: flex;
        align-items: center;
        & i {
            margin-right: 5px;
            display: flex;
            align-items: center;
            color: #f1c40f;
        }
    }
    & span > span {
        color: var(--primary-color);
    }
`;
export const Price = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
    & .original {
        color: var(--gray-color);
        font-weight: 400;
        text-decoration: line-through;
        font-size: 1.4rem;
    }
`;
export const Size = styled.section`
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 3rem;
    color: var(--black-color);
    margin-top: 10px;
    gap: 0 20px;
    text-transform: uppercase;
    & button {
        border-radius: 10px;
        padding: 0;
        width: 40px;
        height: 40px;
    }
    & button.active {
        color: var(--white-color);
        background-color: var(--primary-color);
    }
`;
export const Description = styled.section`
    font-size: 1.4rem;
    color: var(--gray-color);
    max-width: 400px;
    white-space: pre-wrap;
`;
export const Quantity = styled.section`
    display: flex;
    align-items: center;
    gap: 0 16px;
    font-size: 1.8rem;
    color: var(--primary-color);
    & button {
        width: 20px;
        height: 20px;
        padding: 0;
    }
    & button.disable {
        opacity: 0.5;
        cursor: not-allowed !important;
    }
`;

export const BuyBtn = styled.section`
    display: flex;
    justify-content: center;
    gap: 0 20px;
    margin-top: 50px;
    & button {
        display: block;
        width: 200px;
        padding: 12px 10px;
        border-radius: 10px;
    }
    & button i {
        margin-right: 10px;
    }
`;
