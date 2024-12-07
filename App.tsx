import React from "react";
import {
    NativeBaseProvider, StatusBar,
} from "native-base";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Login} from "./src/screens/Login";
import {Autenticacaorotas} from "./src/routes/autenticacao.routes";

export default function App() {
    return (
        <NativeBaseProvider>
            <StatusBar/>
            <SafeAreaProvider>
                <Autenticacaorotas />
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}