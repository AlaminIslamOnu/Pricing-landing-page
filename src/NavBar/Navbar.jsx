import React from 'react';
import Link from './Link';

const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  
const Navbar = () => {
    return (
        <div>
      <ul className='flex justify-between'>
        { 
            navigationData.map(route=>  <Link route={route} key={route.id}> </Link>)
        }
      </ul>
            
        </div>
    );
};

export default Navbar;