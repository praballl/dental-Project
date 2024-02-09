import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import {Link  } from "react-router-dom";
import './App.css';
import New from './New';
import SearchHere from './components/SearchHere'

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
       
       hii buddies
       <Link to="/new">
          Click me
       </Link>
       <Link to="/search">
          Click me search
       </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/new" element={<New />} />
        <Route path="/search" element={<SearchHere />} />
      </Routes>
    </Router>
  );
}
