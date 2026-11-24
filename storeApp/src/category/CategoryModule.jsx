import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import CardCategory from "./components/listCategory";

export default function CategoryModule() {

  const urlApi = process.env.EXPO_PUBLIC_API_URL;
  const [categoryList, setCategoryList] = useState([])

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
    console.log(id)
    try {
      const category = await axios.delete(`${urlApi}categories/${id}`)
      console.log(category.data)
      if(category.data?.success){
        fectData()
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
  }
})