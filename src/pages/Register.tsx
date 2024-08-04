import React from "react";
import Card from "../components/card/Card";
import RegisterForm from "../components/register-form/RegisterForm";

function Register() {
    return (
        <>
            <Card title="Register">
                <RegisterForm />
            </Card>
        </>
    );
}

export default Register;
