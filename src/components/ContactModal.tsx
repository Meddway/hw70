import React from 'react';

interface Contact {
  id: string;
  name: string;
  photo: string;
  phone: string;
  email: string;
}

interface ContactModalProps {
  contact: Contact | null;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ contact, onClose }) => {
  if (!contact) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Contact Information</h2>
        <p>Name: {contact.name}</p>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>

        <button >Edit</button>
        <button>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactModal;
