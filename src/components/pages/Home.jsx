import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <figcaption className='mainDescr'>
            <p>A happy arrangement: many people prefer cats to other people, and many cats prefer people to other cats.</p>
            <Link to={'/cats'}> 
            {/* <button>Let's go</button> */}
            <input type="image" src="https://webstockreview.net/images/clipart-dog-paw-print-6.jpg" alt=""/>
            <p className='goBtn'>Let's go</p>
            </Link>
        </figcaption>
        <div >
            <figure className='mainPhoto'>
                 {/* <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZyUyMGFuZCUyMGNhdCUyMGZyaWVuZHN8ZW58MHx8MHx8fDA%3D" alt="cat" /> */}
                 <img src="https://images.unsplash.com/photo-1634117766879-dc33d27501c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBhdyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="cat" />
             </figure>
        </div>
        
    </div>
  )
}

export default Home