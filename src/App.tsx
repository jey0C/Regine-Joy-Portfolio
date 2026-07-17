import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PlaylistPage from './pages/PlaylistPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ConditionalFooter() {
  const { pathname } = useLocation();
  if (pathname === '/contact' || pathname === '/playlist') return null;
  return <Footer />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-normal min-h-screen selection:bg-brand-pink selection:text-brand-dark flex flex-col bg-brand-cream overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/playlist" element={<PlaylistPage />} />
          </Routes>
        </main>
        <ConditionalFooter />
      </div>
    </BrowserRouter>
  );
}
