import { styled } from 'styled-components';

export const Item = styled.div`
    padding: 20px 30px;
    height: 120px;
    display: flex;
    align-items: center;
    gap: 0 20px;
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
`;
export const QuantityBtn = styled.div`
    display: flex;
    gap: 0 5px;
    align-items: center;
    padding: 6px 12px;
    vertical-align: middle;
    & input {
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
