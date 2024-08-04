import { Auth, AuthReturn } from "../types/auth";

export default function useAuth() {
    const fetchData = async (userData: Auth) => {
        const data = await fetch(`https://dummyjson.com/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const jsonData: AuthReturn = await data.json();
        return jsonData;
    };
    return { fetchData };
}
