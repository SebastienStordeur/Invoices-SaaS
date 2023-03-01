import React from "react";
import UpdateProfileForm from "../components/Forms/UpdateProfile/UpdateProfileForm";
import Sidepanel from "../components/Layout/Sidepanel/Sidepanel";

const UpdateProfile: React.FC = () => {
  return (
    <>
      <div className="flex">
        <Sidepanel />
        <UpdateProfileForm />
      </div>
    </>
  );
};

export default UpdateProfile;
