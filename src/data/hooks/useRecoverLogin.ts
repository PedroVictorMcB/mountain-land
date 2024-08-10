import { useState } from "react";
import { RecoverLogin, RecoverLoginReturn } from "../types/recoverLogin";

export default function useRecoverLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState<boolean>();
    const [userInfo, setUserInfo] = useState<RecoverLoginReturn>();

    const fetchData = async (userData: RecoverLogin) => {
        setIsLoading(true);
        try {
            const data = await fetch(
                `https://dummyjson.com/users/filter?key=email&value=${userData.email}`
            );

            if (data.status !== 200) throw new Error("An error has occurred.");

            const jsonData: RecoverLoginReturn = await data.json();

            if (jsonData.total !== 1) throw new Error("No user found it");

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
