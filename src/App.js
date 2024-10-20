import Header from './comp/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './comp/Login';
import Signup from './comp/Signup';
import Home from './comp/Home';
import './App.css';
import Program from './comp/Program';
// import CardsList from './comp/CardsList';
import CardsDetails from './comp/CardsDetails';
import About from './comp/About';
import Community from './comp/Community';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<Program />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          {/* <Route path="/" element={<CardsList />} /> */}
          <Route path="/details/:id" element={<CardsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
