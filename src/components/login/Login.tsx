import React, { useState } from "react";
import * as S from "./style";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import Input from "../input/Input";
import useAuth from "../../data/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Toast from "../toast/Toast";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isToastOpen, setIsToastOpen] = useState(false);
    const navigation = useNavigate();

    const { fetchData, isLoading, isSuccess, userInfo } = useAuth();

    const handleLogin = async () => {
        await fetchData({ username, password });
        setIsToastOpen(true);
    };

    const handleToastClose = () => {
        setIsToastOpen(false);
    };
    return (
        <>
            <Toast
                isOpen={isToastOpen}
                onClose={handleToastClose}
                message={
                    isSuccess
                        ? `Bem vindo ${userInfo?.firstName}!`
                        : "Desculpe, você não conseguiu logar."
                }
                title={isSuccess ? "Usuário logado com sucesso" : "Falhou."}
            />
            <S.LoginWrapper>
                {isLoading ? (
                    <Typography>Carregando...</Typography>
                ) : (
                    <>
                        <S.LoginTitle>
                            <Typography
                                as="h1"
                                size={3.6}
                                weight={400}
                                color="#000"
                            >
                                Welcome to <br />
                                <Typography as="span" weight={700}>
                                    Mountain
                                </Typography>
                                <Typography
                                    as="span"
                                    weight={700}
                                    color="#FF0000"
                                >
                                    Land
                                </Typography>
                            </Typography>
                        </S.LoginTitle>
                        <Button
                            size="big"
                            onClick={() => navigation("register")}
                        >
                            register
                        </Button>
                        <Typography size={2.5}>or</Typography>
                        <S.LoginForm>
                            <Input
                                id="username"
                                label="Username"
                                onChange={setUsername}
                                value={username}
                            />
                            <Input
                                id="password"
                                label="Password"
                                onChange={setPassword}
                                value={password}
                                type="password"
                            />
                            <S.LoginFormButton>
                                <Button
                                    type="flat"
                                    size="small"
                                    onClick={() =>
                                        navigation("recover-password")
                                    }
                                >
                                    I forgot my password
                                </Button>
                                <Button onClick={handleLogin}>login</Button>
                            </S.LoginFormButton>
                        </S.LoginForm>
                    </>
                )}
            </S.LoginWrapper>
        </>
    );
}
