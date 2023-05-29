import React, { useState } from 'react';
import './App.css';
import { ButtonWithIcon } from './components/ButtonWithIcon'
import LoginModal from './components/Login';
import { NavBar, link } from './components/NavBar';

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

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div className="App">
      <NavBar links={links}></NavBar>
      <ButtonWithIcon onClick={handleModalOpen} />
      <LoginModal open={isModalOpen} handleClose={handleModalClose} />
    </div>
  );
}

export default App;

