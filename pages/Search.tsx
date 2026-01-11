import React, { useState } from 'react';
import { Input } from '../components/Input';
import { MOCK_PRODUCTS } from '../constants';
import { Search as SearchIcon, ExternalLink, SlidersHorizontal } from 'lucide-react';

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 pb-24 space-y-6 animate-fade-in">
      <div className="sticky top-0 bg-stone-50/80 backdrop-blur-md z-10 pb-4">
        <h1 className="text-2xl font-bold text-stone-900 mb-4">Find Pieces</h1>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <Input 
              placeholder="Search clothes, brands..." 
              className="pl-11 py-3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-stone-200 text-stone-800 p-3 rounded-2xl hover:bg-stone-300 transition-colors">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-3 rounded-2xl border border-stone-100 shadow-sm flex flex-col gap-3 group">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply transition-transform group-hover:scale-105" />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase">
                {product.platform}
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-xs text-stone-500 font-medium">{product.category}</p>
              <h3 className="text-sm font-semibold text-stone-900 line-clamp-1">{product.name}</h3>
              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-stone-900">{product.price}</span>
                <button className="p-2 bg-stone-900 text-white rounded-full hover:bg-stone-700 transition-colors">
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
           <div className="col-span-2 text-center py-10 text-stone-400">
             No products found.
           </div>
        )}
      </div>
    </div>
  );
};