import React from 'react';
import { MOCK_BLOGS } from '../constants';
import { Clock } from 'lucide-react';

export const Explore: React.FC = () => {
  return (
    <div className="p-6 pb-24 space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-stone-900">Explore</h1>
      
      <div className="space-y-6">
        {MOCK_BLOGS.map((blog) => (
          <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 group cursor-pointer">
            <div className="aspect-video overflow-hidden">
               <img 
                 src={blog.image} 
                 alt={blog.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2 text-stone-400 text-xs font-medium">
                 <span className="bg-stone-100 px-2 py-1 rounded-md text-stone-600">Style Guide</span>
                 <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {blog.readTime}
                 </div>
              </div>
              <h3 className="text-lg font-bold text-stone-900 leading-snug">{blog.title}</h3>
              <p className="text-stone-500 text-sm line-clamp-2">{blog.description}</p>
              <button className="text-sm font-semibold text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 transition-all">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};