import React, { useState } from "react";
import invoice from "../../../assets/icons/invoice.svg";
import LinkList from "./List/LinkList";

const Sidepanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={`hidden md:block h-screen bg-red font-semibold px-4 ${!isOpen ? "w-12" : "w-44"}`}>
      <LinkList isOpen={isOpen} />

      <button onClick={() => setIsOpen((prev) => !prev)}>Close</button>
    </div>
  );
};

export default Sidepanel;
