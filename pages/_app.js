import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import likes from '../reducers/likes';
import tweets from '../reducers/tweets';

const reducers = combineReducers({user, likes, tweets});

const persistConfig = { key: 'hackatweet', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);
/*
const store = configureStore({
  reducer: { bookmarks, user },
});*/

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>hackatweet</title>
        </Head>
        <Component {...pageProps} />
        </PersistGate>
    </Provider>
  );
}

export default App;
