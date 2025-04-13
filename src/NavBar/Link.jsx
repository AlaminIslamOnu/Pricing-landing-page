import React from "react";

const Link = ({ route }) => {
  return (
    <li className="hover:bg-amber-500 lg:mr-12 font-bold mx-4 ">
      {<a href={route.path}>{route.name}</a>}
    </li>
  );
};

export default Link;
