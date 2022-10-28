/* const aquaSistem = () => {
    return (
        <>
        <h1>holis</h1>
        </>
    )
}
export default aquaSistem */

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: 'Codo Normal',
        href: '#',
        price: '$480',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/a1c1ba42a657f210d455058e1c8bcd905b38cca2.jpeg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Caño',
        href: '#',
        price: '$950',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/20724b3b7bfa6f52d3e0708d9b6ffc201fd1608a.jpeg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Curva a 90',
        href: '#',
        price: '$890',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/84178c3ff150dd4df227863b46789f957c5cd485.jpeg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Union Normal',
        href: '#',
        price: '$350',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/01332252c26b3d67f2856abc672e0e675af7d284.jpeg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function AquaSistem() {
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
                            <div className="card-actions justify-start">
                            <button className="btn btn-wide">Agregar al Carrito</button>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
