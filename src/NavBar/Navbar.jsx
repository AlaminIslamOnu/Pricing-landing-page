import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const links= navigationData.map((route) => (
    <Link route={route} key={route.id}>
      {" "}
    </Link>
  ))

  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span className="flex" onClick={()=> setOpen(!open)}>
        { open ? <X className="md:hidden"> </X> :  <Menu className="md:hidden"> </Menu>}
       <ul className={`md:hidden absolute duration-1000
        ${open ? "top-7" : "-top-40"}
        bg-amber-300 `}> 
       {links}
       </ul>
       <h3 className="ml-4">Mynav</h3>
      </span>
      <ul className="md:flex hidden">
       {links}
      </ul>
      <button>Sing in</button>
    </nav>
  );
};

export default Navbar;
