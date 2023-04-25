import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { UserContext } from './Context/UserContext';

function App() {
  const [user, setUser] = useState({
    User: {
      UserName: "Krishna",
      Email: "challasaikrishna31@gmail.com"
    }
  });
  return (
    <UserContext.Provider value={user}>
      <div className='flex flex-col h-screen'>
        <Header />
        <Body />
        {/* <Footer /> */}
    </div>
    </UserContext.Provider>


  );
}

export default App;
