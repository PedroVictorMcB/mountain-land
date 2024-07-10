import React from "react";
import Typography from "../components/typography/Typography";
import Button from "../components/button/Button";

function Home() {
    return (
        <>
            <Button>Register</Button>
            <Button size="small" color="blue">
                Login
            </Button>
            <Typography>Welcome to</Typography>
        </>
    );
}

export default Home;
