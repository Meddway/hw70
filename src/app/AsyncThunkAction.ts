import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from "../axiosApi";
import {Contact, ContactsState} from "../int";

const fetchContactsFromApi = async (): Promise<{ [key: string]: Contact }> => {
  try {
    const response = await axiosApi.get('/contacts.json');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
};

export const fetchContactsAsync = createAsyncThunk<{ [key: string]: Contact }>(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const data = await fetchContactsFromApi();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch contacts');
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {},
  } as ContactsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContactsAsync.fulfilled, (state, action: PayloadAction<{ [key: string]: Contact }>) => {
      state.contacts = action.payload;
    });
  },
});

export const {reducer: contactsReducer, actions: contactsActions} = contactsSlice;
