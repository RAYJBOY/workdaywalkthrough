import React, { useState } from 'react';
import './App.css';
import { ButtonWithIcon } from './components/ButtonWithIcon'
import LoginModal from './components/Login';
import { faUser } from '@fortawesome/free-regular-svg-icons';


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
      <ButtonWithIcon onClick={handleModalOpen} icon={faUser}/>
      <LoginModal open={isModalOpen} handleClose={handleModalClose} />
    </div>
  );
}

export default App;

