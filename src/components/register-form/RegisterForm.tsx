import React, { useState } from "react";
import * as S from "./sytle";
import Input from "../input/Input";
import Button from "../button/Button";
import useRegister from "../../data/hooks/useRegister";
import Card from "../card/Card";
import Toast from "../toast/Toast";
import Typography from "../typography/Typography";

export default function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isToastOpen, setIsToastOpen] = useState(false);

    const { fetchData, isLoading, isSuccess } = useRegister();

    const handleRegister = async (e: any) => {
        e.preventDefault();
        await fetchData({ firstName, lastName, email, password });
        setIsToastOpen(true);
    };

    const handleToastClose = () => {
        setIsToastOpen(false);
    };

    return (
        <S.Container>
            <Toast
                isOpen={isToastOpen}
                onClose={handleToastClose}
                message={
                    isSuccess
                        ? `Welcome to mountainland ${firstName}, your account has been successfuly created`
                        : `Something went wrong while we were creating your account.`
                }
                title={isSuccess ? "All set!" : "Oops..."}
            />
            <Card title="Create new user">
                {isLoading ? (
                    <Typography>
                        Wait a minute. We are just starting your journey!{" "}
                    </Typography>
                ) : (
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
                                    type="email"
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
                                <Button onClick={handleRegister}>
                                    Register
                                </Button>
                            </S.Column>
                        </S.Row>
                    </S.FormWrapper>
                )}
            </Card>
        </S.Container>
    );
}
