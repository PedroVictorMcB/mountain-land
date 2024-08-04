import React from "react";
import * as S from "./style";

export interface InputProps extends Partial<HTMLInputElement> {
    label: string;
    value: string;
    id: string;
    onChange: (value: string) => void;
}

export default function Input(props: InputProps) {
    const { label, value, onChange: setNewValue, id, ...restProps } = props;

    const handleOnChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewValue(e.target.value);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <S.InputWrapper>
            <S.StyledInput
                {...restProps}
                value={value}
                onChange={handleOnChange}
                className={`${!!value.length && "hasText"}`}
                id={id}
            />
            <S.StyledLabel
                htmlFor={id}
                className={`${!!value.length && "hasText"}`}
            >
                {label}
            </S.StyledLabel>
        </S.InputWrapper>
    );
}
