import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import JobSearchPage from './pages/JobSearchPage';
import ContactPage from './pages/ContactPage';
import RegisterNewJobPage from './pages/employer/RegisterNewJobPage';
import ActiveJobListings from './pages/employer/ActiveJobListings';
import { useState } from 'react';

function App() {
  
  const[userIsLoggedIn, setUserIsLoggedIn] = useState<boolean | null>(null)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn}/>}/>
          <Route path='/jobSearchPage' element={<JobSearchPage userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn}/>}/>
          <Route path='/contact' element={<ContactPage userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn}/>}/> 
          <Route path='/registerJob' element={<RegisterNewJobPage userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn}/>}/>                 
          <Route path='/jobListings' element={<ActiveJobListings userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn}/>}/>                 
        </Routes>
      </Router>
    </div>
  );
}

export default App;


