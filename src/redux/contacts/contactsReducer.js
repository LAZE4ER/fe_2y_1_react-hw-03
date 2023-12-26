import { createReducer } from "@reduxjs/toolkit";
import { addContactAction, deleteContactAction } from "./contactsActions";

export const contactsReducer = createReducer([], (builder) => {
  builder.addCase(addContactAction, (state, action) => {
    state.unshift(action.payload);
  });
  builder.addCase(deleteContactAction, (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  });
});
