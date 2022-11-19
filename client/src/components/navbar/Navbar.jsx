import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";


const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <header>
            <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-4'>
                <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                    <div className='w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start'>
                        <NavLink
                            className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
                            to='/'
                        >
                            Registration
                        </NavLink>
                    </div>
                    <div
                        className='lg:flex flex-grow items-center'
                        id='example-navbar-warning'
                    >
                        <ul className='flex flex-col lg:flex-row list-none ml-auto'>
                            <li className='nav-item'>
                                {!isAuth && <NavLink
                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                    to='/login'
                                >
                                    Log-In
                                </NavLink>}
                            </li>
                            <li className='nav-item'>
                                {!isAuth && <NavLink
                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                    to='/registration'
                                >
                                    Registeration
                                </NavLink>}
                            </li>
                            <li className='nav-item'>
                                {isAuth && <div
                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer'
                                    onClick={() => dispatch(logout()) }
                                >
                                    Exit
                                </div>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
