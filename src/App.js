import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import { CommonContext } from './Context/CommonContext';

function App() {
  const [commonData, setCommonData] = useState({
    selectedButton: "Report",
    // User: {
    //   UserName: "Krishna",
    //   Email: "challasaikrishna31@gmail.com"
    // }
  });
  return (
    <CommonContext.Provider value={{ commonData, setCommonData }}>
      <div className='flex flex-col h-screen'>
        <Header />
        <NavBar />
        <Body />
        {/* <Footer /> */}
    </div>
    </CommonContext.Provider>


  );
}

export default App;
