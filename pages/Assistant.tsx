import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Sparkles, Send, Loader2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const OPTIONS = [
  "What should I wear today?",
  "Help me mix an outfit",
  "I have an event coming up",
  "I want a bold look",
  "Find accessories for this"
];

export const Assistant: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [customInput, setCustomInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSelect = (opt: string) => {
    setSelectedOption(opt);
  };

  const handleSubmit = () => {
    if (!selectedOption && !customInput) return;
    setIsProcessing(true);
    
    // Simulate API delay
    setTimeout(() => {
        setIsProcessing(false);
        setResponse("Based on your neutral palette preference and today's weather, I suggest pairing your beige oversized blazer with the wide-leg trousers. Add the minimal white sneakers for a relaxed yet chic look.");
    }, 2000);
  };

  const reset = () => {
    setSelectedOption(null);
    setResponse(null);
    setCustomInput('');
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <div className="sticky top-0 bg-stone-50 z-10 p-6 pb-2 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-stone-500 hover:text-stone-900">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
          <Sparkles size={18} className="text-stone-900" />
          Style Assistant
        </h1>
      </div>

      <div className="flex-1 p-6 pb-24 overflow-y-auto">
        {!response ? (
            <div className="space-y-8 animate-fade-in">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-stone-900">How can I help you?</h2>
                    <p className="text-stone-500">Choose an option or type your own.</p>
                </div>

                <div className="flex flex-col gap-3">
                    {OPTIONS.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => handleSelect(opt)}
                            className={`p-4 rounded-2xl text-left transition-all text-sm font-medium ${
                                selectedOption === opt
                                    ? 'bg-stone-900 text-white shadow-lg'
                                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                            }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                <div className={`transition-all duration-300 ${selectedOption ? 'opacity-100' : 'opacity-50'}`}>
                   <div className="relative">
                        <Input 
                            placeholder="Add more details... (e.g. 'It's for a dinner date')" 
                            value={customInput}
                            onChange={(e) => setCustomInput(e.target.value)}
                            className="pr-12"
                        />
                        <button 
                            onClick={handleSubmit}
                            disabled={!selectedOption && !customInput}
                            className="absolute right-2 top-2 bottom-2 aspect-square bg-stone-900 rounded-xl text-white flex items-center justify-center disabled:opacity-50"
                        >
                           {isProcessing ? <Loader2 size={18} className="animate-spin"/> : <Send size={18} />}
                        </button>
                   </div>
                </div>
            </div>
        ) : (
            <div className="flex flex-col h-full animate-fade-in">
                {/* Simulated Response UI */}
                <div className="flex gap-3 mb-6">
                     <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-white shrink-0">
                        <Sparkles size={14} />
                     </div>
                     <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-stone-100 text-stone-800 leading-relaxed">
                        {response}
                     </div>
                </div>

                {/* Simulated Generated Outfit Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="aspect-[3/4] bg-stone-200 rounded-xl overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" className="w-full h-full object-cover" />
                        <span className="absolute bottom-2 left-2 text-[10px] bg-black/50 text-white px-2 py-1 rounded-full backdrop-blur-md">Blazer</span>
                    </div>
                    <div className="aspect-[3/4] bg-stone-200 rounded-xl overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1509631179647-b849389274e6?w=400&q=80" className="w-full h-full object-cover" />
                        <span className="absolute bottom-2 left-2 text-[10px] bg-black/50 text-white px-2 py-1 rounded-full backdrop-blur-md">Trousers</span>
                    </div>
                </div>

                <Button variant="outline" onClick={reset} className="mt-auto">Start Over</Button>
            </div>
        )}
      </div>
    </div>
  );
};