import React from 'react'
import deadislandads from '../../assets/deadislandads.png'
import jediads from '../../assets/jediads.png'
export const SliderAds = () => {
    return (
        <div className="sliderAds">
            <img  src={jediads} alt="Jedi survivor Oferta"   />
            <img  src={deadislandads} alt="Dead island Oferta"   />
        </div>
    )
}
