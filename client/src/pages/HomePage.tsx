import { NavBar } from "../components/NavBar";
import { homePageNavBar } from "../constants/NavBarConstants";
import { Typography } from "@mui/material";
import '../styles/homePage.css'


export const HomePage = () => {
  return (
    <>
      <NavBar links={homePageNavBar} userIsLoggedIn={false}/>
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
    </>
  )
};
