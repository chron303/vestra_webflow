import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar, Layers, ChevronDown } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-6 space-y-6 pb-24 animate-fade-in">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Good morning</h1>
          <p className="text-stone-500 text-sm">Here's your style forecast.</p>
        </div>
        <div className="h-10 w-10 bg-stone-200 rounded-full overflow-hidden">
          <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
        </div>
      </div>

      {/* Hero Outfit */}
      <div className="relative w-full aspect-[4/5] bg-stone-200 rounded-[2rem] overflow-hidden shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=600&q=80" 
          alt="Outfit of the day" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white">
          <div className="flex justify-between items-end">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium mb-2">Today's Pick</span>
              <h2 className="text-xl font-semibold">Casual Friday Luxe</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Details Accordion */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="flex w-full justify-between items-center text-stone-900 font-medium"
        >
          <span>Why this outfit?</span>
          <ChevronDown size={18} className={`transition-transform ${showDetails ? 'rotate-180' : ''}`} />
        </button>
        {showDetails && (
          <p className="mt-3 text-sm text-stone-500 leading-relaxed border-t border-stone-100 pt-3">
            Based on the weather (Sunny, 72°F) and your preference for "Minimal" style, this outfit balances comfort with structure. The colors align with your neutral palette preference.
          </p>
        )}
      </div>

      {/* Action Grid */}
      <div className="grid grid-cols-2 gap-4 h-48">
        <div className="flex flex-col gap-4 h-full">
           <button className="flex-1 bg-stone-100 rounded-2xl p-4 flex flex-col justify-between items-start hover:bg-stone-200 transition-colors">
              <div className="p-2 bg-white rounded-full text-stone-900">
                <Layers size={18} />
              </div>
              <span className="font-medium text-sm text-stone-900">Wardrobe</span>
           </button>
           <button className="flex-1 bg-stone-900 rounded-2xl p-4 flex flex-col justify-between items-start text-white shadow-lg shadow-stone-200 hover:bg-stone-800 transition-colors">
              <div className="p-2 bg-white/20 rounded-full">
                <Sparkles size={18} />
              </div>
              <span className="font-medium text-sm">Mix Outfit</span>
           </button>
        </div>
        
        <button className="bg-white border border-stone-100 rounded-2xl p-4 flex flex-col justify-between h-full hover:border-stone-300 transition-colors">
          <div className="flex justify-between w-full">
            <div className="p-2 bg-stone-50 rounded-full text-stone-900">
               <Calendar size={18} />
            </div>
            <span className="text-xs font-bold text-stone-300">WEEKLY</span>
          </div>
          <div className="space-y-2 mt-2 w-full">
             <div className="flex justify-between items-center text-xs">
                <span className="text-stone-400">Mon</span>
                <span className="w-2 h-2 rounded-full bg-stone-900"></span>
             </div>
             <div className="flex justify-between items-center text-xs">
                <span className="text-stone-400">Tue</span>
                <span className="w-2 h-2 rounded-full bg-stone-900"></span>
             </div>
             <div className="flex justify-between items-center text-xs">
                <span className="text-stone-400">Wed</span>
                <span className="w-2 h-2 rounded-full bg-stone-300"></span>
             </div>
          </div>
          <span className="font-medium text-sm text-stone-900 mt-2">Planner</span>
        </button>
      </div>

      {/* Assistant CTA */}
      <button 
        onClick={() => navigate('/assistant')}
        className="w-full bg-gradient-to-r from-stone-800 to-stone-900 text-white p-1 rounded-[2rem] shadow-xl"
      >
        <div className="bg-transparent border border-white/20 rounded-[1.8rem] px-6 py-5 flex items-center justify-between">
          <div className="flex flex-col items-start">
             <span className="text-xs font-medium text-stone-300 uppercase tracking-wider mb-1">AI Stylist</span>
             <span className="text-lg font-semibold">Open Style Assistant</span>
          </div>
          <div className="bg-white text-stone-900 p-3 rounded-full">
             <Sparkles size={20} />
          </div>
        </div>
      </button>
    </div>
  );
};