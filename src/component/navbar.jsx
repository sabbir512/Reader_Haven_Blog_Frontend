import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../images/bloglogo.jpg";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const hoverStyle = {
    border: "1px solid teal",
  };
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="h-[77px] pt-4">
      <div className="flex justify-between items-center px-4">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={image}
          alt="logo"
        />

        <div className="lists flex justify-center items-center gap-3 ">
          <Link to="/?category=art">ART</Link>
          <Link to="/?category=business">BUSINESS</Link>
          <Link to="/?category=technology">TECHNOLOGY</Link>
          <Link to="/?category=food">FOOD</Link>
          <span className="cursor-pointer text-xl">{currentUser?.name}</span>
          {currentUser ? (
            <span className="cursor-pointer text-xl" onClick={logout}>
              LogOut
            </span>
          ) : (
            <Link className="cursor-pointer text-xl" to={"/login"}>
              LogIn
            </Link>
          )}
          <span
            style={hoverStyle}
            className=" flex bg-[#6CAC8B] rounded-full h-[55px] w-[55px] justify-center items-center  border-transparent transition-all duration-300 hover:bg-white hover:text-teal-700"
          >
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
