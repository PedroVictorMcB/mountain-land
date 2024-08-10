import React from "react";
import * as S from "./style";
import Typography from "../typography/Typography";

export interface ToastProps {
    title: string;
    message: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function Toast(props: ToastProps) {
    const { title, message, isOpen, onClose } = props;

    if (isOpen) {
        return (
            <S.ToastWrapper>
                <S.ToastTitle>
                    <Typography as="h4" size={1.6}>
                        {title}
                    </Typography>
                    <S.Closer onClick={onClose} />
                </S.ToastTitle>
                <Typography size={1.6}>{message}</Typography>
            </S.ToastWrapper>
        );
    }
    return <></>;
}
