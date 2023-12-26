import { createReducer } from "@reduxjs/toolkit";
import { addContactAction } from "./contactsActions";

export const contactsReducer = createReducer([], (builder) => {
  builder.addCase(addContactAction, (state, action) => {
    state.unshift(action.payload);
  });
  // builder.addCase(removeContactAction, (state, action) => {});
});
