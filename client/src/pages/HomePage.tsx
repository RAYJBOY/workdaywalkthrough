import React, { useState } from "react"
import { NavBar } from "../components/NavBar";
import { homePageNavBar } from "../constants/NavBarConstants";
import { Typography } from "@mui/material";
import '../styles/homePage.css'
import LoginModal from "../components/Login";


export const HomePage = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <NavBar links={homePageNavBar} userIsLoggedIn={false} handleModalOpen={handleModalOpen}/>
      <LoginModal open={isModalOpen} handleClose={handleModalClose} />
      <div className="mainDisplayContainer">
        <Typography variant="h2" gutterBottom>
          Our Vision
        </Typography>
        <div className="mainDisplay">
          <Typography variant="h5" gutterBottom align="center">
            Our objective is to help increase transparency between candidates looking for a role in the tech industry and their future potential employers.
          </Typography>
        </div>
      </div>
    </div>
  )
};
