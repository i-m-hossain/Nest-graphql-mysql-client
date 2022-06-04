import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../Graphql/Mutations";

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [login, { data, loading, error }] = useMutation(signupUser);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        console.log(username, password, email);
        e.preventDefault();
        login({
            variables: {
                input: { username, password, email },
            },
        });
        //after authentication state change hasn't been done yet
        //it will take two clicks to login or signup
        if (data) {
            navigate("/movieList");
            setUsername("");
            setPassword("");
            setEmail("");
        }
    };
    return (
        <div className="w-50 mx-auto mt-5 pt-5">
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>User name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up{" "}
                        <small>
                            (click twice --on auth state is not implemented)
                        </small>
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <Link to="/">sign in?</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
