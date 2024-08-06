import { useState } from "react";
import { Auth, AuthReturn } from "../types/auth";

export default function useAuth() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState<boolean>();
    const [userInfo, setUserInfo] = useState<AuthReturn>();

    const fetchData = async (userData: Auth) => {
        setIsLoading(true);
        try {
            const data = await fetch(`https://dummyjson.com/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (data.status !== 200) throw new Error("An error has occurred.");

            const jsonData: AuthReturn = await data.json();

            setIsSuccess(true);
            setUserInfo(jsonData);
            setIsLoading(false);
        } catch (e) {
            setIsSuccess(false);
            setIsLoading(false);
        }
    };
    return { fetchData, isLoading, isSuccess, userInfo };
}
