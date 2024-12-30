import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import { Contact, Home, Projects, Skills } from './pages'
import data from './data/data.json'

interface Button {
  name: string;
  type: string; // TODO: to change
  section: string;
}

interface SocialMedia {
  link: string;
  icon: string;
}

interface Img {
  alt: string;
  src: string;
}

export interface Page {
  header: string;
  description: string;
  description_two?: string;
  buttons?: Button[];
  social_media?: SocialMedia[];
  img?: Img;
}

const pages = data.pages;

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home page={pages.home} />} />
      <Route path="/skills" element={<Skills page={pages.skills} cards={data.cards} />} />
      <Route path="/projects" element={<Projects page={pages.projects} />} />
      <Route path="/contact" element={<Contact page={pages.contact} />} />
    </Routes>
  </BrowserRouter>,
)
