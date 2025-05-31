import React from "react";

const New = () => {
  return (
    <div className="header w-full fixed bg-gray-400 z-50 top-0">
      <div className="container mx-auto bg-white flex justify justify-between  ">
        <div class="brand-logo bg-blue-50">KJAdventure</div>
        <nav className="bg-green-50 flex justify-center">
          <a>Nepal</a>
        </nav>
        <div id="ham" class="hamburger-menu bg-yellow-50">
          hamburger
        </div>
      </div>
    </div>
  );
};

export default New;
