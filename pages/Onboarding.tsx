import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { ChevronLeft, Check, Ruler } from 'lucide-react';
import { STYLES, COLORS, CONSTRAINTS } from '../constants';
import { BodyType } from '../types';

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: '',
    height: '',
    bodyType: '' as BodyType | '',
    styles: [] as string[],
    colors: [] as string[],
    avoidColors: [] as string[],
    constraints: [] as string[],
  });

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    else navigate('/');
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleSelection = (key: 'styles' | 'colors' | 'avoidColors' | 'constraints', value: string) => {
    setFormData(prev => {
      const current = prev[key];
      const exists = current.includes(value);
      return {
        ...prev,
        [key]: exists ? current.filter(item => item !== value) : [...current, value]
      };
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pt-4">
        {step > 1 ? (
          <button onClick={prevStep} className="p-2 -ml-2 text-stone-500 hover:text-stone-900">
            <ChevronLeft size={24} />
          </button>
        ) : <div className="w-10" />}
        
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(i => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= step ? 'w-8 bg-stone-900' : 'w-2 bg-stone-200'
              }`} 
            />
          ))}
        </div>
        <div className="w-10" />
      </div>

      <div className="flex-1 flex flex-col max-w-md mx-auto w-full">
        {/* Step 1: Basic Details */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-stone-900">Tell us about you</h2>
              <p className="text-stone-500">This helps us tailor the fit.</p>
            </div>
            
            <div className="space-y-4">
               <div className="grid grid-cols-2 gap-3">
                 {['Female', 'Male', 'Non-binary'].map((g) => (
                   <button
                    key={g}
                    onClick={() => setFormData({...formData, gender: g})}
                    className={`p-4 rounded-2xl border text-sm font-medium transition-all ${
                      formData.gender === g 
                        ? 'bg-stone-900 text-white border-stone-900' 
                        : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                    }`}
                   >
                     {g}
                   </button>
                 ))}
               </div>

               <Input 
                 placeholder="Height (e.g., 5'7 or 170cm)" 
                 value={formData.height} 
                 onChange={(e) => setFormData({...formData, height: e.target.value})}
               />

               <div className="space-y-2">
                 <label className="text-sm font-medium text-stone-600 ml-1">Body Type</label>
                 <div className="grid grid-cols-5 gap-2">
                   {['hourglass', 'rectangular', 'inverted-triangle', 'pear', 'apple'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFormData({...formData, bodyType: type as BodyType})}
                        className={`aspect-square rounded-xl border flex items-center justify-center transition-all ${
                          formData.bodyType === type
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white text-stone-400 border-stone-200'
                        }`}
                        title={type}
                      >
                        <Ruler size={20} />
                      </button>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        )}

        {/* Step 2: Styles */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
             <div className="space-y-2">
              <h2 className="text-2xl font-bold text-stone-900">Your Vibe</h2>
              <p className="text-stone-500">Select styles that resonate with you.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => toggleSelection('styles', style.id)}
                  className="relative group rounded-2xl overflow-hidden aspect-[4/3] isolate"
                >
                  <img src={style.image} alt={style.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className={`absolute inset-0 transition-colors ${
                    formData.styles.includes(style.id) 
                      ? 'bg-black/40' 
                      : 'bg-black/10 group-hover:bg-black/30'
                  }`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-medium text-lg tracking-wide">{style.label}</span>
                    {formData.styles.includes(style.id) && (
                      <div className="absolute top-3 right-3 bg-white text-stone-900 rounded-full p-1">
                        <Check size={12} strokeWidth={4} />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Colors */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
             <div className="space-y-2">
              <h2 className="text-2xl font-bold text-stone-900">Color Palette</h2>
              <p className="text-stone-500">Select colors you love to wear.</p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {COLORS.map((color) => {
                const isSelected = formData.colors.includes(color.id);
                return (
                  <button
                    key={color.id}
                    onClick={() => toggleSelection('colors', color.id)}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div 
                      className={`w-14 h-14 rounded-full shadow-sm border transition-all duration-200 flex items-center justify-center ${
                        isSelected ? 'ring-2 ring-offset-2 ring-stone-900 scale-110' : 'border-stone-200'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {isSelected && (
                         <Check size={16} className={color.id === 'white' || color.id === 'beige' || color.id === 'pastel-blue' ? 'text-stone-900' : 'text-white'} />
                      )}
                    </div>
                    <span className="text-xs text-stone-600 font-medium">{color.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Step 4: Constraints */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
             <div className="space-y-2">
              <h2 className="text-2xl font-bold text-stone-900">Final Touches</h2>
              <p className="text-stone-500">Any specific preferences or limits?</p>
            </div>

            <div className="space-y-3">
              {CONSTRAINTS.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleSelection('constraints', item)}
                  className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all ${
                    formData.constraints.includes(item)
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-700 border border-stone-200'
                  }`}
                >
                  <span className="font-medium">{item}</span>
                  {formData.constraints.includes(item) && <Check size={18} />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-8">
        <Button onClick={nextStep} fullWidth>
          {step === 4 ? 'Finish Setup' : 'Continue'}
        </Button>
      </div>
    </div>
  );
};