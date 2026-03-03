import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Founders from './pages/Founders';
import Inquire from './pages/Inquire';
import Network from './pages/Network';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'founders':
        return <Founders />;
      case 'network':
        return <Network />;
      case 'inquire':
        return <Inquire />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
