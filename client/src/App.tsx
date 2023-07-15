import React, { useState } from 'react';
import { ButtonWithIcon } from './components/ButtonWithIcon';
import LoginModal from './components/Login';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import JobCards from './components/JobCards';
import { NavBar, link } from './components/NavBar';
import Filter, { FilterOption } from './components/filter'
import { JobSubmissionForm } from './components/JobSubmissionForm'

function App() {

  const links:link[] = [
    {
      displayName: 'Home',
      link: '/home'
    },
    {
      displayName: 'About',
      link: '/about' 
    }, 
    {
      displayName: 'Contact',
      link: '/contact'
    }
  ];

  // const [isModalOpen, setModalOpen] = useState(false);

  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };

  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };

  // const handleFilterChange = (selectedValue: FilterOption | null) => {
  //   // write code to filter job cards here
  //   console.log(selectedValue);
  // };

  return (
    <div>
      <NavBar links={links}></NavBar>
      {/*<ButtonWithIcon onClick={handleModalOpen} icon={faUser}/>
      <Filter onFilterChange={handleFilterChange}/>
      <JobSubmissionForm></JobSubmissionForm>
      <ButtonWithIcon onClick={handleModalOpen} icon={faUser}/>
      <JobCards></JobCards>
      <LoginModal open={isModalOpen} handleClose={handleModalClose} /> */}
    </div>
  );
}

export default App;


