import styled from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonFlat = styled.button<Pick<ButtonProps, "color">>`
    color: ${(props) => props.color};
    text-decoration: underline;
    background-color: transparent;
    font-size: 1.9rem;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`;

export const ButtonSolid = styled(ButtonFlat)`
    background-color: ${(props) => props.color};
    color: white;
    text-decoration: none;
    padding: 0.8rem 2rem;
    border-radius: 10rem;
    &:hover {
        padding: 0.8rem 2.5rem;
    }
`;

export const ButtonSolidBig = styled(ButtonSolid)`
    font-size: 2.2rem;
`;

export const ButtonSolidSmall = styled(ButtonSolid)`
    font-size: 1.6rem;
`;
