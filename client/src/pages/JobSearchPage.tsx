import React from "react";
import { NavBar } from "../components/NavBar";
import { jobSearchPageNavBar } from "../constants/NavBarConstants";
import Filter, { FilterOption } from "../components/Filter";
import JobResults from "../components/JobResults";

interface jobSearchPageProps {
  userIsLoggedIn: boolean | null;
  setUserIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>
}

const JobSearchPage = ({userIsLoggedIn, setUserIsLoggedIn}: jobSearchPageProps) => {

  const handleFilterChange = (selectedValue: FilterOption | null) => {
    // write code to filter job cards here
    console.log(selectedValue);
  };

  return (
    <>
      <NavBar links={jobSearchPageNavBar} userIsLoggedIn={false} setUserIsLoggedIn={setUserIsLoggedIn}/>
      <Filter onFilterChange={handleFilterChange}></Filter>
      <JobResults/>
    </>
  );
};

export default JobSearchPage;
