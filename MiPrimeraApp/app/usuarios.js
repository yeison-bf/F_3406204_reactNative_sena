import {Text, View, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router'

export default function usuarios(){
    return(
        <View>
            <Text>Hola desde usuarios</Text>
            <TouchableOpacity>
                <Link href='/'><Text>Volver</Text></Link>
            </TouchableOpacity>
        </View>
    )
}

