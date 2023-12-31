import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigation = [
        { name: 'New Translation', href: '/newtranslation', current: false },
        { name: 'About', href: '/about', current: false }

    ];

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white font-bold text-xl">SUMM AI</span>
                        </div>
                    </div>
                    <div className="flex">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
