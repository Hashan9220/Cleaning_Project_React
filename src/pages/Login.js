import React, {useState} from 'react'
import BasicInput from "../componunt/BasicInput";
import BasicButton from "../componunt/BasicButton";
import {json, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const clickLogin = (e) => {

        console.log(email ,"email" , password,"password")
        // e.preventDefault();
        fetch("https://backend.webmotech.com/api/user/login", {
            method: "POST",
            body:JSON.stringify({
                email:email,
                password : password

            }),
        })
            .then((response) => response.json())

            .then((value) => {
                if (value.message === 200) {
                    alert("You are logged in.");
                    navigate("/Dashbord")
                } else {
                    console.log(value)
                    alert("Please check your login information.");
                }
            });
    }

    return (

        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div style={{width: 500, height: 500, boxShadow: '1px 1px 5px #2e2e2d',}}>
                <div style={{height: 150, display: "flex", justifyContent: 'center', alignItems: 'center',}}>
                    <h2 style={{
                        color: '#1e4ce3',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>Login</h2>
                </div>


                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{marginBottom: 20, width: 250}}>
                        <BasicInput
                            size={"small"}
                            viewLabel={"Email"}
                            txtEntry={"text"}
                            onChange={(e) => {setEmail(e.target.value);}}

                            />

                    </div>

                    <div style={{marginTop: 20, width: 250}}>
                        <BasicInput
                            size={"small"}
                            viewLabel={"Password"}
                            txtEntry={"text"}
                            onChange={(e) => {setPassword(e.target.value);}}
                        />
                    </div>


                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    height: 150,
                    width: '100%'
                }}>

                    <BasicButton
                        onClick={clickLogin }
                        variant={'contained'}
                        label={"Login"}
                    />


                </div>
            </div>
        </div>

    )
}
