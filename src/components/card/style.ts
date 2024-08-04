import styled from "styled-components";
import { CardProps } from "./Card";

export const CardWrapper = styled.div<Pick<CardProps, "maxWidth">>`
    padding: 2.5rem 3rem;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(3px);
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    width: 50%;
    max-width: ${(props) => props.maxWidth};
`;

export const CardTitle = styled.div`
    padding-bottom: 1.8rem;
    border-bottom: solid 0.1rem #d7d7d7;
    margin-bottom: 1.8rem;
`;
