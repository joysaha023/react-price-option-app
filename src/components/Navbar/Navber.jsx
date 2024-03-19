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
                <ul className='md:flex absolute bg-slate-200 px-6 shadow-lg'>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navber;