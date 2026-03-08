import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER"
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

            await API.post("/auth/register", form);

            alert("Registered Successfully");

            navigate("/login");

        }
        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="register-page">

            <div className="register-card">

                <h2>Register</h2>

                <form className="register-form" onSubmit={handleSubmit}>

                    <input
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                    />

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

                    <select name="role" onChange={handleChange}>

                        <option value="USER">User</option>
                        <option value="OWNER">Hotel Owner</option>

                    </select>

                    <button className="register-btn">Register</button>

                </form>

            </div>

        </div>

    )

}

export default Register;