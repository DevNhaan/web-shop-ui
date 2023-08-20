import { styled } from 'styled-components';

export const Infor = styled.div`
    height: 100%;
    padding: 20px;
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    & .line {
        flex: 1;
    }
`;
export const AddressList = styled.div`
    & .item {
        padding: 10px 20px;
        display: flex;
        transition: all 0.3s ease-in-out;
        gap: 0 10px;
        cursor: pointer;
        &:hover {
            background: var(--primary-background-hover);
        }
        .icon {
            color: var(--primary-color);
        }
    }
`;

export const Bill = styled.div`
    background-color: var(--white-color);
    padding: 20px;
    border-radius: 6px;
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
export const ItemWrap = styled.section`
    background-color: var(--white-color);
    border-radius: 6px;
`;
export const Voucher = styled.section`
    background-color: var(--white-color);
    border-radius: 6px;
    & .discount {
        display: flex;
        margin: 10px 0 20px 0;
        gap: 0 10px;
        & input {
            flex: 1;
            border-radius: 6px;
            padding: 10px;
            border: solid 2px #ccc;
        }
    }
    & .discount:focus-within input {
        border-color: var(--primary-color);
    }
    & button {
        font-size: 1.6rem;
        width: max-content;
        border-radius: 6px;
    }
`;
export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    flex-wrap: wrap;
`;
export const Header = styled.div`
    padding: 20px 30px 0;
    display: flex;
    gap: 0 20px;
    font-weight: 600;
`;

export const Item = styled.div`
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
    &:hover {
        background: var(--primary-background-hover);
    }
`;

export const Name = styled.p`
    flex: 1;
    flex-shrink: 0;
    font-size: 1.6rem;
    overflow: hidden;
    font-weight: 600;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: start;
`;
export const Price = styled.p`
    flex-shrink: 0;
    width: 120px;
    text-align: end;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1.6rem;
`;
export const Quantity = styled.p`
    flex-shrink: 0;
    width: 100px;
    text-align: center;
    font-weight: 600;
`;
export const Address = styled.div`
    display: flex;
    justify-content: space-between;
    & .title-dialog {
        font-size: 1.8rem;
        font-weight: 600;
    }
`;
export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    & button {
        font-size: 1.4rem;
        font-weight: 400;
        padding: 4px 10px;
    }
    & button[type='submit'] {
        margin: 20px 0;
    }
`;
