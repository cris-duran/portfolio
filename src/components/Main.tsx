import { useState } from 'react';
import Home from '@views/Home';
import { Route, Routes } from 'react-router-dom';
import About from '@views/About';
import Projects from '@views/Projects';
import Experience from '@views/Experience';
import Contact from '@views/Contact';

function Main() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default Main;
