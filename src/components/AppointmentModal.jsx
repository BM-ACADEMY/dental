import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_APP_API_URL || 'https://your-default-api.com';

const AppointmentModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

 const validateField = (name, value) => {
  switch (name) {
    case 'name':
      return value.trim() ? '' : 'Name is required';
    case 'email':
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ? ''
        : 'Invalid email format';
    case 'phone':
      return /^\d{10}$/.test(value)
        ? ''
        : 'Phone number must be 10 digits';
    case 'message':
      return value.trim() ? '' : 'Message is required';
    default:
      return '';
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    try {
      console.log('Fetching:', `${API_URL}/send-email`);
      console.log('Request Body:', JSON.stringify({
        fullName: formData.name.trim(),
        email: formData.email,
        contactNumber: formData.phone,
        message: formData.message.trim(),
        companyName: '',
      }));

      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email,
          contactNumber: formData.phone,
          message: formData.message.trim(),
          companyName: '',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      toast.success('Appointment sent — check inbox/spam.', {
        position: 'top-right',
        autoClose: 3000,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '', message: '' });
      onClose();
    } catch (error) {
      console.error('Submission Error:', error.message);
      toast.error(error.message || 'An error occurred. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const autofillStyle = {
    '& input:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px transparent inset',
      WebkitTextFillColor: '#fff',
      transition: 'background-color 5000s ease-in-out 0s',
    },
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
          bgcolor: 'gray.900',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          border: '2px solid transparent',
          borderImage: 'linear-gradient(to right, #b5852a, #d6b56c, #f0d585, #e6c565, #b5852a) 1',
        }}
        className="gnr-gold-border"
      >
        <h2
          id="appointment-modal-title"
          className="text-2xl font-semibold text-white font-outfit mb-4 gnr-gold-text"
        >
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
            placeholder="Enter your full name"
            error={!!errors.name}
            helperText={errors.name}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff' },
              sx: {
                ...autofillStyle,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.name ? '#f44336' : '#fff',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.name ? '#f44336' : '#eed37a',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#eed37a',
                },
              },
            }}
          />

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
            placeholder="Enter your email"
            error={!!errors.email}
            helperText={errors.email}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff' },
              sx: {
                ...autofillStyle,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.email ? '#f44336' : '#fff',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.email ? '#f44336' : '#eed37a',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#eed37a',
                },
              },
            }}
          />

          {/* Phone Field */}
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            variant="outlined"
            placeholder="+911234567890"
            error={!!errors.phone}
            helperText={errors.phone || 'Enter phone number with +91'}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff' },
              sx: {
                ...autofillStyle,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.phone ? '#f44336' : '#fff',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.phone ? '#f44336' : '#eed37a',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#eed37a',
                },
              },
            }}
          />

          {/* Message Field */}
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            variant="outlined"
            placeholder="Enter your message"
            error={!!errors.message}
            helperText={errors.message}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{
              style: { color: '#fff' },
              sx: {
                ...autofillStyle,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.message ? '#f44336' : '#fff',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.message ? '#f44336' : '#eed37a',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#eed37a',
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #b5852a, #d6b56c, #f0d585, #e6c565, #b5852a)',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(to right, #a57724, #c3a35f, #e0c577, #d4b358, #a57724)',
              },
              '&:disabled': {
                background: 'gray',
                cursor: 'not-allowed',
              },
            }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AppointmentModal;