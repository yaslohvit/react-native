import {Box} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {Autenticacaorotas} from "./autenticacao.routes";
import {AutenticadoRoutes} from "./autenticado.rotes";
import {useState} from "react";

export function Routes() {

    const [estalogado, setEstalogado] = useState (false)

    return (
        <Box flex={1}>
            <NavigationContainer>
                {estalogado? <AutenticadoRoutes/> : <Autenticacaorotas/>}
            </NavigationContainer>
        </Box>
    )
}