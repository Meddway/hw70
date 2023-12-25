import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAsync } from '../app/contactsSlice';
import ContactModal from './ContactModal';
import {Contact, RootState} from "../int";


const ContactList: React.FC = () => {
  const dispatch = useDispatch();
  const { contacts, status, error } = useSelector((state: RootState) => state.contacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContactsAsync());
      } catch (err) {
        console.error('Error fetching contacts:', err);
      }
    };

    if (status === 'idle') {
      void fetchData();
    }
  }, [dispatch, status]);

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts && Object.values(contacts).map((contact) => (
          <li key={contact.id} onClick={() => handleContactClick(contact)}>
            <img style={{ maxWidth: '120px' }} src={contact.photo} alt={contact.name} />
            <p>{contact.name}</p>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <ContactModal
          contact={selectedContact!}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ContactList;
