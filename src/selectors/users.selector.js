import { createSelector } from 'reselect';

const selectUsers = state => state.users;

export const selectUsersItems = createSelector(
    [selectUsers],
    (users) => users.items
);