import React from "react"
import { NavBar } from "../components/NavBar";
import { helpContactPageNavBar } from "../constants/NavBarConstants";
import HelpAndContactForm from "../components/HelpAndContactForm";

const ContactPage = () => {
  return (
    <>
      <NavBar links={helpContactPageNavBar} userIsLoggedIn={false} />
      <HelpAndContactForm/>
    </>
  )
};

export default ContactPage;
