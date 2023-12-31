// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkApi) => {
//     try {
//       const response = await fetchContacts();
//       return response;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const changeContactThunk = createAsyncThunk(
//   'contacts/changeContact',
//   async (changedContactData, { dispatch }) => {
//     try {
//       await changeContact(changedContactData);
//       dispatch(getContacts());
//     } catch (error) {
//       return error;
//     }
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkApi) => {
//     try {
//       await deleteContact(id);
//       return id;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const postContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contactData, thunkApi) => {
//     try {
//       const { data } = await addContact(contactData);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
