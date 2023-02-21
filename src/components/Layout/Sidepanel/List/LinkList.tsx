import React from "react";
import invoice from "../../../../assets/icons/invoice.svg";
import historic from "../../../../assets/icons/historic.svg";
import profile from "../../../../assets/icons/profile.svg";
import { NavLink } from "react-router-dom";

interface LinkListInterface {
  isOpen: boolean;
}

const LinkList: React.FC<LinkListInterface> = ({ isOpen }) => {
  const activeStyle = {
    backgroundColor: "#ffffff",
    color: "#ef233c",
  };

  return (
    <ul className="mt-10">
      <NavLink to="/invoice/create" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <li className={`flex mb-4 w-full ${!isOpen && "justify-center"}`}>
          <img src={invoice} alt="" className="h-7" />
          {isOpen && "New Bill"}
        </li>
      </NavLink>
      <NavLink to="/all-invoices" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <li className={`flex mb-4 w-full ${!isOpen && "justify-center"}`}>
          <img src={historic} alt="" className="h-7" />
          {isOpen && "All invoices"}
        </li>
      </NavLink>
      <NavLink to="/profile/id" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <li className={`flex mb-4 w-full ${!isOpen && "justify-center"}`}>
          <img src={profile} alt="" className="h-7" />
          {isOpen && "Profile"}
        </li>
      </NavLink>
    </ul>
  );
};

export default LinkList;
