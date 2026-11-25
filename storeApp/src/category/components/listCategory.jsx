import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CardCategory({ id, name, description, deleteCategory }) {

    const deleteData = (id) => {
        deleteCategory(id);
    }

    return (
        <View style={styles.card}>
            {/* Contenedor de textos */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {description}
                </Text>
            </View>

            {/* Botón de Eliminar */}
            <Pressable
                onPress={() => deleteData(id)}
                style={({ pressed }) => [
                    styles.deleteButton,
                    pressed && styles.deleteButtonPressed // Efecto al presionar
                ]}
            >
                <Text style={styles.deleteText}>Eliminar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF', // Fondo blanco puro
        padding: 16,
        marginTop: 12,
        borderRadius: 12, // Bordes más redondeados
        flexDirection: 'row', // Texto a la izquierda, botón a la derecha
        alignItems: 'center',
        justifyContent: 'space-between',
        
        // Sombra para Android
        elevation: 2,
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        
        // Borde sutil para separar del fondo
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    
    textContainer: {
        flex: 1, // Ocupa todo el espacio disponible
        marginRight: 10, // Espacio para que el texto no choque con el botón
    },
    
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937', // Gris oscuro
        marginBottom: 4,
    },
    
    description: {
        fontSize: 14,
        color: '#6B7280', // Gris medio
        lineHeight: 20,
    },

    deleteButton: {
        backgroundColor: '#FEE2E2', // Fondo rojo muy claro
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    
    deleteButtonPressed: {
        backgroundColor: '#FCA5A5', // Se oscurece un poco al presionar
    },

    deleteText: {
        color: '#EF4444', // Rojo vibrante
        fontWeight: '600',
        fontSize: 14,
    }
});