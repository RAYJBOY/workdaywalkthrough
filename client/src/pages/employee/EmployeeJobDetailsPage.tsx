import React from "react"
import { NavBar } from "../../components/NavBar";
import { userJobDetailsPageNavBar } from "../../constants/NavBarConstants";

const UserJobDetailsPage = () => {
  return (
    <>
      <NavBar links={userJobDetailsPageNavBar} userIsLoggedIn={false}/>
    </>
  )
};

export default UserJobDetailsPage;
