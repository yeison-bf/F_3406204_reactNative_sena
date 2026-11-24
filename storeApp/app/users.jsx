import { Link } from "expo-router";
import { Text, View } from "react-native";
import { IconRowLetf } from "../components/utls/icons";


export default function Users() {
    return (
        <View>
            <Link href="/">
            <IconRowLetf/>
                Regresar
            </Link>
            <Text>
                Hola desde Usuarios
            </Text>
        </View>
    )
}