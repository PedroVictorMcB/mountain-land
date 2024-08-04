import React from "react";
import * as S from "./style";
import Typography from "../typography/Typography";

export interface CardProps {
    title: string;
    children: React.ReactNode;
    maxWidth?: number;
}

export default function Card(props: CardProps) {
    const { title, children, maxWidth } = props;

    return (
        <S.CardWrapper maxWidth={maxWidth}>
            <S.CardTitle>
                <Typography as="h1" size={2.4}>
                    {title}
                </Typography>
            </S.CardTitle>
            {children}
        </S.CardWrapper>
    );
}
