import styled from 'styled-components';

export const TopBarContainer = styled.div`
    justify-content: space-between;
    height: 36px;
    font-weight: 400;
    font-size: 1.4rem;
    color: #fff;
    & a {
        color: #fff;
    }
`;

export const TopLeft = styled.div`
    gap: 0 10px;
    span {
        gap: 0 8px;
    }
`;

export const TopRight = styled.div`
    gap: 0 10px;
    label {
        gap: 0 5px;
    }
`;

export const NavContainer = styled.section`
    position: sticky;
    top: 0;
    padding: 10px 0;
`;
export const Logo = styled.a`
    display: flex;
    align-items: center;
    & img {
        width: 100%;
        height: 50px;
    }
    & p {
        color: var(--text-color);
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const Searchbox = styled.section`
    width: 440px;
    max-width: 440px;
    height: 36px;
    border: 2px solid var(--gray-color);
    border-radius: 16px;
    margin-left: 20px;
    overflow: clip;
    &:focus-within {
        border-color: var(--primary-color);
    }
    form {
        display: flex;
        height: 100%;
    }
    input {
        flex: 1;
        padding: 8px 12px;
    }
    button {
        display: block;
    }
`;
export const UserContainer = styled.section`
    margin-left: auto;
    gap: 0 20px;
`;
export const Cart = styled.div`
    & a {
        width: 100px;
        display: flex;
        gap: 0 5px;
        font-weight: 600;
    }
    color: var(--black-color);
`;
export const User = styled.div`
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;
`;
export const CartQuantiy = styled.div``;
