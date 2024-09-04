import { createSelector, createSlice } from "@reduxjs/toolkit"
import { apiAddContacts, apiDeleteContacts, apiFetchContacts } from "../contactsOps";


const INITIAL_STATE = {
	contacts: {
		items: [],
		loading: false,
		error: null,
	},
};

const contactSlice = createSlice({
	name: "contacts",
	initialState: INITIAL_STATE,
	reducers: {
		addContact: (state, action) => {
			state.items.push(action.payload);
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(apiFetchContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(apiFetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(apiFetchContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(apiDeleteContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(apiDeleteContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = state.items.filter(
					(contact) => contact.id !== action.payload.id
				);
			})
			.addCase(apiDeleteContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(apiAddContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(apiAddContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(action.payload)
			})
			.addCase(apiAddContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			}),
});

export const selectContacts = (state) => state.contacts.items || [];
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
export const { addContact} = contactSlice.actions



