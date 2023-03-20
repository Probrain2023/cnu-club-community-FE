import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GrobalStyles';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Major from './components/major/Major';
import Club from './components/club/Club';
import Event from './components/event/Event';

function App() {
  return (
      <BrowserRouter>
      <GlobalStyles />

      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/club" element={<Club/>} />
        <Route path="/major" element={<Major/>} />
        <Route path="/event" element={<Event/>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;