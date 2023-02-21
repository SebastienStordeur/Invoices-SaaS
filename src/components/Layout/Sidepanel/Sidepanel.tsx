import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import LinkList from "./List/LinkList";
import close from "../../../assets/icons/close.svg";
import open from "../../../assets/icons/open.svg";

const variants = {
  open: {},
  closed: { width: "100px" },
};

const Sidepanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <AnimatePresence>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="w-44 hidden md:block h-screen bg-red font-semibold px-4 relative drop-shadow-lg"
      >
        <LinkList isOpen={isOpen} />
        <Button
          aria={isOpen ? "Close panel" : "Open panel"}
          id="toggle-btn"
          className="rounded-full w-14 h-14 absolute bottom-40 -right-7 drop-shadow-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={isOpen ? close : open} className="w-6 h-6" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidepanel;
