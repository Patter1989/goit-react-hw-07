import { createSelector, createSlice } from "@reduxjs/toolkit"
import { apiAddContacts, apiDeleteContacts, apiFetchContacts } from "../contactsOps";


const INITIAL_STATE = {
	contacts: {
		items: [],
		loading: false,
		error: null,
	},
	filters: {
		name: "",
	},
};

const contactSlice = createSlice({
	name: "contacts",
	initialState: INITIAL_STATE,
	reducers: {
		addContact: (state, action) => {
			state.contacts.push(action.payload);
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(apiFetchContacts.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(apiFetchContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.contacts = action.payload;
			})
			.addCase(apiFetchContacts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(apiDeleteContacts.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(apiDeleteContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.contacts = state.contacts.filter(
					(contact) => contact.id !== action.payload.id
				);
			})
			.addCase(apiDeleteContacts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(apiAddContacts.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(apiAddContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.contacts.push(action.payload)
			})
			.addCase(apiAddContacts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			}),
});

export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filter.filterValue;
export const selectFilteredContacts = createSelector(
	[selectContacts, selectFilter],
	(contacts, filterValue) => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filterValue.toLowerCase())
		);
	}
	
)

export const ContactsReducer = contactSlice.reducer;
export const { addContact,  } = contactSlice.actions
