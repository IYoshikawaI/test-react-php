import React, { useState } from "react";

const Form = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(
            "http://localhost/login-react-php/login-react-php/api/login.php",
            {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => response.json())
            .then((jsonData) => {
                props.onSubmit(jsonData);
                setData(jsonData);
            });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3 error">{data.error}</div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default Form;
