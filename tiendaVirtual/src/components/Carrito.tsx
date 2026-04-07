import  { useContext } from 'react';
import {cartContext  } from '../context/ContexrCart';

const Carrito = () => {
  const datos = useContext(cartContext);
  


    return (
     <div>
       <h1>Carrito de compras {datos.totalItems}</h1>

        {datos.items.length===0?(<p>El carrito esta vacio</p>):
          (datos.items.map((item)=>
            (<div key = {item.product.id_producto}> 
              <img src={`/img/${item.product.imagenURL}`} alt="" />
                <h3>{item.product.nombre}</h3> 
                  <p>Precio: {item.product.precio}</p> 
                  <button>+</button>
                    <p>{item.quantity}</p></div>)))}
                  <button>-</button>
              <p>Total de productos{datos.totalItems}</p>
              <p>Total a pagar {datos.totalPrice}</p>
       </div>

  )
}

export default Carrito;


