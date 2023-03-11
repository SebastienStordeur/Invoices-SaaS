import React, { useContext, useEffect } from "react";
import Sidepanel from "../components/Layout/Sidepanel/Sidepanel";
import axios from "axios";
import { AuthContext } from "../context/auth-context";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.getItem("token")) authCtx.getAuth();
  }, []);

  return (
    <React.Fragment>
      <div className="flex">
        <Sidepanel />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
