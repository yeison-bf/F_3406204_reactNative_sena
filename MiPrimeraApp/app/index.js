import { Link } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity,} from "react-native";

export default function Page() {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.header}>
        <Text style={styles.headerTittle}>Menú Principal</Text>
      </View>
      <View style={styles.containerBoton}>
        <TouchableOpacity style={styles.boton}>
          <Text href='/productos'>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Link href='/usuarios'><Text>usuarios</Text></Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'green',
    padding: 20,
    paddingTop: 30,
    borderRadius: 10
  },
  headerTittle:{
    fontSize: 30,
    color: 'white',

  },
  containerBoton:{
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 30,
    padding: 20,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerPrincipal:{
    backgroundColor: '#b5b5b5',
    flex: 1,
    padding: 20,
  },
  boton:{
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    height: 40

  }

});
