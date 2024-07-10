import React from "react";
import * as S from "./style";
export interface TypographyProps {
    children: React.ReactNode;
    size?: number;
    color?: string;
    weight?: number;
    italic?: boolean;
    // tipo union abaixo
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function Typography(props: TypographyProps) {
    const { children, size, color, weight, italic, as } = props;
    return (
        <S.TypographyWrapper
            size={size}
            color={color}
            weight={weight}
            italic={italic}
            as={as}
        >
            {children}
        </S.TypographyWrapper>
    );
}
