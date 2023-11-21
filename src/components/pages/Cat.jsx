import React from 'react'

function Cat({selectedCat}) {
  return (
    <div className='cat'>
        <section className='catReviw'>
            <figure className='catPhoto'>
                <img src={selectedCat.url} alt={selectedCat.name} />
            </figure>
            <div className='catInformSection'>
                <figcaption className='catName'>
                    <h1>{selectedCat.name}</h1>
                </figcaption>
                <table className='catInfo'>
                    <tr>
                        <td className='info'>Height</td>
                        <td>{selectedCat.height}</td>
                    </tr>
                    <tr>
                        <td className='info'>weight</td>
                        <td>{selectedCat.weight}</td>
                    </tr>
                    <tr>
                        <td className='info'>coat</td>
                        <td>{selectedCat.coat}</td>
                    </tr>
                    <tr>
                        <td className='info'>life</td>
                        <td>{selectedCat.life}</td>
                    </tr>
                </table>
                {/* <div className='catInfo'>
                    <p><span className='info'>Height:</span>{selectedCat.height}</p>
                    <p><span className='info'>weight:</span>{selectedCat.weight}</p>
                    <p><span className='info'>coat:</span>{selectedCat.coat}</p>
                    <p><span className='info'>life:</span>{selectedCat.life}</p>
                </div> */}
            </div>
        </section>
        <section className='catDescriotion'>
            <p className='desc'>{selectedCat.description}</p>
        </section>
       
       

    </div>
  )
}

export default Cat