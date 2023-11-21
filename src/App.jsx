import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Cats from './components/pages/Cats';
import Header from './components/layout.jsx/Header';
import Footer from './components/layout.jsx/Footer';
import { useState } from 'react';
import Cat from './components/pages/Cat';

function App() {
  const [selectedCat, setSelectedCat] = useState()
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cats' element={<Cats setSelectedCat={setSelectedCat}/>} />
            <Route path='/cat' element={<Cat selectedCat={selectedCat} />}/>
        </Routes>
      </div>
     <Footer />
    </div>
  );
}

export default App;
