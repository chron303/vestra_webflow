import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { ArrowRight } from 'lucide-react';

export const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 bg-stone-50">
      <div className="w-full max-w-sm mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="h-16 w-16 bg-stone-900 rounded-2xl mx-auto flex items-center justify-center mb-6">
            <span className="text-white text-2xl font-bold">S</span>
          </div>
          <h1 className="text-3xl font-semibold text-stone-900">
            {isLogin ? 'Welcome back' : 'Create account'}
          </h1>
          <p className="text-stone-500">
            {isLogin ? 'Enter your details to sign in.' : 'Start your style journey today.'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && <Input type="text" placeholder="Full Name" required />}
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          
          <Button type="submit" fullWidth className="flex justify-between items-center group mt-4">
             <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <div className="text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};