import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";
import CardCategory from "./components/listCategory";

export default function CategoryModule() {

  // Cosntante para la url base de la API
  const urlApi = process.env.EXPO_PUBLIC_API_URL;

  // Constante para el listado global de las categorias
  const [categoryList, setCategoryList] = useState([])

  // Constante para hacer visible el modal
  const [isVisible, setIsVisible] = useState(false)

  // Constantes para guardar los datos del formulario (nombre, descripcion)
  const [nameCategory, setNameCategory] = useState("")
  const [descriptionCategory, setDescriptionCategory] = useState("")
  const [imageCategory, setImageCategory] = useState("")



  function abrirocerra() {
    setIsVisible(!isVisible)
  }

  // Función para listar
  async function fectData() {
    try {
      const category = await axios.get(`${urlApi}categories`)
      console.log(category)
      setCategoryList(category.data.data)
    } catch (error) {
      console.error(error)
    }
  }


  // Funcion para eliminar
  const deleteCategory = async (id) => {
    try {
      const category = await axios.delete(`${urlApi}categories/${id}`)
      console.log(category.data)
      if (category.data?.success) {
        fectData()
      }
    } catch (error) {
      console.error(error)
    }
  }


  // Función para guardar datos
  const saveDataCategory = async () => {

    try {
      const category = await axios.post(`${urlApi}categories`, { name:nameCategory, description:descriptionCategory, image:imageCategory })
      console.log(category)
      if (category.data?.success) {
        fectData()
        setIsVisible(false)

        setNameCategory("")
        setDescriptionCategory("")
        setImageCategory("")
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fectData()
  }, [])

  return (

    <View style={styles.content}>
      <Text style={styles.title}>LISTADO DE CATEGORIAS</Text>

      <ScrollView>
        <View >
          <FlatList
            data={categoryList}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <CardCategory
                id={item._id}
                name={item.name}
                description={item.description}
                deleteCategory={deleteCategory}
              />
            )}
          >
          </FlatList>
        </View>
      </ScrollView>
      {/* Boton para abrir el modal */}
      <Pressable
        style={styles.btnOpenModal}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.TextbtnOpenModal}>+</Text>
      </Pressable>


      {/* Sección del modal */}
      <Modal
        visible={isVisible}
        animationType="slide"
      >

        <View style={styles.headerModal}>
          <Text style={styles.TextbtnCloseModal}>Nueva Categoria</Text>

          <Pressable
            onPress={() => setIsVisible(!isVisible)}
          >
            <Text style={styles.TextbtnCloseModal}>X</Text>
          </Pressable>
        </View>

        <View style={styles.BodyModal}>

          {/* FORMULARIO */}

          <Text style={styles.labels}>Nombre categoría</Text>
          <TextInput
            style={styles.inputs}
            value={nameCategory}
            onChangeText={setNameCategory}
          />


          <Text style={styles.labels}>Descripción</Text>
          <TextInput
            style={styles.inputs}
            value={descriptionCategory}
            onChangeText={setDescriptionCategory}
          />

          <Text style={styles.labels}>Url Imagen categoría</Text>
          <TextInput
            style={styles.inputs}
            value={imageCategory}
            onChangeText={setImageCategory}
            placeholder="https://..."
          />


          {/* Boton de guardar los datos */}
          <Pressable
            onPress={saveDataCategory}
            style={styles.btnSaveData}
          >
            <Text style={styles.TextbtnCloseModal}>GUARDAR DATOS</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}



const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 12
  },

  title:
  {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  // Boton para abrir el modal
  btnOpenModal: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    position: 'absolute',
    right: 10,
    bottom: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  TextbtnOpenModal: {
    fontSize: 45,
    color: 'white'
  },

  headerModal: {
    height: 50,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  TextbtnCloseModal: {
    fontSize: 20,
    color: 'white'
  },

  BodyModal: {
    padding: 15,
    flex: 1,
  },

  labels: {
    fontSize: 18,
    color: 'gray',
    marginTop: 15
  },

  inputs: {
    border: '1px solid gray',
    borderRadius: 4,
    height: 40, 
    paddingLeft:15
  },

  btnSaveData: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'blue',
    width: '90%',
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'

  }
})