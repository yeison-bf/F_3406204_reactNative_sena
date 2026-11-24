import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CardCategory({ id, name, description, deleteCategory }) {

    const deleteData = (id) => {
        deleteCategory(id)
    }

    return (
        <View style={styles.card}>
            <Text>Categoria:</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
            <Text>Descripción:</Text>
            <Text>{description}</Text>
            <Pressable
                onPress={()=>deleteData(id)}
            >
                <Text style={styles.delete}>Eliminar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderEndWidth: 2,
        backgroundColor: '#D6D1D0',
        marginTop: 9,
        borderRadius: 8
    },

    delete: {
        color: 'red'
    }
})