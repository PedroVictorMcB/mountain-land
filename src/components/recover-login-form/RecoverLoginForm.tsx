import React, { useState } from "react";
import * as S from "./style";
import Input from "../input/Input";
import Button from "../button/Button";
import useRecoverLogin from "../../data/hooks/useRecoverLogin";
import Toast from "../toast/Toast";
import Card from "../card/Card";
import Typography from "../typography/Typography";

export default function RecoverLoginForm() {
    const [email, setEmail] = useState("");
    const [isToastOpen, setIsToastOpen] = useState(false);

    const { fetchData, isLoading, isSuccess } = useRecoverLogin();

    const handleRecoverLogin = async (e: any) => {
        e.preventDefault();
        await fetchData({ email });
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
                        ? `Recover password link sent to ${email}.`
                        : `We couldn't find any account associated with this e-mail: ${email}`
                }
                title={isSuccess ? "Check your email!" : "Oops..."}
            />
            <Card title="Insert your email account">
                {isLoading ? (
                    <Typography>Searching for this user account... </Typography>
                ) : (
                    <S.FormWrapper>
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
                        <S.Row margin="8rem 0 0">
                            <S.Column justifyContent="flex-end" flex>
                                <Button onClick={handleRecoverLogin}>
                                    Recover Password
                                </Button>
                            </S.Column>
                        </S.Row>
                    </S.FormWrapper>
                )}
            </Card>
        </S.Container>
    );
}
