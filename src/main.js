import React, { useEffect , useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from './components/layout';
import HomePage from './pages/home';
import Product from './pages/product';
import NoPage from './pages/nopage';
import Papers from "./pages/papers";
import About from "./pages/company";
import Contact from "./pages/contact";
import ContactForm from "./pages/contactForm";
import Register from "./pages/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}  />
            <Route path="products" element={<Product />}  />
            <Route path="papers" element={<Papers />} />
            <Route path="company" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact-form" element={<ContactForm />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
