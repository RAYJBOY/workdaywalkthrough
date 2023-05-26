import React, { useState } from 'react';
import './App.css';
import { ButtonWithIcon } from './components/ButtonWithIcon'
import AuthModal from './components/Login';

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
      <AuthModal open={isModalOpen} handleClose={handleModalClose} />
      <p> Starting new project </p>
    </div>
  );
}

export default App;

