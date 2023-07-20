import React from "react"
import { NavBar } from "../components/NavBar";
import { helpContactPageNavBar } from "../constants/NavBarConstants";

const ContactPage = () => {
  return (
    <>
      <NavBar links={helpContactPageNavBar} userIsLoggedIn={false} />
    </>
  )
};

export default ContactPage;
