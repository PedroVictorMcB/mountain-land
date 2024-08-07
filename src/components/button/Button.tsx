import React from "react";
import * as S from "./style";

export interface ButtonProps {
    children: string;
    size?: "small" | "medium" | "big";
    color?: string;
    type?: "solid" | "flat";
    onClick?: Function;
}

const buttonSizes = {
    small: S.ButtonSolidSmall,
    medium: S.ButtonSolid,
    big: S.ButtonSolidBig,
};

export default function Button(props: ButtonProps) {
    const {
        children,
        size = "medium",
        color = "#b14343",
        type = "solid",
        onClick,
    } = props;

    const ButtonRender = type !== "solid" ? S.ButtonFlat : buttonSizes[size];

    return (
        <ButtonRender color={color} onClick={onClick}>
            {children}
        </ButtonRender>
    );
}
