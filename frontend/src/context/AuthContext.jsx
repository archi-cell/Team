import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    // Load user and token when app starts
    useEffect(() => {

        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken) {
            setToken(storedToken);

            // Automatically attach token to axios
            axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
        }

        if (storedUser && storedUser !== "undefined") {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Invalid user data in localStorage");
                setUser(null);
            }
        }

    }, []);

    // LOGIN FUNCTION
    const login = (data) => {

        const receivedToken = data.token;
        const receivedUser = data.user;

        if (!receivedToken) {
            console.error("Token missing in login response");
            return;
        }

        localStorage.setItem("token", receivedToken);
        localStorage.setItem("user", JSON.stringify(receivedUser));

        // Set axios header automatically
        axios.defaults.headers.common["Authorization"] = `Bearer ${receivedToken}`;

        setToken(receivedToken);
        setUser(receivedUser);
    };

    // LOGOUT FUNCTION
    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        delete axios.defaults.headers.common["Authorization"];

        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
