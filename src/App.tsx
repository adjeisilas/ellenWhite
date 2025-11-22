import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;