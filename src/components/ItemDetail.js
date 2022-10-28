import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/cartContext'

const ItemDetail = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const { addToCart } = useCart()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'products')
        const docRef = doc(productsCollection, id)
        getDoc(docRef).then(res => {
            console.log(res.data());
            setProduct(res.data())
        })
    }

    const addHandler = () => {
        addToCart(product)
    }

    return (
        //<div>
        //<div>{product.name}</div>
        //<div>{product.price}</div>
        //<div>{product.description}</div>
        //<img src={product.img} height={200} />
        //<button onClick={addHandler}>Agregar al carrito</button>
        //</div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={product.img} /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-outline btn-success" onClick={addHandler}>Agregar al Carrito</button>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail