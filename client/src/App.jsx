import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Header from './components/Header.jsx';
import FooterComponent from './components/FooterComponent';
import Home from './pages/Home';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}