import './CartWidget'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Sanibon</a>
                </div>
                
                <ul className="menu menu-horizontal p-0 ">
                    {/* <li><a>Teinda</a></li> */}
                    <li tabIndex={0}>
                        <a>
                            Tienda
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><a>AquaSistem</a></li>
                            <li><a>Sigas</a></li>
                        </ul>
                    </li>
                    {/* <li><a>Item 3</a></li> */}
                </ul>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>



                        <CartWidget></CartWidget>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar