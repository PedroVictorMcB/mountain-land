import styled from "styled-components";
import { InputProps } from "./Input";
import React from "react";

interface StyledInputProps extends Partial<Omit<InputProps, "onChange">> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input<StyledInputProps>`
    width: 100%;
    border: none;
    border-bottom: 2px solid #b1b1b1;
    padding: 1rem;
    font-size: 1.8rem;
    box-shadow: none;
    outline: none;
    background-color: transparent;
    &:focus {
        padding: 1.4rem 1rem 0.6rem;
        & + label {
            top: 20%;
            font-size: 1.4rem;
        }
    }
    &.hasText {
        padding: 1.4rem 1rem 0.6rem;
    }
`;

export const StyledLabel = styled.label`
    color: #4d4d4d;
    font-size: 2.4rem;
    position: absolute;
    top: 47%;
    left: 0;
    transform: translateY(-50%);
    margin-left: 1rem;
    transition: all ease 0.3s;
    &.hasText {
        top: 20%;
        font-size: 1.4rem;
    }
`;
