import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { loginAuth } from "../../utils/api/auth.api.js";
import { Link } from "react-router-dom";


const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    // console.log(auth);
    e.preventDefault();
    loginAuth(
      {
        email: auth.email,
        password: auth.password,
      },
      dispatch
    );
  };
  // console.log(user);

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-[70%] h-[70%] flex">
          <div className="flex flex-col justify-center" style={{ flex: 1 }}>
            <Link to={"/"}>
            <h1 className="font-extrabold text-3xl text-teal-600">
              @gamertagged
            </h1>
            </Link>
            <span className="text-lg font-semibold">
              a place for gamers to hang together... or <i>apart</i>.
            </span>
          </div>
          <div className="flex flex-col justify-center" style={{ flex: 1 }}>
            <form onSubmit={handleLogin}>
              <div className="bg-white h-[300px] p-[20px] rounded-lg flex flex-col justify-between shadow-lg">
                <input
                  type="email"
                  placeholder="enter email"
                  className="h-[50px] rounded-full border border-teal-800  text-lg p-[20px] focus:outline-none"
                  onChange={(e) => {
                    setAuth({
                      ...auth,
                      email: e.target.value,
                    });
                  }}
                  required
                />
                <input
                  type="password"
                  placeholder="enter password"
                  className="h-[50px] rounded-full border border-teal-800  text-lg p-[20px] focus:outline-none"
                  onChange={(e) => {
                    setAuth({
                      ...auth,
                      password: e.target.value,
                    });
                  }}
                  required
                  minLength={3}
                />
                <button className="h-[50px] rounded-full bg-teal-600 hover:bg-teal-800 text-white transition">
                  {isFetching ? "logging in" : "login"}
                </button>
                <button className=" text-teal-800 hover:text-purple-600 transition justify-center">
                  <i>forgot password?</i>
                </button>
                <button>
                <Link to={"/register"}>
                  need to register? create an account.{" "}
                </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
