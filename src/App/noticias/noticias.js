import React from 'react'
import Header from "./"
import {moneda} from '../../Pages/moneda.png'

const Noticias = () => {
  return (
    <div>
        <div>
          <Header />
        </div>
        <div className='container'>
          <h1>Titular de una noticia importante sobre cryptos</h1>
          <img src={moneda} alt="moneda de noticia" />
          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit ornare leo, duis felis fusce facilisis mauris vel turpis aenean primis, ullamcorper ad ridiculus in curae lacinia porttitor montes. Morbi mus lobortis hendrerit malesuada tortor eleifend magna, porta mauris a rutrum augue leo faucibus, venenatis mattis neque vivamus pulvinar nascetur. Tristique vestibulum sociosqu nam penatibus curabitur parturient, ultricies duis non et tellus, phasellus scelerisque cubilia aptent mauris.

          Natoque pretium iaculis hac hendrerit justo dis, vivamus ac mattis orci duis odio viverra, egestas condimentum mi ante 
          </p>
          
        </div>
    </div>
  )
}

export default Noticias
