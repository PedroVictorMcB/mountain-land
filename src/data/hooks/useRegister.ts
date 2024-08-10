import { useState } from "react";
import { Register, RegisterReturn } from "../types/register";

export default function useRegister() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState<boolean>();
    const [userInfo, setUserInfo] = useState<RegisterReturn>();

    const fetchData = async (userData: Register) => {
        setIsLoading(true);
        try {
            const data = await fetch(`https://dummyjson.com/users/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (data.status !== 201) throw new Error("An error has occurred.");

            const jsonData: RegisterReturn = await data.json();

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
