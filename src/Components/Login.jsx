import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, password });
    };
    return (
        <div className="w-50 mx-auto mt-5 pt-5">
            <form>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>User name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="User name"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Not registered <Link to="/register">Sign Up?</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
