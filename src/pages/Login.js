import React, { useState } from "react";
import BasicInput from "../componunt/BasicInput";
import BasicButton from "../componunt/BasicButton";
import { json, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  // const clickLogin = (e) => {
  //   console.log(email, "email", password, "password");
  // e.preventDefault();
  // fetch("https://backend.webmotech.com/api/user/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email: email,
  //     password: password,
  //   }),
  // })
  //   .then((response) => response.json())

  //   .then((value) => {
  //     if (value.message === 200) {
  //       alert("You are logged in.");
  //       navigate("/Dashbord");
  //     } else {
  //       console.log(value);
  //       alert("Please check your login information.");
  //     }
  //   });
  // };
  const clickLogin = async (e) => {
    e.preventDefault();

    const bodyParameters = {
      email: email,
      password: password,
    };


    await axios
      .post("https://backend.webmotech.com/api/user/login", bodyParameters)
      .then((response) => {

        if (response.status === 200) {

          alert("You are logged in.");
          navigate("/Dashbord");
          setToken(response.data.output);
          sessionStorage.setItem("token", response.data.data.token);

        } else{

          alert("Please check your login information.");
        }
      }) .catch((error) => {
        alert(error.response.data.message)
        alert("Please check your login information.");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{ width: 500, height: 500, boxShadow: "1px 1px 5px #2e2e2d" }}
      >
        <div
          style={{
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#1e4ce3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Login
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ marginBottom: 20, width: 250 }}>
             <BasicInput
              size={"small"}
              viewLabel={"Email"}
              txtEntry={"text"}
              onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                  console.log(email);
              }}
              required
            />
            {/*<input*/}
            {/*  type="email"*/}
            {/*  name="email"*/}
            {/*  id="email"*/}
            {/*  onChange={(e) => {*/}
            {/*    setEmail(e.target.value);*/}
            {/*    console.log(e.target.value);*/}
            {/*    console.log(email);*/}
            {/*  }}*/}
            {/*  placeholder="name@company.com"*/}
            {/*  required*/}
            {/*/>*/}
          </div>

          <div style={{ marginTop: 20, width: 250 }}>
           <BasicInput
              size={"small"}
              viewLabel={"Password"}
              txtEntry={"password"}
               onChange={(e) => {
                setPassword(e.target.value);
                console.log(e.target.value);
                console.log(password);
              }}
              required
            />
            {/*<input*/}
            {/*  type="password"*/}
            {/*  name="password"*/}
            {/*  id="password"*/}
            {/*  placeholder="••••••••"*/}
            {/*  onChange={(e) => {*/}
            {/*    setPassword(e.target.value);*/}
            {/*    console.log(e.target.value);*/}
            {/*    console.log(password);*/}
            {/*  }}*/}
            {/*  required*/}
            {/*/>*/}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            height: 150,
            width: "100%",
          }}
        >
          <BasicButton
            onClick={clickLogin}
            variant={"contained"}
            label={"Login"}
          />
        </div>
      </div>
    </div>
  );
}
