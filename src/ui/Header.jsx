import React from "react";
import useUser from "../features/authentication/useUser";

function Header() {
    const{data} =useUser()
    console.log(data);
    
  return <div className="bg-secondary-0 px-8 py-4 border-b ">app header</div>;
}

export default Header;
