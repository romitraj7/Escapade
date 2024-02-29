import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import Home from './pages/Home';
import Events from './pages/Events.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}