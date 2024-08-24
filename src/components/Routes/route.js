import { useState } from "react";
// import Home from "../Home";
// import DetailsPage from "../Details/DetailsPage";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Logout from "../Login/Logout";

const RoutePage = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
      <div>
        <Routes>
          <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
          <Route
            path="/blank"
            element={
              isAuth ? (
                <Logout setIsAuth={setIsAuth} />
              ) : (
                <Login setIsAuth={setIsAuth} />
              )
            }
          />
        </Routes>
      </div>
  );
};

export default RoutePage;
