import styled from "styled-components";
import { TypographyProps } from "./Typography";

// ao usar arrow function caso usarmos apenas um arg, os parenteses são opcionais.
export const TypographyWrapper = styled.p<Omit<TypographyProps, "children">>`
    font-size: ${(props) => props.size + "rem"};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    font-style: ${(props) => (props.italic ? "italic" : "unset")};
`;
