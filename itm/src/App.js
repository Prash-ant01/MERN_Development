import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom' ;
import Login from './pages/login';
import Reg from './pages/reg';
import Header from './support/header';
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import Addproduct from './pages/addproduct';
import Cart from './pages/cart';


function App() 
{
  
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/log" element={<Login/>} />
          <Route exact path="/reg" element={<Reg/>} />
          <Route exact path="/menu" element={<Menu/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/addproduct" element={<Addproduct/>} />
          <Route exact path="/cart" element={<Cart/>} />

    
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
