import React from 'react';
import Home from "./pages/Home";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AllBooks from './pages/AllBooks';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Cart from './pages/Cart';



const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<Home />}/>
          <Route path='/all-books' element={<AllBooks />}/>
          <Route path='/SignUp' element={<SignUp />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App  
