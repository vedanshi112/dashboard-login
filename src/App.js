// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PortfolioMainPage from './Component/mainpage';
import AboutPage from './Component/aboutpage';
import Projects from './Component/project';
import ContactPage from './Component/contact';
import Cursor from './Component/cursor';
import { CircleLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
// import PortfolioMainPage from './Component/mainpage';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with real data fetch if needed)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        <CircleLoader color="#a8b8d9" size={80} />
      </div>
    );
  }

  return (
    <>
    

    <Cursor/>
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
