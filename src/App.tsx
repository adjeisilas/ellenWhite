import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;