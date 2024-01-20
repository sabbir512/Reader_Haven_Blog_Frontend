import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
function Register() {
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setMessage(params.get("message") || "");
  }, [location.search]);
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-4">
        <h1 className="text-[20px] text-teal-800 font-bold">
          Register Your Account
        </h1>
        <form
          className="flex flex-col p-[10px] gap-5 w-[38vw]"
          action="http://localhost:9000/register"
          method="POST"
        >
          <input
            required
            className="border-2 border-cyan-400 p-[5px]"
            type="text"
            name="name"
            id="name"
            placeholder="Input your name"
          />

          <input
            required
            className="border-2 border-cyan-400 p-[5px]"
            type="email"
            name="email"
            id="email"
            placeholder="Input your email"
          />

          <input
            required
            className="border-2 border-cyan-400 p-[5px]"
            type="password"
            name="password"
            id="password"
            placeholder="Input your password"
          />

          <input
            required
            className="border-2 border-cyan-400 p-[5px]"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Input your password again"
          />

          <button
            className="border-2 border-cyan-400 bg-cyan-400 rounded-[2px] px-3 py-1"
            type="submit"
          >
            Register
          </button>
          {message && <p className="text-center">{message}</p>}
          <span>
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
