/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
const { persistor, store } = configureStore();
import Navigator from './navigation';
import { CustomToast } from "./components/CustomToast"

export default function Entrypoint() {
    return (

        < Provider store={store} >
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <PersistGate
                persistor={persistor}
            >
            </PersistGate>
            <Navigator />
            <CustomToast />
        </Provider >
    )

}
