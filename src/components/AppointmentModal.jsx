import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AppointmentModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data for now; replace with API call or other logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose(); // Close modal
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="appointment-modal-title"
      aria-describedby="appointment-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: 'gray.900', // Matches site’s dark theme
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          border: '2px solid transparent',
          borderImage: 'linear-gradient(to right, #b5852a, #d6b56c, #f0d585, #e6c565, #b5852a) 1',
        }}
        className="gnr-gold-border" // Apply gold gradient border
      >
        <h2
          id="appointment-modal-title"
          className="text-2xl font-semibold text-white font-outfit mb-4 gnr-gold-text"
        >
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff', borderColor: '#fff' },
              sx: {
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#eed37a' },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff', borderColor: '#fff' },
              sx: {
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#eed37a' },
              },
            }}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            variant="outlined"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff', borderColor: '#fff' },
              sx: {
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#eed37a' },
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff', borderColor: '#fff' },
              sx: {
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#eed37a' },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #b5852a, #d6b56c, #f0d585, #e6c565, #b5852a)',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(to right, #a57724, #c3a35f, #e0c577, #d4b358, #a57724)',
              },
            }}
            className="gnr-gold-border"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AppointmentModal;