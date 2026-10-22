import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [listClients, setListClients] = useState([
    {
      "id": 1,
      "name": "Juan Jose",
      "lastName": "Rodriguez Monsalve",
      "location": "Medellín",
      "email": "juan@gmail.com",
      "status": true,
    },
    {
      "id": 2,
      "name": "Sofia",
      "lastName": "Gonzalez Gallego",
      "location": "Cali",
      "email": "sofi@gmail.com",
      "status": false,
    },
    {
      "id": 3,
      "name": "Juan Miguel",
      "lastName": "Gallego Gallego",
      "location": "Cartagena de Indias",
      "email": "juanMiguel@gmail.com",
      "status": true,
    },
    {
      "id": 4,
      "name": "Juan Miguel",
      "lastName": "Gallego Gallego",
      "location": "Cartagena de Indias",
      "email": "juanMiguel@gmail.com",
      "status": true,
    }
  ]);

  const [CambioColor, setCambioColor] = useState(false)

  return (
    <View style={styles.container}>
      <View style={[styles.header, CambioColor ? {backgroundColor:'blue'} : {backgroundColor:'red'}]}>
        <Text>
          Listado de Clientes
        </Text>
        <TouchableOpacity
        onPress={()=>setCambioColor(!CambioColor)}
         style={styles.btnFloatingCTM}>
          <Text>ctm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyLisClients}>
        <FlatList
          data={listClients}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (<Text>No tengo datos</Text>)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={'https://cdn-icons-png.flaticon.com/512/6326/6326055.png'}
              />
              <Text>Nombre: {item.name}</Text>
              <Text>Direccion: {item.lastName} </Text>
              <Text>Email: {item.email} </Text>
            </View>
          )}
        >

        </FlatList>


      </View>
      <TouchableOpacity style={styles.btnFloatingNew}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: '60px',
    justifyContent: 'center',
    alignItems: 'center'
  },

  colorUno:{
    backgroundColor: 'blue',
  },
  colorDos:{
    backgroundColor: 'red'
  },
  bodyLisClients: {
    flex: 1,
    padding: '15px'
  },
  btnFloatingNew: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    backgroundColor: '#A63D3D',
    bottom: '20px',
    right: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25px'
  },

  btnFloatingCTM:{
    position:'absolute',
    right:'5px',
    backgroundColor: 'white'
  },

  // Estilos del listado de clientes
  card: {
    backgroundColor: 'gray',
    marginTop: '8px',
    padding: '8px',
    gap: '5px',
    borderRadius: '10px',
    border: '1px solid gray'
  },
});
