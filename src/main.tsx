// import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import Skills from './pages/Skills.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
)
