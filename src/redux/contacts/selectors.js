import { selectFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectIsFormVisible = (state) => state.contacts.isFormVisible;

export const selectIsSearchVisible = (state) => state.contacts.isSearchVisible;

export const selectIsConfirmModalOpen = (state) => state.contacts.isConfirmModalOpen;

export const selectContactToDelete = (state) => state.contacts.contactToDelete;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalized = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalized) ||
        contact.number.includes(filter)
);
}
);