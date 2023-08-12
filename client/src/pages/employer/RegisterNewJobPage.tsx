import { NavBar } from "../../components/NavBar";
import { registerNewJobPageNavBar } from "../../constants/employer/EmployerNavBarConstants";
import { JobSubmissionForm } from "../../components/JobSubmissionForm";

interface registerNewJobPageProps {
  userIsLoggedIn: boolean | null;
  setUserIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>
}

const RegisterNewJobPage = ({userIsLoggedIn, setUserIsLoggedIn}: registerNewJobPageProps) => {
  return (
    <>
        <NavBar links={registerNewJobPageNavBar} userIsLoggedIn={false} setUserIsLoggedIn={setUserIsLoggedIn} />
        <JobSubmissionForm/>
    </>
  )
};

export default RegisterNewJobPage;
