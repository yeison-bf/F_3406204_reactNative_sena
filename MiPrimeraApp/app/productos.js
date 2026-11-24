import { Text, View, TouchableOpacity,} from 'react-native'
import {Link} from 'expo-router'
import { FlatList } from 'react-native'

export default function Productos() {


    return (
        <View>
            <Text>Hola desde productos</Text>
            <TouchableOpacity>
                <Link href='/'><Text>Volver</Text></Link>
            </TouchableOpacity>
            <View>
                <Text>Productos</Text>
                <FlatList

                />
            </View>
        </View>
    )
}

