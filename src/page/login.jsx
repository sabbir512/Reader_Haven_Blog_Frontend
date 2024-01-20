import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const location = useLocation().search;
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(location);
    setMessage(params.get("message") || "");
  }, [location]);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    await login(inputs);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-4">
        <h1 className="text-[20px] text-teal-800 font-bold">
          Login Into Your Account
        </h1>

        <form
          className="flex flex-col p-[10px] gap-5 w-[38vw]"
          action="http://localhost:9000/login"
          method="POST"
        >
          <input
            required
            className="border-2 border-cyan-400 p-[5px]"
            type="email"
            name="email"
            id="email"
            placeholder="Input your email"
            onChange={handleChange}
          />

          <input
            required
            className="border-2 border-cyan-400 p-[5px]"
            type="password"
            name="password"
            id="password"
            placeholder="Input your password"
            onChange={handleChange}
          />

          <button
            onClick={handleSubmit}
            className="border-2 border-cyan-400 bg-cyan-400 rounded-[2px] px-3 py-1"
            type="submit"
          >
            Login
          </button>

          {message && <p className="text-center">{message}</p>}
          <span>
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
