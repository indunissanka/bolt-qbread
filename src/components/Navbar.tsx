import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Settings } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Navbar() {
  const { isAdmin } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShoppingBag className="h-8 w-8 text-pink-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Sweet Home Bakery</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              Products
            </Link>
            {isAdmin && (
              <div className="relative ml-4 group">
                <button className="flex items-center focus:outline-none">
                  <Settings className="h-6 w-6 text-gray-600" />
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                  <Link
                    to="/admin/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Manage Products
                  </Link>
                  <Link
                    to="/admin/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Manage Orders
                  </Link>
                </div>
              </div>
            )}
            <Link to="/profile" className="ml-4">
              <User className="h-6 w-6 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
