import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Invest from './pages/Invest';
import Dashboard from './pages/dashboard/Index';


const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/invest" element={<Invest/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
