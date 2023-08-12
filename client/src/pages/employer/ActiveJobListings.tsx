import React from "react";
import { NavBar } from "../../components/NavBar";
import { activeJobListings } from "../../constants/employer/EmployerNavBarConstants";

interface activeJobListingsPageProps {
  userIsLoggedIn: boolean | null;
  setUserIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>
}

const ActiveJobListings = ({userIsLoggedIn, setUserIsLoggedIn}: activeJobListingsPageProps) => {
  return (
    <div>
      <NavBar links={activeJobListings} userIsLoggedIn={false} setUserIsLoggedIn={setUserIsLoggedIn} />
      This is the active job listings page
    </div>
  );
};

export default ActiveJobListings;
