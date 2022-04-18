import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar flex-[3] m-5 pb-8 bg-[#fdfbfb] rounded-lg flex flex-col items-center">
      <div className="sidebarItem flex flex-col items-center">
        <span className="sidebarTitle m-3 p-2 w-[80%] border-t-2 border-solid border-[#a7a4a4] border-b-2 text-center text-2xl leading-5 text-[#222222] font-bold">
          ABOUT ME
        </span>
        <img
          className="mt-5 w-[250px] h-[250px] rounded-md"
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p className="p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          tenetur quas dignissimos molestias qui voluptate eius minus recusandae
        </p>
      </div>
      <div className="sidebarItem flex flex-col items-center">
        <span className="sidebarTitle m-3 p-2 w-[80%] border-t-2 border-solid border-[#a7a4a4] border-b-2 text-center text-2xl leading-5 text-[#222222] font-bold">
          CATEGORIES
        </span>
        <ul className="sidebarList mb-8">
          <li className="sidebarListItem inline-block w-1/2 mt-4 cursor-pointer">
            Life
          </li>
          <li className="sidebarListItem inline-block w-1/2 mt-4 cursor-pointer">
            Music
          </li>
          <li className="sidebarListItem inline-block w-1/2 mt-4 cursor-pointer">
            Style
          </li>
          <li className="sidebarListItem inline-block w-1/2 mt-4 cursor-pointer">
            Sport
          </li>
          <li className="sidebarListItem inline-block w-1/2 mt-4 cursor-pointer">
            Tech
          </li>
          <li className="sidebarListItem inline-block w-1/2 mt-4 cursor-pointer">
            Entertainment
          </li>
        </ul>
      </div>
      <div className="sidebarItem flex flex-col items-center">
        <span className="sidebarTitle m-3 p-2 w-[80%] border-t-2 border-solid border-[#a7a4a4] border-b-2 text-center text-2xl  text-[#222222] font-bold">
          FOLLOW US
        </span>
        <div className="sidebarSocial mt-5 w-[250px] flex items-center justify-center">
          <i className="sidebarIcon text-2xl ml-3 fab fa-facebook-square"></i>
          <i className="sidebarIcon text-2xl ml-3 fab fa-instagram-square"></i>
          <i className="sidebarIcon text-2xl ml-3 fab fa-pinterest-square"></i>
          <i className="sidebarIcon text-2xl ml-3 fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
