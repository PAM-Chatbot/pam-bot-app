import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { App, User } from './reducers';

const persistConfig = {
   key: 'app',
   storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    App: App,
    User: User
}));

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };

