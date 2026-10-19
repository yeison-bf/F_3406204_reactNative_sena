import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)
  return (
    <View style={styles.contenedor}>

      <View style={styles.cabecera}>
        <Text style={styles.cabeceraNombre}>Nombre del usuario</Text>
      </View>
      <View style={styles.cuerpo}>
        <Text style={styles.cuerpoNombre} >{count}</Text>
      </View>
      <View style={styles.boton}>
        <Pressable
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        >
          <Text style={styles.textBoton}>+1</Text>
        </Pressable>
      </View>
      <View style={styles.boton2}>
        <Pressable
          onPress={() => setCount(0)}
        >
          <Text style={styles.textBoton}>-1</Text>
        </Pressable>    
        
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1
  },
  cabecera: {
    backgroundColor: 'black',
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cabeceraNombre: {
    fontSize: '2em',
    color: 'white'
  },
  cuerpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuerpoNombre: {
    fontSize: '8em'
  },
  boton: {
    position: 'absolute',
    width: '80px',
    backgroundColor: 'black',
    bottom: '20px',
    right: '20px',
    padding: '1em',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px'

  },
  textBoton: {
    color: 'white',
    fontSize: '25px'
  },

  boton2: {
    position: 'absolute',
    width: '80px',
    backgroundColor: 'black',
    bottom: '20px',
    left: '20px',
    padding: '1em',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px'

  },
  textBoton: {
    color: 'white',
    fontSize: '25px'
  }
});
