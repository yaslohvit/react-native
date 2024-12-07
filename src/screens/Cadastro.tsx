import {Center, Heading, ScrollView, VStack} from "native-base";
import {styles} from "react-native-gifted-charts/dist/BarChart/styles";
import {Controller, useForm} from "react-hook-form";
import {FormSignInDataProps} from "../types/LoginTypes";
import {LoginType} from "../types/CadastroTypes";
import {Input} from "../components/Input";
import Button from "../components/Button";
import {AuthNavigatorRoutesProps} from "../routes/autenticacao.routes";
import {useNavigation} from "@react-navigation/native";

export function Cadastro() {


    const {
        control,
        formState: {errors},
    } = useForm<LoginType>({
        defaultValues: {}
    })

    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function voltarParaLogin(){
        navigation.navigate("Login")
    }

    return (
        <ScrollView>
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            flexGrow: 1
        }}
            <Center mt={40}>
                <Heading>
                    crie sua conta
                </Heading>
            </Center>
            <Center> padding={4}>

                <Controller
                    control={control}
                    name={"name"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"person"}
                            placeholder={"Informe seu nome"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.name?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name={"email"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"email"}
                            placeholder={"Informe seu email"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.email?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name={"password"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"lock"}
                            placeholder={"Informe sua senha"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.password?.message}
                        />
                    )}
                />

            </Center>

            <VStack margin={4} space={2}>
                <Button
                    isLoading={false}
                    onPress={() => {
                    }}
                    title={"Cadastrar"}
                />

                <Button
                    variant={"outline"}
                    isLoading={false}
                    onPress={() => {
                    }}
                    title={"Voltar"}
                />
            </VStack>
        </ScrollView>
    )
}