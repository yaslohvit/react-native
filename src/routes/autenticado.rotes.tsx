import {BottomTabNavigationProp, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useTheme} from "native-base";
import {Home} from "../screens/Home";

export type AutenticadoRoutes = {
    home: undefined;
}

export type appNavigatorRoutesProps = BottomTabNavigationProp<AutenticadoRoutes>;

const {Navigator, Screen} = createBottomTabNavigator<AutenticadoRoutes>()

export function AutenticadoRoutes() {

    const {sizes, colors} = useTheme()

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.red[600],
                tabBarInactiveTintColor: colors.gray[100],
            }}
        >
            <Screen
                name={"home"}
                component={Home}
            />
        </Navigator>
    )
}