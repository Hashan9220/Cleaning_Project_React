import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./componunt/NavBar";
import Home from "./pages/Home";

import Register from "./pages/Register";
import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";

export default function App() {

    return (<div>
            <NavBar/>
            <div>
                <Routes>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Dashbord" element={<Dashbord/>}/>
                </Routes>
            </div>
        </div>


    );
}
// <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
