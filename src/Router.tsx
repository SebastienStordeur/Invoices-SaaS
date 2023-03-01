import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidepanel from "./components/Layout/Sidepanel/Sidepanel";
import AllInvoices from "./pages/AllInvoices";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import UpdateProfile from "./pages/UpdateProfile";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      {/*  <Sidepanel /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-invoices" element={<AllInvoices />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
