import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Auth } from './pages/Auth';
import { Onboarding } from './pages/Onboarding';
import { Home } from './pages/Home';
import { Assistant } from './pages/Assistant';
import { Explore } from './pages/Explore';
import { Search } from './pages/Search';
import { Profile } from './pages/Profile';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/" element={<Home />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          {/* Default redirect to Auth for demo purposes */}
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;