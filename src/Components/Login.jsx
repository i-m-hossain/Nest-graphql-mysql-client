import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../Graphql/Mutations";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, { data, loading, error }] = useMutation(loginUser);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        login({
            variables: {
                input: { username, password },
            },
        });

        //after authentication state change hasn't been done yet
        //it will take two clicks to login or signup
        if (data) {
            navigate("/movieList");
            setUsername("");
            setPassword("");
            console.log(data);
        }
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
                        Submit{" "}
                        <small>
                            (click twice --on auth state is not implemented)
                        </small>
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
