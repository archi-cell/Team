import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", form);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.user.role);

            alert("Login successful");

            navigate("/");

        }
        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <h2>Login</h2>

                <form className="login-form" onSubmit={handleSubmit}>

                    <input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />

                    <button className="login-btn">Login</button>

                </form>

            </div>

        </div>

    )

}

export default Login;