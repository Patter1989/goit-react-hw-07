import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiFetchContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://66d03b71181d059277ddc3ec.mockapi.io/api/v1/contact"
      );
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
);

export const apiDeleteContacts = createAsyncThunk(
	"contacts/delete",
	async (contactId, thunkApi) => {
		try {
			const { data } = await axios.delete(
				`https://66d03b71181d059277ddc3ec.mockapi.io/api/v1/contact/${contactId}`
			);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const apiAddContacts = createAsyncThunk(
	"contacts/add",
	async (contact, thunkApi) => {
		try {
			const { data } = await axios.post(
        `https://66d03b71181d059277ddc3ec.mockapi.io/api/v1/contact`,
        contact
			);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);


