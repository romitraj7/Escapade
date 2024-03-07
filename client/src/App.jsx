import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import Home from './pages/Home';
import Events from './pages/Events.jsx';
import EventDetails from './pages/EventDetails/EventDetails.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/eventdetails' element={<EventDetails />} />

      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}