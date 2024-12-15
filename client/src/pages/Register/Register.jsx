import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../utils/api/auth.api.js";

const Register = () => {
  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (auth.confirmPassword !== auth.password) {
      toast.error("passwords do not match");
    } else {
      try {
        const res = await registerUser({
          username: auth.username,
          email: auth.email,
          password: auth.password,
        });
        toast.success(res.data.message);
        navigate("/login");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        toast.error("something went wrong");
      }
    }
  };

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
            <form
              onSubmit={handleRegister}
              className="bg-white h-[400px] p-[20px] rounded-lg flex flex-col justify-between shadow-lg"
            >
              <input
                type="name"
                placeholder="create username"
                className="h-[50px] rounded-full border border-teal-800 text-lg p-[20px] focus:outline-none"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    username: e.target.value,
                  });
                }}
                required
              />
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
                placeholder="create password"
                className="h-[50px] rounded-full border border-teal-800  text-lg p-[20px] focus:outline-none"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    password: e.target.value,
                  });
                }}
                required
              />
              <input
                type="password"
                placeholder="confirm password"
                className="h-[50px] rounded-full border border-teal-800  text-lg p-[20px] focus:outline-none"
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    confirmPassword: e.target.value,
                  });
                }}
                required
              />
             
              <button
                type="submit"
                className="h-[50px] rounded-full bg-teal-600 hover:bg-teal-800 text-white transition"
              >
                register
              </button>
      
    

              <button className=" text-teal-800 hover:text-purple-600 transition">
                <Link to={"/login"}>
                already registered? login.
                </Link>
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
