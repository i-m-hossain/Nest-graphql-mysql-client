import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="w-50 mx-auto mt-5 pt-5">
            <form>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>User name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
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
