import styled from "styled-components";

export const LoginWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5rem;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(3px);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    width: 50%;
    max-width: 38rem;
`;

export const LoginTitle = styled.div`
    text-align: center;
`;

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    row-gap: 1rem;
`;

export const LoginFormButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
