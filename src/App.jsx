import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Cats from './components/pages/Cats';
import Header from './components/layout.jsx/Header';
import Footer from './components/layout.jsx/Footer';
import Cat from './components/pages/Cat';
import NewCat from './components/pages/NewCat';

import catsData from './data/cats.json'

function App() {
  const [selectedCat, setSelectedCat] = useState()
  const [cats, setCats] = useState(catsData)

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cats' element={<Cats cats={cats} setSelectedCat={setSelectedCat} setCats={setCats}/>} />
            <Route path='/cat' element={<Cat selectedCat={selectedCat} />}/>
            <Route path='/newCat' element={<NewCat setCats={setCats}/> }/>
        </Routes>
      </div>
     <Footer />
    </div>
  );
}

export default App;
