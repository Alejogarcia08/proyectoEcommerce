//rafce
import Nosotros from '../recursos/Nosotros.png';
const Home = () => {
    return (
        <>
            <div className="hero min-h-screen">
            <img src={Nosotros} className="hero-overlay  "/>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Nosotros</h1>
                        <p className="mb-5"> En Mayo de 1985 se comienza a escribir la historia de SANIBON. De la mano de Gustavo Bonavita acompañado por Liliana Irigoyen, abren el primer local con venta de repuestos de sanitarios y gas. En forma paulatina y con mucho esfuerzo SANIBON fue incorporando productos nuevos de primeras marcas, al mismo tiempo que comenzó a crecer en el interior de la provincia incorporando la venta y distribución de mercadería en localidades como Bolivar, Azul, Olavarria, Tandil, entre otras.
                <div /><br></br>
                Desde sus inicios, SANIBON siempre tuvo como objetivos primordiales el servicio, el buen precio y el cumplimiento de la palabra con los clientes.
                <div /><br></br>
                Hoy en día, SANIBON está situado en Rivadavia 161, Cañuelas. En su salón de ventas de 300 mts2, comercializando todo lo referente al rubro sanitario, gas, cloacas, filtros para piscinas, bombas, etc. Trabajando de forma directa con proveedores como FV, FERRUM, RHEEM, GRUPO DEMA, ROWA, IPS, INDUSTRIAS SALADILLO, ETERNIT entre otros.</p>
                    </div>
                </div>
            </div>

            
    
        </>

    )
}

export default Home