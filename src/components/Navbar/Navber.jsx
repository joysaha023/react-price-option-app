import React, { useState } from 'react';
import Link from '../Link/Link';
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'ProductDetails', path: '/products/:id' },
  ];
  

const Navber = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav>
            
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    {
                        open === true ? <RxCross1 className='text-2xl'/> : <FaBars className='text-2xl' />
                    }
                    
                    
                </div>
                <ul className={`md:flex md:justify-center duration-1000 absolute md:static ${open ? 'top-16' : '-top-60'} rounded-lg bg-slate-200 md:bg-white px-6 shadow-lg md:shadow-none`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navber;