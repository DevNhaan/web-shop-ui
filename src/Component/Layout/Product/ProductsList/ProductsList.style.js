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
        font-weight: 600;
        font-size: 2rem;
        color: var(--black-color);
    }
    & .star {
        color: #f1c40f;
    }
    & .price {
        font-size: 2rem;
        font-weight: 700;
    }
`;
export const ProductImg = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
    }
`;
