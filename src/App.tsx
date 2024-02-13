import { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import About from './Pages/About';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Offer from './Pages/Offer';
import Projects from './Pages/Projects';

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <Fragment>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/projekty' element={<Projects />} />
          <Route path='/oferta' element={<Offer />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/o-nas' element={<About />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
