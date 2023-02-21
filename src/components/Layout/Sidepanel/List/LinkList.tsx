import React from "react";
import invoice from "../../../../assets/icons/invoice.svg";
import historic from "../../../../assets/icons/historic.svg";
import pending from "../../../../assets/icons/pending.svg";
import profile from "../../../../assets/icons/profile.svg";

interface LinkListInterface {
  isOpen: boolean;
}

const LinkList: React.FC<LinkListInterface> = ({ isOpen }) => {
  return (
    <ul className="[&>*]:flex [&>*]:mb-4">
      <li>
        <img src={invoice} alt="" className="h-7" />
        {isOpen && "New Bill"}
      </li>
      <li>
        <img src={historic} alt="" className="h-7" />
        {isOpen && "Historic"}
      </li>
      <li>
        <img src={pending} alt="" className="h-7" />
        {isOpen && "Pending"}
      </li>
      <li>
        <img src={profile} alt="" className="h-7" />
        {isOpen && "Profile"}
      </li>
    </ul>
  );
};

export default LinkList;
