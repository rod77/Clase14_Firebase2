import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { cart } = useContext(CartContext)
    console.log("Carrito desde cart:", cart)
    return (

        <>
            <h1>Carrito</h1>
            <hr />
            {
                cart.length == 0 ? <h1>Carrito Vacio</h1>
                    : <div>
                        {cart.map(unItem => <div key={unItem.id}>
                            <h3>Nombre: {unItem.name}</h3>
                            <img src={unItem.img} />
                            <p>cantidad: {unItem.cant}</p>
                            <p>precio: {unItem.price}</p>
                            <hr /><br />
                        </div>)}
                    </div>
            }


            <Link to='/checkout'>
                <button>Finalizar Compra</button>
            </Link>

        </>
    )
}
