/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
const { persistor, store } = configureStore();
import Navigator from './navigation';
import { CustomToast } from "./components/CustomToast"

export default function Entrypoint() {
    LogBox.ignoreAllLogs(true)
    return (
        < Provider store={store} >
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <PersistGate persistor={persistor} >
            </PersistGate>
            <Navigator />
            <CustomToast />
        </Provider >
    )

}
