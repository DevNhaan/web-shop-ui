import { styled } from 'styled-components';

export const Wrap = styled.div`
    padding: 20px 30px;
    height: 120px;
    display: flex;
    align-items: center;
    gap: 0 20px;
    transition: all 0.3s ease-in-out;
    & .image {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
        img {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    & .delte-btn {
        flex-shrink: 0;
        color: #e74c3c;
        font-size: 2rem;
    }
    &.active {
        background: var(--primary-background-hover);
    }
    &:hover {
        background: var(--primary-background-hover);
    }
`;

export const Header = styled.div`
    padding: 20px 30px 0;
    display: flex;
    align-items: center;
    gap: 0 20px;
    text-align: center;
    & .name {
        flex: 1;
    }
    & .image {
        width: 80px;
    }
    & .quantity {
        width: 120px;
    }
    & .price {
        width: 80px;
    }
`;
export const QuantityBtn = styled.div`
    display: flex;
    gap: 0 5px;
    align-items: center;
    padding: 6px 12px;
    vertical-align: middle;
    & p {
        border: none;
        text-align: center;
        width: 32px;
        font-size: 16px;
        color: #43484d;
        font-weight: 300;
    }
    & button {
        background-color: var(--primary-color);
        color: var(--white-color);
        padding: 5px;
        min-width: 10px;
    }
`;
export const Name = styled.div`
    flex: 1;
    flex-shrink: 0;
    font-size: 1.4rem;
    color: var(--gray-color);
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`;
export const Price = styled.p`
    flex-shrink: 0;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1.6rem;
`;

export const Container = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 200px;
    gap: 20px;
    @media (max-width: 950px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;
export const CartItems = styled.section`
    background-color: var(--white-color);
`;

export const Order = styled.div`
    padding: 30px 20px;
    background-color: var(--white-color);
    .heading {
        font-size: 2rem;
        font-weight: 700;
        color: #000;
        margin-bottom: 20px;
    }
    .row {
        display: flex;
        justify-content: space-between;
        color: var(--gray-color);
        font-size: 1.6rem;
        margin-bottom: 20px;
        & > span {
            font-weight: 500;
            color: var(--primary-color);
        }
    }
    .line {
        margin: 10px 0 30px 0;
        display: block;
        width: 100%;
        padding-top: 2px;
        background-color: var(--gray-color);
    }
    button {
        width: 100%;
        padding: 10px 12px;
    }

    input {
        padding: 10px 12px;
        font-size: 1.6rem;
        width: 100%;
        margin: 20px 0;
        border: 1px solid var(--gray-color);
    }
    .discount {
        margin-bottom: 50px;
        & button {
            border-radius: 0;
        }
    }
    @media (max-width: 950px) {
        & {
            width: 500px;
        }
    }
`;
