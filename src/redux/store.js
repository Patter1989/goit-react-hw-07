import { configureStore } from "@reduxjs/toolkit";
import { ContactsReducer } from "./contacts/contactsSlice";
import { FilterReducer } from "./filter/filterSlice";



export const store = configureStore({
	reducer: {
		contacts: ContactsReducer,
		filter: FilterReducer,
	},
});
