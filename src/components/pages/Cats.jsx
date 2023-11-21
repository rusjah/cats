import React, { useState } from 'react'

import cats from '../../data/cats.json'
import { useNavigate } from 'react-router-dom'


function Cats({setSelectedCat}) {
    const navigate = useNavigate();
    
    function clickHandler ({catDetail}) {
        setSelectedCat(catDetail);
        navigate('/cat')
    }
  return (
    <div className='cats'>
        {cats.map((ct, ind) => <div key={ind}>
            <h2>{ct.name}</h2>
            <button onClick={() => {clickHandler(clickHandler)}}>Look</button>
        </div>)}
    </div>
  )
}

export default Cats