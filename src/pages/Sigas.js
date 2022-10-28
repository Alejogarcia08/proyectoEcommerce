const products = [
    {
        id: 1,
        name: 'Codo Normal',
        href: './CodoNormalSigas',
        price: '$480',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/b7dedc592d1ab7d824ae55ff814e6c5ebaa70cac.jpeg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Union Normal',
        href: '#',
        price: '$350',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/972732e0fdf87ef2ee6a50dcf8a2d8855bdd4a6f.jpeg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Sobre Paso',
        href: '#',
        price: '$890',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/e5f70e3a179cd0cbcbe26555992e2e821ac5d592.jpeg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Caño',
        href: '#',
        price: '$950',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/18653dbb75cfa042b0f9d834d87a1efbdefcd4df.jpeg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',

    },

    // More products...
]

export default function Sigas() {
    return (

        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Productos</h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

