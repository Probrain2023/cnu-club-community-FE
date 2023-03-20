import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GrobalStyles';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;