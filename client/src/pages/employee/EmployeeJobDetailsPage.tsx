import React from "react"
import { NavBar } from "../../components/NavBar";
import { userJobDetailsPageNavBar } from "../../constants/NavBarConstants";

interface employeeJobDetailsPageProps {
  userIsLoggedIn: boolean | null;
  setUserIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>
}

const UserJobDetailsPage = ({userIsLoggedIn, setUserIsLoggedIn}: employeeJobDetailsPageProps) => {
  return (
    <>
      <NavBar links={userJobDetailsPageNavBar} userIsLoggedIn={false} setUserIsLoggedIn={setUserIsLoggedIn} />
    </>
  )
};

export default UserJobDetailsPage;
