import {Box} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {Autenticacaorotas} from "./autenticacao.routes";

export function Routes(){
    return (
        <Box flex={1}>
            <NavigationContainer>
                <Autenticacaorotas />
            </NavigationContainer>
        </Box>
    )
}
