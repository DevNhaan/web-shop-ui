import { styled } from 'styled-components';

export const InforMain = styled.div`
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
export const Address = styled.div`
    display: flex;
    justify-content: space-between;
    & .title-dialog {
        font-size: 1.8rem;
        font-weight: 600;
    }
`;
