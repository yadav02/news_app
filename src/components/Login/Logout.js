import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({setIsAuth}) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        setIsAuth(false);
        navigate('/')
    }
  return (
    <div>
      <div>Logout</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
