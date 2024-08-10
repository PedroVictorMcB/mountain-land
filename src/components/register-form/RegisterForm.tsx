import React, { useState } from "react";
import * as S from "./sytle";
import Input from "../input/Input";
import Button from "../button/Button";
import useRegister from "../../data/hooks/useRegister";

export default function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { fetchData, isLoading, isSuccess, userInfo } = useRegister();

    const handleRegister = async (e: any) => {
        e.preventDefault();
        await fetchData({ firstName, lastName, email, password });
    };
    console.log(userInfo);

    return (
        <S.FormWrapper>
            <S.Row>
                <S.Column>
                    <Input
                        id="first-name"
                        label="First Name"
                        onChange={setFirstName}
                        value={firstName}
                    />
                </S.Column>
                <S.Column>
                    <Input
                        id="last-name"
                        label="Last Name"
                        onChange={setLastName}
                        value={lastName}
                    />
                </S.Column>
            </S.Row>
            <S.Row>
                <S.Column>
                    <Input
                        id="email"
                        label="Email"
                        onChange={setEmail}
                        value={email}
                    />
                </S.Column>
            </S.Row>
            <S.Row>
                <S.Column width={6}>
                    <Input
                        id="password"
                        label="Password"
                        onChange={setPassword}
                        value={password}
                        type="password"
                    />
                </S.Column>
            </S.Row>
            <S.Row margin="8rem 0 0">
                <S.Column justifyContent="flex-end" flex>
                    <Button onClick={handleRegister}>Register</Button>
                </S.Column>
            </S.Row>
        </S.FormWrapper>
    );
}
