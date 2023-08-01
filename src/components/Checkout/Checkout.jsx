import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'


export const Checkout = () => {
    //Orden de compra:
    //buyer={nombre, email, telefono}
    //items=[   {id:1,nombre:"Remera adidas",precio:3000,cant:5},
    //          {id:4,nombre:"Pantalon nike",precio:5000,cant:3},
    //          {id:7,nombre:"Zapatillas Fila",precio:10000,cant:1}]
    //total= sumatoria precio*cantidad
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: ""
    })
    const { Nombre, Email, Telefono } = buyer

    // const [item, setItem] = useState([{ id: 1, nombre: "Remera adidas", precio: 3000, cant: 5 },
    // { id: 4, nombre: "Pantalon nike", precio: 5000, cant: 3 },
    // { id: 7, nombre: "Zapatillas Fila", precio: 10000, cant: 1 }])

    const { cart } = useContext(CartContext)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0)
        const dia = new Date()
        const data = { buyer, cart, total, dia }
        generateOrder(data)
    }

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders")
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
    }

    return (
        <>
            <h1>Formulario</h1>
            <hr />
            {!orderId && <form onSubmit={handleSubmit}>
                <input type="text"
                    name="Nombre"
                    placeholder='Nombre'
                    value={Nombre}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="email"
                    name="Email"
                    placeholder='Email'
                    value={Email}
                    onChange={handleInputChange}
                />
                <br /><br />
                <input type="number"
                    name="Telefono"
                    placeholder='Telefono'
                    value={Telefono}
                    onChange={handleInputChange}
                />
                <br /><br />
                <input type="submit" value="Confirmar Compra" />
            </form>
            }
            {orderId && <>
                <h1>Felicitaciones tu compra se realizo con exito</h1>
                <h3>Tu ID de Compra es: {orderId}</h3>
            </>}
        </>
    )
}
