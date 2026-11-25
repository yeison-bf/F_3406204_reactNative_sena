import { Children } from "react";
import { Modal, Pressable, Text, View } from "react-native";

export default function Modals({name}){
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
        <View >
           {Children}
        </View>
      </Modal>
}