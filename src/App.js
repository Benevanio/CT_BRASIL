import './index.css';
import { Routes, Route } from "react-router-dom";
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';

import Home from './routes/Home';

function App() {
 
  return (
    
   <div className="App">
     <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    
   </div>
  );
}

export default App;
