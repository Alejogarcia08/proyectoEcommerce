
const callouts = [
    {
        name: 'Aqua Sistem',
        description: 'El sistema líder para conducción de agua.',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/d15e4ddadc1088a2d927b577a93d967a46c986af.png',
        imageAlt: 'El sistema líder para conducción de agua en Polipropileno Copolímero Random',
        href: '/AquaSistem',
    },
    {
        name: 'Sigas',
        description: 'Triple seguridad en la conducción de gas',
        imageSrc: 'http://grupodema.com.ar/uploads/documents/074dca2aedab1605449ad75cba9237bcdb1b8318.png',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '/Sigas',
    },
    {
       /*  name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#', */
    },
]

export default function Tienda() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Categorias</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
