import React from 'react'
import './CardCss.css'

function InfoCards({ info }) {
    const { id, title, img, description, price } = info
    return (
        <>
            <div className='cards'>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
                <h2>{price}</h2>
                <button>Continue</button>
            </div>
        </>
    )
}

export default InfoCards
