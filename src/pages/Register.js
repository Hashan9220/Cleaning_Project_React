import React, {useState} from 'react'
import Divider from "@material-ui/core/Divider";
import {Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select} from "@mui/material";
import BasicInput from "../componunt/BasicInput";
import BasicButton from "../componunt/BasicButton";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [fistName,setFistName]=useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const clickRegister = async (e) => {
        e.preventDefault();
        const bodyParameters = {
            first_name:fistName,
            email: email,
            password: password,
            password_confirmation:confirmPassword
        };
        console.log(bodyParameters)
        await axios
            .post("https://backend.webmotech.com/api/user/register", bodyParameters)
            .then((response) => {
                if (response.status === 200) {
                    alert("You are Register Succece.");
                    navigate("/Home");
                  } else{
                    alert("Please check your Register information.");
                }
            }) .catch((error) => {
                alert(error.response.data.message)
                alert("Please check your Register information.");
            });
    };


    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5%',
            marginBottom: '5%'
        }}>
            <div style={{width: 600, boxShadow: '1px 1px 5px #2e2e2d',}}>

                <div style={{
                    marginLeft: 10,
                    marginTop: 20,
                    height: 100,
                    flexDirection: 'column',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, recusandae.</h5>
                    <h6 style={{color: '#1e4ce3'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
                </div>
                <div style={{marginTop: 30}}>
                    <h5 style={{marginLeft: 20}}>Your Details</h5>
                    <Divider style={{opacity: 0.1, backgroundColor: 'black'}}/>
                </div>
                <div>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                        <label style={{margin: 20}}>Type</label>
                        <FormGroup style={{flexDirection: 'row'}}>
                            <FormControlLabel control={<Checkbox defaultChecked/>} label="Individual"/>
                            <FormControlLabel control={<Checkbox/>} label="Company"/>
                        </FormGroup>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>


                        <div style={{
                            width: '100%',
                            height: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <div style={{width: 100, height: 50, marginRight: 20}}>
                                <FormControl sx={{minWidth: 100}} size="small" style={{}}>
                                    <InputLabel id="demo-simple-select-label">Title</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Age">
                                        <MenuItem>Mr.</MenuItem>
                                        <MenuItem>Mis.</MenuItem>
                                        <MenuItem>Miss.</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div style={{marginRight: 20}}>
                                <BasicInput
                                    size={"small"}
                                    viewLabel={"Fist name"}
                                    txtEntry={"text"}
                                    onChange={(e) => {
                                        setFistName(e.target.value);
                                        console.log(e.target.value);
                                        console.log(fistName);
                                    }}
                                />
                            </div>
                            <div>
                                <BasicInput
                                    size={"small"}
                                    viewLabel={"Last name"}
                                    txtEntry={"text"}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <div style={{margin: 20}}>

                            <div style={{marginBottom: 20, width: '100%', display: 'flex', flexDirection: 'row'}}>
                                <div style={{width: 260, marginRight: 20}}>
                                    <BasicInput
                                        size={"small"}
                                        viewLabel={"Mobile"}
                                        txtEntry={"text"}
                                    />
                                </div>
                                <div style={{width: 260, marginLeft: 20}}>
                                    <BasicInput
                                        size={"small"}
                                        viewLabel={"Password"}
                                        txtEntry={"password"}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            console.log(e.target.value);
                                            console.log(password);
                                        }}
                                    />
                                    

                                </div>
                            </div>

                            <div style={{marginBottom: 20, width:'100%',display: 'flex', flexDirection: 'row'}}>
                            <div style={{marginBottom: 20, width: 260,}}>
                                <BasicInput
                                    size={"small"}
                                    viewLabel={"Email"}
                                    txtEntry={"text"}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        console.log(e.target.value);
                                        console.log(email);
                                    }}
                                />
                         </div>
                         <div style={{marginBottom: 20, width: 260,marginLeft:40}}>
                                <BasicInput
                                    size={"small"}
                                    viewLabel={"password_confirmation"}
                                    txtEntry={"password"}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        console.log(e.target.value);
                                        console.log(confirmPassword);
                                    }}
                                />
                                </div>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                                <div style={{width: 260,}}>
                                    <BasicInput
                                        size={"small"}
                                        viewLabel={"Postal code"}
                                        txtEntry={"text"}
                                    />
                                </div>

                                <div style={{width: 200, marginLeft: 40,}}>
                                    <BasicButton
                                        variant={"contained"}
                                        label={"Find Address"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 style={{marginLeft: 20}}>Company Details (Only for Company)</h5>
                </div>
                <Divider style={{opacity: 0.1, backgroundColor: 'black'}}/>
                <div>
                    <div>
                        <div style={{
                            marginTop: 20,
                            marginLeft: 20,
                            marginBottom: 20,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <div style={{width: 260, marginRight: 20}}>
                                <BasicInput
                                    size={"small"}
                                    viewLabel={"Company name"}
                                    txtEntry={"text"}
                                />
                            </div>
                            <div style={{width: 260, marginLeft: 20}}>
                                <BasicInput
                                    size={"small"}
                                    viewLabel={"Registration number"}
                                    txtEntry={"text"}
                                />
                            </div>
                        </div>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'row',}}>
                            <div style={{marginLeft: 20, marginBottom: 20, width: 260,}}>
                                <BasicInput
                                    size={"small"}
                                    viewLabel={"Postal code"}
                                    txtEntry={"text"}
                                />
                            </div>
                            <div style={{marginLeft: 40}}>
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="Same as above"/>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{width: 260, marginLeft: 20}}>
                                <FormControl sx={{minWidth: 260}} size="small">
                                    <InputLabel id="demo-simple-select-label">Number of employees</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem>0-10</MenuItem>
                                        <MenuItem>10-50</MenuItem>
                                        <MenuItem>50+</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div style={{width: 260, marginLeft: 40,}}>
                                <FormControl sx={{minWidth: 260}} size="small">
                                    <InputLabel id="demo-simple-select-label">Years of experience</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem>Less 1</MenuItem>
                                        <MenuItem>1-3</MenuItem>
                                        <MenuItem>3-6</MenuItem>
                                        <MenuItem>6-10</MenuItem>
                                        <MenuItem>10+</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div style={{margin: 20, width: 400, marginLeft: 20}}>
                            <BasicInput
                                size={"small"}
                                viewLabel={"About your company"}
                                txtEntry={"text"}
                                multiline
                                rows={4}
                                maxRows={6}/>
                        </div>
                    </div>
                    <div style={{width: 200, marginLeft: 20, marginBottom: 40}}>
                        <BasicButton
                            onClick={clickRegister}
                            variant={"contained"}
                            label={"Register"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
