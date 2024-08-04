import React from "react";
import * as S from "./style";
import Typography from "../typography/Typography";

export interface ToastProps {
    title: string;
    message: string;
}

export default function Toast(props: ToastProps) {
    const { title, message } = props;

    const handleClose = () => {
        alert("foi fechado");
    };

    return (
        <S.ToastWrapper>
            <S.ToastTitle>
                <Typography as="h4" size={1.6}>
                    {title}
                </Typography>
                <S.Closer onClick={handleClose} />
            </S.ToastTitle>
            <Typography size={1.6}>{message}</Typography>
        </S.ToastWrapper>
    );
}
