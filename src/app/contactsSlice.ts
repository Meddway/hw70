import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from "../axiosApi.ts";
import {Contact, ContactsState} from "../int";


const fetchContactsFromApi = async (): Promise<{ [key: string]: Contact }> => {
  try {
    const response = await axiosApi.get('/contacts.json');
    return response.data || {};
  } catch (error) {
    console.error('Failed to fetch contacts', error);
    throw error;
  }
};

export const fetchContactsAsync = createAsyncThunk<{ [key: string]: Contact }>(
  'contacts/fetchContacts',
  async () => {
    const data = await fetchContactsFromApi();
    return data;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {},
    status: 'idle',
    error: null,
  } as ContactsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContactsAsync.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchContactsAsync.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.contacts = action.payload;
    });
  },
});

export const { reducer: contactsReducer } = contactsSlice;
export default contactsSlice;
