import { NavBar } from "../components/NavBar";
import { homePageNavBar } from "../constants/NavBarConstants";
import { Typography } from "@mui/material";
import "../styles/homePage.css";
import Filter, { FilterOption } from "../components/Filter";
import MeetTheTeam from "../components/MeetTheTeam";
import JobResults from "../components/JobResults";

export const HomePage = () => {

  const handleFilterChange = (selectedValue: FilterOption | null) => {
    // write code to filter job cards here
    console.log(selectedValue);
  };

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

        <Typography variant="h2" gutterBottom sx={{ marginTop: "5%" }}>
          Meet The Team
        </Typography>

        <div className="meetTheTeamContainer">
          <MeetTheTeam dev="Hamza"></MeetTheTeam>
          <MeetTheTeam dev="Abdalraof"></MeetTheTeam>
          <MeetTheTeam dev="Qasim"></MeetTheTeam>
        </div>
      </div>

      <Filter onFilterChange={handleFilterChange}></Filter>

      <JobResults/>
    </>
  );
};
