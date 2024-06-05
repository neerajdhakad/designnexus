import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import "./styles/animated-on3step.css";
import "./styles/main.scss";

import Preloader from "./components/Preloader";
import NavigationMenu from "./components/Nav";
import ScrollToTopBtn from './components/ScrollToTop';
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/works";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Case from "./pages/detailCase";
import Case1 from "./pages/detailCase1";
import Case2 from "./pages/detailCase2";
import Case3 from "./pages/detailCase3";
import Newsdetail from "./pages/detailNews";


function App() {
  const [loading, setLoading] = useState(true);
  const [navBackground, setNavBack] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={(state) => setNavBack(state)}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/detailcase"
              element={<Case setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/detailcase1"
              element={<Case1 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/detailcase2"
              element={<Case2 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/detailcase3"
              element={<Case3 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/detailNews"
              element={<Newsdetail setNavBackground={(state) => setNavBack(state)} />}
            />
          </Routes>
          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  );
}

export default App;
 
 