import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';
import Gallery from './Pages/gallery/Gallery';
import Menu from './Pages/menu/Menu';
import LoginPage from './Pages/loginpage/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/abt" element={<About/>}/>
        <Route path="/cnt" element={<Contact/>}/>
        <Route path="/glry" element={<Gallery/>}/>
        <Route path="/mnu" element={<Menu/>}/>
        <Route path="/lg" element={<LoginPage/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
