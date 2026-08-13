import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import Troubleshooting from './pages/Troubleshooting/Troubleshooting';
import BrowserConfig from './pages/BrowserConfig/BrowserConfig';
import Utilities from './pages/Utilities/Utilities';
import Drivers from './pages/Drivers/Drivers';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch(page) {
      case 'drivers': return <Drivers />;
      case 'troubleshooting': return <Troubleshooting />;
      case 'browser': return <BrowserConfig />;
      case 'utilities': return <Utilities />;
      default: return <Home />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header setPage={setPage} />
      <main className="container" style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;