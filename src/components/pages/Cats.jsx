import React from 'react'
import { Link } from 'react-router-dom';

// import cats from '../../data/cats.json'
import { useNavigate } from 'react-router-dom'


function Cats({cats, setSelectedCat, setCats}) {

    const navigate = useNavigate();
    
    function clickHandler (catDetail) {
        setSelectedCat(catDetail);
        navigate('/cat')
    }

    function deleteHandler(deletInf){
        const result = cats.filter(ct => ct.id != deletInf.id);
        setCats(cats=>result);
    }
  return (
    <div className='cats'>
        {cats.map((ct, ind) => <div className='catsLink' style={{backgroundImage: `url(${ct.url})`}} key={ind}>
            <h2  onClick={() => {clickHandler(ct)}}>{ct.name}</h2>
            <button onClick={() => deleteHandler(ct)}>Del</button>
        </div>)}
        <Link to={'/newCat'}><button className='newCatBtn'>+</button></Link>
    </div>
  )
}

export default Cats