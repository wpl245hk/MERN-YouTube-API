import React, {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './services/login.js';
import FourThreeThree from './components/four-three-three.js';
import FourFourTwo from './components/four-four-two.js';
import ThreeFourThree from './components/three-four-three.js';

function App() {

  const [user, setUser] = useState("");
  const [noFormation, setNoFormation] = useState(true);

  async function login (newUser)  {
    setUser(newUser)
  };
  const logout = () => {
    setUser(null)
  };

  const onClickFormation = () => {
    setNoFormation(false)
  };

  return (
    <div className="app">
      {user?
      <div>
        <div  className="formation-choices">
          <div className="formation-choice">
            <Link to="/442"  className="formation-link" onClick={onClickFormation} >4-4-2</Link>
          </div>
          <div className="formation-choice">
            <Link to="/433" className="formation-link" onClick={onClickFormation}>4-3-3</Link>
          </div>
          <div className="formation-choice">
            <Link to="/343" className="formation-link" onClick={onClickFormation}>3-4-3</Link>
          </div> 
          <a href="/" className="reg-login" onClick={logout} >Logout</a>
        </div>
        { noFormation &&
          <div className="homepage">
            <h2 className="reg-login"  >Please chosse a formation</h2>
          </div>}
      </div>
      :
      <div className="homepage">
        <a href="/login" className="reg-login" > Register or Login </a> 
      </div>}
     
  
      <div className="formation" >
        <Routes >
          <Route path="/" />
          <Route path="/login" element={<Login login={login}  />}  />
          <Route path="/442" element={<FourFourTwo user={user} />}   />
          <Route path="/433" element={<FourThreeThree user={user} />} />
          <Route path="/343" element={<ThreeFourThree user={user} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
