import { FaCode, FaRegUser } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";
import { Route } from "lucide-react";
import { Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={open ? "nav open" : "nav close"}>
      {open ? (
        <FaXmark
          className={open ? "fa-round" : ""}
          onClick={() => {
            setOpen(!open);
          }}
        />
      ) : (
        <RiMenu2Fill
          className={"fa-round"}
          onClick={() => {
            setOpen(!open);
          }}
        />
      )}
      <Link to="#about" smooth>
        <FaRegUser className="fa-solid" />
      </Link>
      <Link to="#education" smooth>
        <Route className="fa-solid" />
      </Link>
      <Link to="#skill" smooth>
        <IoBagCheckOutline className="fa-solid" />
      </Link>
      <Link to="#project" smooth>
        <FaCode className="fa-solid" />
      </Link>
      <Link to="#contact" smooth>
        <Mail className="fa-solid" />
      </Link>
    </nav>
  );
}
