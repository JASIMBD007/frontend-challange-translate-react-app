import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TranslationForm from './components/TranslationForm/TranslationForm';
import About from './components/About/About';

function App () {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/about" element={<About />} />
          <Route path="/" element={<TranslationForm />} />
          <Route path="/newtranslation" element={<TranslationForm />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
