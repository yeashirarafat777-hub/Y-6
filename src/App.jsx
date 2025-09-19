import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ExperiencesPage from './pages/ExperiencesPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PropertyDetailPage from './pages/PropertyDetailPage.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/rooms/:id" element={<PropertyDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;