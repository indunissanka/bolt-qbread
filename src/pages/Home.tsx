import React from 'react';
import { Cake, Star } from 'lucide-react';

export function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[500px] object-cover"
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Bakery background"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Sweet Home Bakery
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover our handcrafted pastries and cakes made with love and the finest ingredients.
        </p>
        <div className="mt-10">
          <a
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
          >
            <Cake className="mr-2 h-5 w-5" />
            Browse Our Products
          </a>
        </div>
      </div>

      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Best Sellers
            </h2>
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={`https://images.unsplash.com/photo-156${item}234567-abcdef${item}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt="Product"
                  />
                  <div className="p-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">Delicious Pastry {item}</h3>
                    <p className="mt-2 text-gray-500">Fresh from our oven to your table.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
