export interface ContactsState {
  contacts: { [key: string]: Contact };
}

export interface Contact {
  id: string;
  phone: string;
  name: string;
  photo: string;
  email: string;
}

export interface RootState {
  contacts: {
    contacts: { [key: string]: Contact };
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  };
}

interface ContactsState {
  contacts: { [key: string]: Contact };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}