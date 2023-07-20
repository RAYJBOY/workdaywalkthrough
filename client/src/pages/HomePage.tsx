import { NavBar } from "../components/NavBar";
import { homePageNavBar } from "../constants/NavBarConstants";
import { Typography } from "@mui/material";
import "../styles/homePage.css";

export const HomePage = () => {
  return (
    <>
      <NavBar links={homePageNavBar} userIsLoggedIn={false} />
      <div className="mainDisplayContainer">
        <Typography variant="h2" gutterBottom>
          Our Vision
        </Typography>
        <div className="mainDisplay">
          <Typography variant="h5" gutterBottom align="center">
            To enhance transparency in recruitment where candidates have a
            better understanding of the role they're applying to. Having a good
            idea of what the role entails will provide for better suited
            candidates and will ultimately benefit everyone.
          </Typography>
        </div>

        <Typography variant="h2" gutterBottom sx={{marginTop: '5%'}}>
          Meet The Team
        </Typography>
      </div>
    </>
  );
};
