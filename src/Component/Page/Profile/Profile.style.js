import { styled } from 'styled-components';
export const Container = styled.main`
    display: flex;
    margin-bottom: 200px;
`;
export const Avatar = styled.div`
    position: relative;
    border-radius: 50%;
    width: 200px;
    overflow: hidden;
    margin-right: 20px;
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
        width: 100%;
        height: 100%;
        margin-right: 20px;
    }
`;
export const Infor = styled.div`
    padding: 0 20px;
    background-color: var(--white-color);
    flex: 1;
    border-radius: 12px;
    & div {
        margin-bottom: 10px;
        display: flex;
        gap: 0 15px;
        align-items: center;
    }
`;
