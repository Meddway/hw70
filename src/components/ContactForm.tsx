import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosApi from "../axiosApi";

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosApi.post('/contacts.json', { name, phone, email, photo });
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  return (
    <div className="container">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Photo URL:</label>
          <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} className="form-control" />
        </div>

        {photo && <img src={photo} alt="Preview" className="img-fluid mb-3" />}

        <button type="submit" className="btn btn-success">
          Save
        </button>

        <Link to="/" className="btn btn-secondary ms-2">
          Back to Contacts
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;