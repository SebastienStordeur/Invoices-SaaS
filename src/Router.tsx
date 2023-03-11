import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidepanel from "./components/Layout/Sidepanel/Sidepanel";
import { AuthContext } from "./context/auth-context";
import AllInvoices from "./pages/AllInvoices";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import UpdateProfile from "./pages/UpdateProfile";

const Router: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(authCtx.isAuthenticated);

  useEffect(() => {
    setIsAuthenticated(authCtx.isAuthenticated);
  }, []);

  console.log(isAuthenticated);

  return (
    <BrowserRouter>
      {/* <Sidepanel /> */}
      <Routes>
        {!isAuthenticated && <Route path="/" element={<HomePage />} />}
        {/* {isAuthenticated && ( */}
        <React.Fragment>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-invoices" element={<AllInvoices />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </React.Fragment>
        {/* )} */}
        {/* <Route path="*" element={<HomePage></HomePage>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
