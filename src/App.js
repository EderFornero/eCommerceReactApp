import './App.css';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//COMPONENTS
import Counter from './components/Counter/Counter';
//Nav
import Navbar from './components/Header/Navbar';
//Pages
import Home from './components/pages/Home';
import Fragance from './components/pages/Fragance';
import Watch from './components/pages/Watch';
import Handbag from './components/pages/Handbag';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fragance" element={<Fragance />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/handbag" element={<Handbag />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
      {/* <Counter /> */}

    </Router>
  );
}

export default App;
