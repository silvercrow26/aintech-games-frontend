import React from 'react'
import residentevil from '../../assets/portadaresidentevil.png'
import hogwartslegacy from '../../assets/portadahogwartslegacy.png'
import redfall from '../../assets/portadaredfall.png'

export const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide mb-3" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a href="https://www.instant-gaming.com/es/13644-comprar-steam-resident-evil-4-pc-juego-steam-latin-america/?igr=aintechonline" target="_blank" to="https://www.instant-gaming.com/es/13644-comprar-steam-resident-evil-4-pc-juego-steam-latin-america/?igr=aintechonline">
      <img src={residentevil} className="d-block w-100" alt="Compra resident evil 4 en descuento" />
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://www.instant-gaming.com/es/9019-comprar-redfall-pc-juego-steam/?igr=aintechonline" target="_blank">
      <img src={redfall} className="d-block w-100" alt="Compra redfall en descuento" />
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://www.instant-gaming.com/es/13495-comprar-steam-hogwarts-legacy-pc-juego-steam-latin-america/?igr=aintechonline" target="_blank"> 
      <img src={hogwartslegacy} className="d-block w-100" alt="compra hogwarts legacy en descuento" />
        </a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
