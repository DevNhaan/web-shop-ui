const { styled } = require('styled-components');

export const Progress = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    padding: 20px 10px;
    max-width: 100%;
    & .step-list {
        color: #333;
        list-style-type: none;
        border-radius: 10px;
        display: flex;
        position: relative;
        z-index: 10;
        width: max-content;
    }

    & .step-item {
        padding: 0 20px;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        min-width: 170px;
        position: relative;
    }
    & .step-item + .step-item:after {
        content: '';
        position: absolute;
        left: 0;
        top: 19px;
        background: var(--primary-color);
        width: 100%;
        height: 2px;
        transform: translateX(-50%);
        z-index: -10;
    }
    & .progress-count {
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-weight: 600;
        margin: 0 auto;
        position: relative;
        z-index: 10;
        color: transparent;
    }
    & .progress-count:after {
        content: '';
        height: 40px;
        width: 40px;
        background: var(--primary-color);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: -10;
    }
    & .progress-count:before {
        content: '';
        height: 10px;
        width: 20px;
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -60%) rotate(-45deg);
        transform-origin: center center;
    }
    & .progress-label {
        font-size: 14px;
        font-weight: 600;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    & .current-item .progress-count:before,
    & .current-item ~ .step-item .progress-count:before {
        display: none;
    }
    & .current-item ~ .step-item .progress-count:after {
        height: 10px;
        width: 10px;
    }
    & .current-item ~ .step-item .progress-label {
        opacity: 0.5;
    }
    & .current-item .progress-count:after {
        background: #fff;
        border: 2px solid var(--primary-color);
    }
    & .current-item .progress-count {
        color: var(--primary-color);
    }
`;

export const Details = styled.div``;
