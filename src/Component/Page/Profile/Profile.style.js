import { styled } from 'styled-components';
export const Container = styled.form`
    display: flex;
    margin-bottom: 200px;
    & button[type='submit'] {
        margin-top: 40px;
    }
`;
export const Address = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px 0;
    & .delete-btn {
        color: #e74c3c;
        font-size: 1.8rem;
    }
    & .address-item {
        display: flex;
        align-items: center;
        gap: 0 10px;
    }
    & .button-menu {
        font-size: 2rem;
    }
`;
export const Avatar = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin-right: 20px;
    border-radius: 50%;
    & span {
        display: none;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 0;
        cursor: pointer;
    }
    &:hover span {
        display: flex;
        opacity: 1;
    }
    & img {
        width: 200px;
        aspect-ratio: 1 / 1;
    }
`;
export const Infor = styled.div`
    padding: 20px;
    background-color: var(--white-color);
    flex: 1;
    border-radius: 6px;
`;

export const Input = styled.div`
    & {
        margin-bottom: 10px;
        display: flex;
        gap: 0 15px;
        align-items: center;
    }

    & input {
        border: solid 1px #ccc;
        padding: 8px 10px;
    }
    & button {
        font-size: 1.8rem;
    }
    & .field {
        display: flex;
    }
    & .error {
        display: flex;
        align-items: center;
        gap: 0 10px;
        margin-left: 10px;
        color: #e74c3c;
    }
`;
