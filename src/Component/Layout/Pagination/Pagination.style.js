const { styled } = require('styled-components');

export const Wrap = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    border-radius: 0.6rem;
    background: #ffffff;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
    gap: 0 10px;
    width: max-content;
    padding: 10px 0;
`;
export const Item = styled.li`
    font-size: 1.6rem;
    border-radius: 8px;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: all 3s ease-in-out;
    &.active {
        background-color: var(--primary-color);
        color: var(--white-color);
    }
`;
