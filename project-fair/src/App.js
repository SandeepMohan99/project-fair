
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Auth from './components/Auth';




function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/register" element={<Auth register />} />
        <Route path="/project" element={ <Project />} />
        <Route path="/dashboard" element={ <Dashboard Dashboard />} />
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
