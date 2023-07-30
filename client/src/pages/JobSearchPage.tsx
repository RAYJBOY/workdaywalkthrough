import React from "react";
import { NavBar } from "../components/NavBar";
import { jobSearchPageNavBar } from "../constants/NavBarConstants";
import Filter, { FilterOption } from "../components/Filter";
import JobResults from "../components/JobResults";

const JobSearchPage = () => {

  const handleFilterChange = (selectedValue: FilterOption | null) => {
    // write code to filter job cards here
    console.log(selectedValue);
  };

  return (
    <>
      <NavBar links={jobSearchPageNavBar} userIsLoggedIn={false} />
      <Filter onFilterChange={handleFilterChange}></Filter>
      <JobResults/>
    </>
  );
};

export default JobSearchPage;
