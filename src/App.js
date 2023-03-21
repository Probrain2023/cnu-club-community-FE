import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GrobalStyles';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Major from './components/major/Major';
import Club from './components/club/Club';
import Event from './components/event/Event';
import Probrain from './components/club/Probrain';
import Spg from './components/club/Spg';
import Ana from './components/club/Ana';
import Admin from './components/club/Admin';
import Argos from './components/club/Argos';
import Motion from './components/club/Motion';
import Daiv from './components/club/Daiv';




function App() {
  return (
      <BrowserRouter>
      <GlobalStyles />

      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/club" element={<Club/>} />
        <Route path="/club/probrain" element={<Probrain/>} />
        <Route path="/club/spg" element={<Spg/>} />
        <Route path="/club/ana" element={<Ana/>} />
        <Route path="/club/motion" element={<Motion/>} />
        <Route path="/club/admin" element={<Admin/>} />
        <Route path="/club/daiv" element={<Daiv/>} />
        <Route path="/club/argos" element={<Argos/>} />
        <Route path="/major" element={<Major/>} />
        <Route path="/event" element={<Event/>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;