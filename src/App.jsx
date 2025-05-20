import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Herosection from './components/Herosection';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Review from './components/Review';
import Service from './components/Service';
import AppointmentModal from './components/AppointmentModal'; // Adjust path as needed

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={handleOpenModal} /> {/* Pass modal opener to Navbar */}
      <Home />
      <About />
      <Service />
      <Herosection />
      <Review />
      <Gallery />
      <Footer />
      <AppointmentModal open={modalOpen} onClose={handleCloseModal} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 1500 }} // Ensure toasts appear above modal
      />
    </>
  );
}