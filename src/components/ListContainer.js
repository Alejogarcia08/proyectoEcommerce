import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ id, name, price, img }) => {
    return (

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 xl:gap-x-8">
                <div className="group relative">

                    <Link to={`/ItemDetail/${id}`}>
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img src={img} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>

                        <div className="mt-4 flex justify-between">
                            <h3 className="text-sm text-gray-700">{name}</h3>
                            <p className="text-sm font-medium text-gray-900">${price}</p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>


    )
}

const ListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'products')
        getDocs(productsCollection).then(res => {
            const productsData = res.docs.map(d => ({ id: d.id, ...d.data() }))
            console.log(productsData);
            setProducts(productsData)
            setLoading(false)
        })
    }

    return (
        <div>
            {loading ? <h1> Cargando... </h1>
                :
                products.map(p => <Card key={p.id} {...p} />)
            }
        </div>
    )
}

export default ListContainer