
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import "../CSS/Login.css" 
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();  

        const api = "https://reqres.in/api/login";

        axios.post(api, { email, password })
            .then((res) => {
                if (res.status === 200) {
                    window.localStorage.setItem("user", email);
                    alert("Login successful");
                    navigate("/layout"); 
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
                alert("Invalid email or password. Please try again.");
            });
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)} 
                        className="input-field"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"  
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input-field"
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserLogin;
