import styled from 'styled-components';
export const ListWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

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
    & span {
        font-size: 1.3rem;
        color: var(--gray-color);
        white-space: 2px;
    }
    & .name {
        flex: 1;
        text-align: center;
        font-weight: 600;
        font-size: 2rem;
        color: var(--black-color);
    }
    & .star {
        margin: 10px 0;
        color: #f1c40f;
    }
    & .price {
        font-size: 2rem;
        font-weight: 700;
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
        transition: all 0.5s ease-in-out;
    }
    &:hover img {
        transform: scale(1.2);
    }
`;

export const Button = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 30%, transparent);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    opacity: 0;
    gap: 0 15px;
    transition: all 0.3s ease-in-out;
    z-index: 9999;
    & button {
        border-radius: 6px;
        color: var(--white-color);
        font-size: 1.6rem;
        margin-bottom: 20px;
    }
    &:hover {
        height: 100%;
        opacity: 1;
    }
`;
