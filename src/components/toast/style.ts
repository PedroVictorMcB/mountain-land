import styled from "styled-components";

export const ToastWrapper = styled.div`
    padding: 1.5rem;
    position: absolute;
    left: 2rem;
    top: 2rem;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(3px);
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    width: 70%;
    max-width: 28rem;
`;

export const ToastTitle = styled.div`
    padding-bottom: 1.3rem;
    margin-bottom: 1.3rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const Closer = styled.button`
    width: 2rem;
    height: 2rem;
    position: relative;
    border: none;
    background: none;
    cursor: pointer;
    outline: none !important;
    &:hover {
        &::before,
        &::after {
            opacity: 0.8;
        }
    }
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 1.5rem;
        height: 0.1rem;
        background-color: #000;
        top: calc(50% - 0.1rem);
        left: 0.1rem;
    }
    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
`;
