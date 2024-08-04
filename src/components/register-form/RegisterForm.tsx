import React from "react";
import * as S from "./sytle";
import Input from "../input/Input";
import Button from "../button/Button";

export default function RegisterForm() {
    return (
        <S.FormWrapper>
            <S.Row>
                <S.Column>
                    <Input
                        id="first-name"
                        label="First Name"
                        onChange={() => null}
                        value="Pedro Víctor"
                    />
                </S.Column>
                <S.Column>
                    <Input
                        id="last-name"
                        label="Last Name"
                        onChange={() => null}
                        value="Pedro Víctor"
                    />
                </S.Column>
            </S.Row>
            <S.Row>
                <S.Column>
                    <Input
                        id="email"
                        label="Email"
                        onChange={() => null}
                        value="Pedro Víctor"
                    />
                </S.Column>
            </S.Row>
            <S.Row>
                <S.Column width={6}>
                    <Input
                        id="password"
                        label="Password"
                        onChange={() => null}
                        value="Pedro Víctor"
                    />
                </S.Column>
            </S.Row>
            <S.Row margin="8rem 0 0">
                <S.Column justifyContent="flex-end" flex>
                    <Button>Register</Button>
                </S.Column>
            </S.Row>
        </S.FormWrapper>
    );
}
