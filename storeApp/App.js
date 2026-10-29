import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useEffectEvent, useState } from 'react';
import { FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  // constante para ser visiible o no el modal
  const [visible, setVisible] = useState(false)

  // Arreglo de objetos : Listado de clientes
  const [listClients, setListClients] = useState([]);

  // Constantes para almacenar datos
  const [document, setdocument] = useState("")
  const [name, setName] = useState("")
  const [lastName, setlastName] = useState("")
  const [location, setlocation] = useState("")
  const [email, setemail] = useState("")


  // Función para guardar los datos.
  const saveDataClients = async () => {

    let newClientsInfo = [
      ...listClients,
      {
        id: document,
        document: document,
        name: name,
        lastName: lastName,
        location: location,
        email: email,
        status: true
      }
    ]

    await AsyncStorage.setItem("@infoClients", JSON.stringify(newClientsInfo) )

    setListClients(newClientsInfo)

    // LLamado  a la función de limpieza de campos
    clearData()

  }


  // Función para limpiar los campos del formulario
  const clearData = () => {
    setVisible(false)
    setdocument("")
    setName("")
    setlastName("")
    setlocation("")
    setemail("")
  }

  // Función para obtener los datoa
  const getClientesData = async () =>{
    let data = await AsyncStorage.getItem("@infoClients") || []
    console.log( JSON.parse(data))
    setListClients(JSON.parse(data))
  }

  
  useEffect(()=>{
        getClientesData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={styles.headerText}>
          Listado de Clientes
        </Text>
      </View>
      <View style={styles.bodyLisClients}>
        <FlatList
          data={listClients}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (<Text>No tengo datos</Text>)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6326/6326055.png' }}
              />
              <View>
                <Text>Documento: {item.document}</Text>
                <Text>Nombre: {item.name}</Text>
                <Text>Direccion: {item.lastName} </Text>
                <Text>Email: {item.email} </Text>
              </View>
            </View>
          )}
        >
        </FlatList>


      </View>
      <TouchableOpacity
        style={styles.btnFloatingNew}
        onPress={() => setVisible(true)}>
        <Text style={styles.headerText}>+</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        animationType='slide'
      >
        <View style={[styles.BodyModal, { flex: 1 }]}>
          <View style={styles.headerModal}>
            <Text style={styles.headerModalTitle}>FORMULARIO DE REGISTRO DE CLIENTE</Text>
            <Pressable onPress={() => setVisible(false)} ><Text style={styles.headerModalTitle}>X</Text></Pressable>
          </View>
          <View style={styles.formModal}>

            <View style={styles.formControl}>
              <Text>Documento de identidad</Text>
              <TextInput
                style={styles.inputText}
                placeholder='Documento'
                onChangeText={setdocument}
                value={document}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Nombres</Text>
              <TextInput
                style={styles.inputText}
                placeholder='Nombre completo'
                onChangeText={setName}
                value={name}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Apellidos</Text>
              <TextInput
                style={styles.inputText}
                placeholder='Apellidos'
                onChangeText={setlastName}
                value={lastName}
              />
            </View>

            <View style={styles.formControl}>
              <Text>Dirección</Text>
              <TextInput
                style={styles.inputText}
                placeholder='Dirección'
                onChangeText={setlocation}
                value={location}
              />
            </View>

            <View style={styles.formControl}>
              <Text>Email</Text>
              <TextInput
                style={styles.inputText}
                placeholder='Email'
                onChangeText={setemail}
                value={email}
              />
            </View>

          </View>
          <Pressable
            style={styles.botonSaveData}
            onPress={saveDataClients} >
            <Text>GUARDAR DATOS</Text>
          </Pressable>
        </View>

      </Modal>
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
    alignItems: 'center',
    backgroundColor: 'green'
  },

  headerText: {
    color: 'white',
    fontSize: '1.3em',
    fontWeight: 'bold'
  },
  colorDos: {
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
    backgroundColor: 'green',
    bottom: '20px',
    right: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25px'
  },

  btnFloatingCTM: {
    position: 'absolute',
    right: '5px',
    backgroundColor: 'white'
  },

  // Estilos del listado de clientes
  card: {
    marginTop: '8px',
    padding: '8px',
    gap: '5px',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBlockColor: 'green',
    borderRadius: 25,
    alignItems: 'center'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  // Diseño del modal
  headerModal: {
    flexDirection: 'row',
    height: 85,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'green',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

  },

  headerModalTitle: {
    color: 'white',
    fontSize: 16
  },
  headerModalButton: {
  },

  formModal: {
    padding: 20
  },
  formControl: {
    marginTop: 15
  },
  inputText: {
    border: '1px solid',
    borderRadius: 9,
    paddingLeft: 15,
    height: 38
  },
  botonSaveData: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'green',
    width: '85%',
    left: 25,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18
  }

});
