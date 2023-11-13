
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
// import Navbar from './components/Navbar';
import "./App.css";
import Faq from './pages/Faq';

function App() {

  const isUserSignedIn = !!localStorage.getItem('token');
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {isUserSignedIn && <Route path="/account" element={<Account />} />}
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
