import { Route, Routes } from 'react-router-dom';

// PAGES
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpage from './pages/SignUpage';

// components
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
