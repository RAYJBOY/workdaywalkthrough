import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import JobSearchPage from './pages/JobSearchPage';
import ContactPage from './pages/ContactPage';

function App() {
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
      {/* <NavBar links={links}></NavBar> */}
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/jobSearchPage' element={<JobSearchPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>         
        </Routes>
      </Router>
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


