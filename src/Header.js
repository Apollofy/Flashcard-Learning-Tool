import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-white">Learning</h1>
                    <span className="text-2xl font-bold text-red-600"> Tool</span>
                </div>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link 
                                to="/dashboard" 
                                className="text-xl font-bold text-amber-50 hover:text-red-400 transition duration-300"
                            >
                                Internal Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/cards" 
                                className="text-xl font-bold text-amber-50 hover:text-red-400 transition duration-300"
                            >
                                Cards
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
