import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import authReducer from './auth/slice';


const persistedAuthReducer = persistReducer({
  key: 'user-token',
  storage,
  whitelist: ['token'],
},
  authReducer
);


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      },
    }), 
});

export const persistor = persistStore(store);