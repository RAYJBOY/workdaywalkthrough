import React from "react";
import { NavBar } from "../components/NavBar";
import { jobSearchPageNavBar } from "../constants/NavBarConstants";

const JobSearchPage = () => {
  return (
    <>
      <NavBar links={jobSearchPageNavBar} userIsLoggedIn={false} />
    </>
  );
};

export default JobSearchPage;
