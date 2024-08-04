import React, { useState } from "react";
import * as S from "./style";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import Input from "../input/Input";
import useAuth from "../../data/hooks/useAuth";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { fetchData } = useAuth();

    const handleLogin = async () => {
        console.log(await fetchData({ username, password }));
    };

    return (
        <S.LoginWrapper>
            <S.LoginTitle>
                <Typography as="h1" size={3.6} weight={400} color="#000">
                    Welcome to <br />
                    <Typography as="span" weight={700}>
                        Mountain
                    </Typography>
                    <Typography as="span" weight={700} color="#FF0000">
                        Land
                    </Typography>
                </Typography>
            </S.LoginTitle>
            <Button size="big">register</Button>
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
                    <Button type="flat" size="small">
                        I forgot my password
                    </Button>
                    <Button onClick={handleLogin}>login</Button>
                </S.LoginFormButton>
            </S.LoginForm>
        </S.LoginWrapper>
    );
}
