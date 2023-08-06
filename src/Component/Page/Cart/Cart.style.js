import { styled } from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;

    gap: 20px;
    @media (max-width: 950px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;
export const Right = styled.section``;
export const ShoppingCart = styled.section`
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
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
