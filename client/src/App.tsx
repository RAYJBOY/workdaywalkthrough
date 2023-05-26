import React, { useState } from 'react';
import './App.css';
import { ButtonWithIcon } from './components/ButtonWithIcon'
import LoginModal from './components/Login';

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
      <ButtonWithIcon onClick={handleModalOpen} />
      <LoginModal open={isModalOpen} handleClose={handleModalClose} />
      <p> Starting new project </p>
    </div>
  );
}

export default App;

