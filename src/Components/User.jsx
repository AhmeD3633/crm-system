import React, { useState } from "react";
import img1 from "../assets/Dashboard Login Page illustration -1.png";
import logo from "../assets/top.png";
import { FaPerson } from "react-icons/fa6";
import Rectangle from "../assets/Rectangle 1.png";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
import axios from "axios";
function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();
    let res = await axios.post(" ", {
      //Api
      email: email,
      password: password,
    });
    if (res.status === 200) {
      window.localStorage.setItem("email", email);
      window.location.pathname = "/UserDashboard";
    }
  }
  return (
    <div className="Sign">
      <div className="items-center justify-between middle md:flex">
        <div className="main md:w-[40%] h-screen flex justify-center flex-col items-center  ">
          <img
            src={logo}
            className="logo absolute top-[25px] right-[25px]"
            alt="logo"
          />
          <div className="form md:w-[75%] w-[90%] px-[20px] py-[40px] md:text-start">
            <h3 className="font-bold text-[30px] md:text-[50px] text-[#232323] p-[10px]">
              سجل الدخول
            </h3>
            <p className="text-[#959595] text-[medium]  mb-[20px]">
              ادخل البريد الالكتروني وكلمه المرور
            </p>
            <form
              action="#"
              method="get"
              onSubmit={submit}
              className="flex flex-col items-center"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                type="email"
                placeholder="البريد الالكتروني"
                className="focus:outline-[#00FFA9] border-[1px] border-[solid] border-[#959595]  w-[100%]  rounded-[5px] px-[10px] py-[5px] mx-[5px] my-[10px]"
              ></input>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="كلمه المرور"
                className="focus:outline-[#00FFA9] border-[1px] border-[solid] border-[#959595] w-[100%] rounded-[5px]  px-[10px] py-[5px] mx-[5px] my-[10px]"
              ></input>
              <button
                className="bg-[#00FFA9] p-[10px] w-[100%] rounded-[5px]  font-bold mb-[20px] mt-[20px]"
                type="submit"
              >
                تسجيل الدخول
              </button>
              <div className="divider after:bg-[#959595] before:bg-[#959595]">
                or
              </div>
              <p className="text-[#959595] mt-[10px]">
                تحتاج الي حساب؟
                <Link
                  to={"/registerUser"}
                  className="text-[#3679FD]  underline"
                >
                  {" "}
                  انشئ الان{" "}
                </Link>
              </p>
            </form>
            <div className="flex items-center justify-center gap-3 mt-8">
              <Link to={"/"}>
                <AdminPanelSettingsIcon
                  className="cursor-pointer text-[#232323]"
                  style={{ fontSize: "35px" }}
                />
              </Link>
              <Link to={"/User"}>
                <FaPerson
                  className="cursor-pointer text-[#232323]"
                  style={{ fontSize: "35px" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden relative im2 overflow-hidden md:flex justify-center  items-center h-screen  w-[50%]">
          <img
            src={img1}
            className="object-cover h-[95%] rounded-[10px] shadow-2xl w-[90%]"
            alt="signUser"
          />
          <img
            src={Rectangle}
            className="absolute object-cover h-[95%] rounded-[10px] shadow-2xl w-[90%]"
            alt="rec"
          />
        </div>
      </div>
    </div>
  );
}

export default User;