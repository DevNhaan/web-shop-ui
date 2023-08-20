import { styled } from 'styled-components';

export const Infor = styled.form`
    height: 100%;
    padding: 20px;
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    & .line {
        flex: 1;
    }
    & button {
        margin: 20px 0 10px 0;
        width: 50%;
        align-self: center;
    }
`;
export const Order = styled.form`
    background-color: var(--white-color);
    padding: 20px;
    border: 2px solid var(--primary-color);
    & .row {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }
    & .heading {
        font-size: 1.6rem;
        font-weight: 500;
    }
    & .price {
        flex-shrink: 1;
        text-align: right;
        font-weight: 600;
    }
    & button {
        margin-top: 30px;
    }
    & span {
        display: block;
        margin-top: 20px;
        color: var(--gray-color);
        font-size: 1.4rem;
        & a {
            display: inline;
            color: var(--primary-color);
        }
    }
    & .name {
        flex-shrink: 0;
        font-size: 1.4rem;
        color: var(--gray-color);
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    & .line {
        width: 100%;
        height: 1px;
        background-color: var(--primary-color);
    }
`;

export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: var(--text-color);
    font-size: 1.6rem;
    margin-bottom: 20px;
    width: 100%;
    &.haft {
        width: 50%;
    }
    & textarea {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 6px;
    }
    &:focus-within input,
    &:focus-within textarea {
        border-color: var(--primary-color);
        border-width: 2px;
    }
    & label {
        position: relative;
        margin-bottom: 4px;
        width: max-content;
        font-weight: 600;
        &:hover {
            color: var(--primary-color);
        }
    }
    & label i {
        margin-right: 5px;
    }
    & input {
        border-radius: 6px;
        border: 1px solid #ccc;
        padding: 10px 8px;
        background-color: var(--white-color);
    }

    & .input-select {
        display: none;
    }
    & .error {
        color: #e74c3c;
        display: flex;
        align-items: center;
        gap: 0 10px;
    }
`;

export const GroupInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 15px;
`;
