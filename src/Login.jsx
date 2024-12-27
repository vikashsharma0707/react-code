
// import axios from "axios";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { useNavigate } from "react-router-dom";
// import { message } from "antd";
// import "./CSS/LoginForm.css"; 

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!email || !password) {
//             message.error("Email and password are required.");
//             return;
//         }

//         const api = "https://reqres.in/api/login";

//         try {
//             const response = await axios.post(api, { email, password });

//             if (response.data && response.data.token) {
//                 localStorage.setItem("authToken", response.data.token);
//                 message.success("Login successful!");
//                 navigate("/layout");
//             } else {
//                 message.error("Invalid response from server.");
//             }
//         } catch (error) {
//             if (error.response && error.response.status === 400) {
//                 message.error("Invalid email or password.");
//             } else {
//                 message.error("An error occurred while logging in. Please try again.");
//             }
//         }
//     };

//     return (
//         <Container className="login-container">
//             <Row className="justify-content-center align-items-center vh-100">
//                 <Col xs={12} md={8} lg={6}>
//                     <div className="login-card">
//                         <h1 className="login-title">Login</h1>
//                         <Form onSubmit={handleSubmit} className="login-form">
//                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control
//                                     type="email"
//                                     placeholder="Enter email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="input-field"
//                                     required
//                                 />
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     placeholder="Enter password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="input-field"
//                                     required
//                                 />
//                             </Form.Group>

//                             <Button variant="primary" type="submit" className="submit-button">
//                                 Submit
//                             </Button>
//                         </Form>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Login;
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "./CSS/LoginForm.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            message.error("Email and password are required.");
            return;
        }

        const api = "https://reqres.in/api/login";

        try {
            const response = await axios.post(api, { email, password });

            if (response.data && response.data.token) {
                // Save user data to localStorage
                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("user", email);
                localStorage.setItem("password", password);

                message.success("Login successful!");
                navigate("/layout");
            } else {
                message.error("Invalid response from server.");
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                message.error("Invalid email or password.");
            } else {
                message.error("An error occurred while logging in. Please try again.");
            }
        }
    };

    return (
        <Container className="login-container">
            <Row className="justify-content-center align-items-center vh-100">
                <Col xs={12} md={8} lg={6}>
                    <div className="login-card">
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
                                    required
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
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="submit-button">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
