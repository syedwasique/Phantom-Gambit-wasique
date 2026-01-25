import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

function Layout() {
  return (
    <div className="main-layout">
      <Home />
      <About />
      <Contact />
    
    </div>
  );
}

export default Layout;