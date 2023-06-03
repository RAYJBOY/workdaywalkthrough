import React, { useState } from 'react';
import { ButtonWithIcon } from './components/ButtonWithIcon'
import LoginModal from './components/Login';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import JobCards from './components/JobCards';


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div className="App">
      <JobCards></JobCards>
      <ButtonWithIcon onClick={handleModalOpen} icon={faUser}/>
      <LoginModal open={isModalOpen} handleClose={handleModalClose} />
    </div>
  );
}

export default App;

