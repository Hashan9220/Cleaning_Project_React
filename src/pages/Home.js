import React from "react";
import image from "../assest/bg.png";
import Button from "react-bootstrap/Button";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BrushIcon from "@mui/icons-material/Brush";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import { Rating } from "@mui/material";

export default function Home() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Rating />
            <h6>Lorem ipsum dolor sit amet.</h6>
          </div>
          <div style={{ margin: 0 }}>
            <h1>Your Cleaning Partner</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              ipsa.
            </p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div
            style={{
              marginTop: 20,
              backgroundColor: "#fff",
              width: "100%",
              borderRadius: 15,
              height: 90,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: 20 }}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 200,
                }}
              >
                <SearchIcon />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your postalcode"
                />
              </Paper>
            </div>
            <div style={{ marginLeft: 20 }}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 200,
                }}
              >
                <CalendarMonthIcon />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="select a date"
                />
              </Paper>
            </div>
            <Button
              variant="primary"
              style={{ marginRight: 30, marginLeft: 20 }}
            >
              Find your cleaner
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontWeight: "bold", marginTop: 50 }}>
            Our local house cleaning Services
          </h1>
          <h3>Lorem ipsum dolor sit amet</h3>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              margin: 30,
              width: 200,
              height: 220,
              borderRadius: 5,
              boxShadow: "1px 1px 5px #2e2e2d",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#5276f7",
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BrushIcon style={{ color: "#fff" }} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Lorem ipsum dolor sit
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ marginTop: 10, textAlign: "center" }}>
                Lorem ipsum consectetur adipisicing elit. Dicta molestiae
                molestias nam nesciunt numquam voluptate!
              </p>
            </div>
          </div>
          <div
            style={{
              margin: 30,
              width: 200,
              height: 220,
              boxShadow: "1px 1px 5px #2e2e2d",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#5276f7",
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AutoAwesomeIcon style={{ color: "#fff" }} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Lorem ipsum dolor sit
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ marginTop: 10, textAlign: "center" }}>
                Lorem ipsum consectetur adipisicing elit. Dicta molestiae
                molestias nam nesciunt numquam voluptate!
              </p>
            </div>
          </div>
          <div
            style={{
              margin: 30,
              width: 200,
              height: 220,
              boxShadow: "1px 1px 5px #2e2e2d",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#5276f7",
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImagesearchRollerIcon style={{ color: "#fff" }} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Lorem ipsum dolor sit
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ marginTop: 10, textAlign: "center" }}>
                Lorem ipsum consectetur adipisicing elit. Dicta molestiae
                molestias nam nesciunt numquam voluptate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
