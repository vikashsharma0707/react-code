

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Logout = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const uname = window.localStorage.getItem("user");
    const uemail = window.localStorage.getItem("email");

    if (!uname) {
      navigate("/login");
    }

    setUser(uname);
    setEmail(uemail);
  }, [navigate]);

  const logout = () => {
    
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("email");

   

    navigate("/login");
  };

  return (
    <div className="logout-page">
      <div className="logout-container">
        <h1 className="logout-heading">This is the logout page.</h1>
        <p className="logout-info">Welcome, {user} ({email})</p>
        <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
