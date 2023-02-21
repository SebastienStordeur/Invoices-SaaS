import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidepanel from "./components/Layout/Sidepanel/Sidepanel";
import AllInvoices from "./pages/AllInvoices";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      {/*  <Sidepanel /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-invoices" element={<AllInvoices />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
