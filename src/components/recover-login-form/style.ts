import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    row-gap: 1rem;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
`;

interface RowProps {
    justifyContent?:
        | "flex-start"
        | "center"
        | "flex-end"
        | "space-between"
        | "space-around"
        | "space-even";
    margin?: string;
}

export const Row = styled.div<RowProps>`
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: ${(props) => props.justifyContent};
    margin: ${(props) => props.margin};
`;

interface ColumnProps {
    width?: number;
    justifyContent?:
        | "flex-start"
        | "center"
        | "flex-end"
        | "space-between"
        | "space-around"
        | "space-even";
    flex?: boolean;
}

export const Column = styled.div<ColumnProps>`
    width: ${(props) =>
        props.width ? (props.width * 100) / 12 + "%" : "100%"};
    justify-content: ${(props) => props.justifyContent};
    display: ${(props) => props.flex && "flex"};
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
`;
