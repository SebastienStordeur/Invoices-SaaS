import React, { useContext, useEffect } from "react";
import UpdateProfileForm from "../components/Forms/UpdateProfile/UpdateProfileForm";
import Sidepanel from "../components/Layout/Sidepanel/Sidepanel";
import { AuthContext } from "../context/auth-context";

const UpdateProfile: React.FC = () => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    authCtx.getAuth();
  }, []);
  return (
    <div className="flex">
      <Sidepanel />
      {authCtx.currentUser && <UpdateProfileForm user={authCtx.currentUser} />}
    </div>
  );
};

export default UpdateProfile;
