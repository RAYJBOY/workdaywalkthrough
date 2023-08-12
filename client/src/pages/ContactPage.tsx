import React from "react"
import { NavBar } from "../components/NavBar";
import { helpContactPageNavBar } from "../constants/NavBarConstants";
import HelpAndContactForm from "../components/HelpAndContactForm";

interface contactPageProps {
  userIsLoggedIn: boolean | null;
  setUserIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>
}

const ContactPage = ({userIsLoggedIn, setUserIsLoggedIn}: contactPageProps) => {
  
  return (
    <>
      <NavBar links={helpContactPageNavBar} userIsLoggedIn={false} setUserIsLoggedIn={setUserIsLoggedIn}/>
      <HelpAndContactForm/>
    </>
  )
};

export default ContactPage;
