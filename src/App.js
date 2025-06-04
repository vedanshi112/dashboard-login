// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PortfolioMainPage from './Component/mainpage';
import AboutPage from './Component/aboutpage';
import Projects from './Component/project';
import ContactPage from './Component/contact';
// import PortfolioMainPage from './Component/mainpage';

function App() {
  return (
    <>
      {/* <PortfolioMainPage/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PortfolioMainPage/>}/>
        <Route path='/aboutpage' element={<AboutPage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
