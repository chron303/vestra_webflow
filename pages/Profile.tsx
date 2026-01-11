import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Settings, LogOut, RefreshCcw, Heart, Shield } from 'lucide-react';

export const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/auth');
  };

  const handleReset = () => {
    navigate('/onboarding');
  };

  const menuItems = [
    { icon: Heart, label: 'Saved Outfits', badge: '12' },
    { icon: Shield, label: 'Privacy & Security' },
    { icon: Settings, label: 'Preferences' },
  ];

  return (
    <div className="p-6 pb-24 space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-stone-900">Profile</h1>
        <button className="text-stone-400 hover:text-stone-900">
          <Settings size={24} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 py-6">
        <div className="w-24 h-24 rounded-full bg-stone-200 overflow-hidden ring-4 ring-white shadow-lg">
           <img src="https://ui-avatars.com/api/?name=User&background=random&size=128" alt="Profile" />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-stone-900">Style Enthusiast</h2>
          <p className="text-stone-500 text-sm">Joined October 2023</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-3xl p-2 shadow-sm border border-stone-100">
          {menuItems.map((item, idx) => (
            <button 
              key={item.label}
              className={`w-full flex items-center justify-between p-4 hover:bg-stone-50 transition-colors ${idx !== menuItems.length - 1 ? 'border-b border-stone-50' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-stone-100 p-2 rounded-xl text-stone-600">
                  <item.icon size={20} />
                </div>
                <span className="font-medium text-stone-700">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-stone-900 text-white text-xs font-bold px-2 py-1 rounded-full">{item.badge}</span>
              )}
            </button>
          ))}
        </div>

        <div className="space-y-3 pt-4">
          <Button variant="secondary" fullWidth onClick={handleReset} className="flex items-center justify-center gap-2">
            <RefreshCcw size={18} />
            Reset Onboarding
          </Button>
          
          <Button variant="ghost" fullWidth onClick={handleLogout} className="text-red-500 hover:text-red-600 hover:bg-red-50 flex items-center justify-center gap-2">
            <LogOut size={18} />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};