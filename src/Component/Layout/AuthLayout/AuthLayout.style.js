import { styled } from 'styled-components';

export const Container = styled.main`
    background-color: #9ed0c5;
    width: 100%;
    height: 100vh;
    position: relative;

    & .background {
        width: 470px;
        height: 520px;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
    & .background .shape {
        height: 200px;
        width: 200px;
        position: absolute;
        border-radius: 50%;
    }
`;
export const Form = styled.form`
    min-height: 600px;
    max-height: calc(100vh - 20px);
    overflow-y: scroll;
    width: 450px;
    background-color: var(--white-color);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    & .foget-password {
        font-weight: 400;
        font-size: 1.4rem;
        color: var(--primary-color);
        text-decoration: underline;
        &:hover {
            opacity: 0.8;
        }
    }
    & .submit {
        margin-top: 20px;
        width: 100%;
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 10px;
    }

    & .line {
        font-size: 1.6rem;
        color: var(--gray-color);
        text-decoration: underline;
        text-align: center;
        margin: 15px 0;
    }
    & .change-method {
        margin-top: 30px;
        display: flex;
        font-size: 1.4rem;
        color: var(--text-color);
        & a {
            font-weight: 600;
            color: var(--primary-color);
        }
    }
`;

export const GroupInput = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: var(--text-color);
    font-size: 1.5rem;
    margin-bottom: 20px;
    &:focus-within input {
        border-color: var(--primary-color);
    }
    & label {
        position: relative;
        margin-bottom: 4px;
        width: max-content;
        &:hover {
            color: var(--primary-color);
        }
    }
    & label::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        top: 100%;
        left: 0;
        content: '';
        background-color: var(--white-color);
    }
    & label i {
        margin-right: 5px;
    }
    & input {
        border: 2px solid #bdc3c7;
        width: 100%;
        padding: 10px 8px;
        border-radius: 10px;
        background-color: var(--white-color);
    }
    & .inputWrap {
        position: relative;
    }
    & .show-password {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        font-size: 2rem;
        cursor: pointer;
    }
`;
export const Social = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    & a {
        display: flex-inline;
        gap: 0 10px;
        background-color: var(--white-color);
        color: var(--black-color);
        border-radius: 15px;
        padding: 6px 12px;
    }
    & img {
        width: 30px;
        height: 30px;
    }
`;
export const FieldError = styled.span`
    color: #e74c3c;
    align-items: center;
    gap: 0 5px;
    font-size: 1.4rem;
    margin-top: 10px;
`;
