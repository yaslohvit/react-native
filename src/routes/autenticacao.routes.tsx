import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Login} from "../screens/Login";
import {Cadastro} from "../screens/Cadastro";

export type NaoAutenticado = {
    login: undefined;
    cadastro: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<NaoAutenticado>

const {Navigator} = createNativeStackNavigator<NaoAutenticado>()

export function Autenticacaorotas() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="cadastro" component={Cadastro}/>
        </Navigator>
    )
}