import { NavBar } from "../components/NavBar";
import { homePageNavBar } from "../constants/NavBarConstants";
import { Link, Typography } from "@mui/material";
import "../styles/homePage.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <div className="meetTheTeamContainer">

          <div style={{width:'320px', height:'212px'}}>
            <img src={require('../public/Hamza.jpg')} alt="Hamza" style={{width:'100%', height:'100%', borderRadius:'5%'}}/>
          </div>
          <div className="meetTheTeamText">
            <Typography variant="h5" gutterBottom>
              Muhammad Hamza Imam
            </Typography>
            <Typography variant="h5" gutterBottom>
              Full Stack Developer
            </Typography>
            <Typography variant="h5" gutterBottom>
              Reading, United Kingdom
            </Typography>
            <Typography variant="h5" sx={{position:'absolute', bottom:'0', width:'100%'}}>
              <a href="https://www.linkedin.com/in/muhammad-hamza-imam-402128196" target="_blank" rel="noreferrer" style={{color:'inherit', paddingRight:'5%'}}><LinkedInIcon fontSize="large"/></a>
              <a href="https://github.com/RAYJBOY" target="_blank" rel="noreferrer" style={{color:'inherit'}}><GitHubIcon fontSize="large"/></a>
            </Typography>
          </div>

          <div style={{width:'320px', height:'212px'}}>
            <img src={require('../public/Hamza.jpg')} alt="Hamza" style={{width:'100%', height:'100%', borderRadius:'5%'}}/>
          </div>
          <div className="meetTheTeamText">
            <Typography variant="h5" gutterBottom>
              Abdalraof Benaesha
            </Typography>
            <Typography variant="h5" gutterBottom>
              Software Engineer
            </Typography>
            <Typography variant="h5" gutterBottom>
              Manchester, United Kingdom
            </Typography>
            <Typography variant="h5" sx={{position:'absolute', bottom:'0', width:'100%'}}>
              <a href="https://www.linkedin.com/in/abdalraof-benaesha-636231aa/" target="_blank" rel="noreferrer" style={{color:'inherit', paddingRight:'5%'}}><LinkedInIcon fontSize="large"/></a>
              <a href="https://github.com/Abenaesha" target="_blank" rel="noreferrer" style={{color:'inherit'}}><GitHubIcon fontSize="large"/></a>           
            </Typography>
          </div>

          <div style={{width:'320px', height:'212px'}}>
            <img src={require('../public/Hamza.jpg')} alt="Hamza" style={{width:'100%', height:'100%', borderRadius:'5%'}}/>
          </div>
          <div className="meetTheTeamText">
            <Typography variant="h5" gutterBottom>
              Qasim Kamran the SoyLord
            </Typography>
            <Typography variant="h5" gutterBottom>
              Software Engineer
            </Typography>
            <Typography variant="h5" gutterBottom>
              Manchester, United Kingdom
            </Typography>
            <Typography variant="h5" sx={{position:'absolute', bottom:'0', width:'100%'}}>
              <a href="https://www.linkedin.com/in/qasim-kamran-89b731198/" target="_blank" rel="noreferrer" style={{color:'inherit', paddingRight:'5%'}}><LinkedInIcon fontSize="large"/></a>
              <a href="https://github.com/qasimkamran" target="_blank" rel="noreferrer" style={{color:'inherit'}}><GitHubIcon fontSize="large"/></a>           
            </Typography>
          </div>

        </div>
      </div>
    </>
  );
};
