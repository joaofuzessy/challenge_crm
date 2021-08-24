import { createAction } from '@reduxjs/toolkit';

export const addToProspectsList = createAction('leadsList/add_prospect');
export const removeFromLeadsList = createAction('leadsList/remove_lead');