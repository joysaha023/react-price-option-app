import React from 'react';

const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'ProductDetails', path: '/products/:id' },
  ];
  

const Navber = () => {
    return (
        <div>
            <nav>
                <ul className='flex gap'>
                    {
                        routes.map(route => <li className='mr-10' key={route.id}><a href={`route.path`}>{route.name}</a></li>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navber;