import { Tabs } from "expo-router";
import { IconListUser } from "../../components/utls/icons";

export default function TabsLayout() {
  return (
    <Tabs >
      <Tabs.Screen
        options={{
          title: "Inicio",
          tabBarIcon: () => (
            <IconListUser />
          )
        }}
        name='index'
      />
      <Tabs.Screen
        options={{
          title: "Categorias",
          tabBarIcon: () => (
            <IconListUser />
          )
        }}
        name='category'
      />
      <Tabs.Screen
        options={{
          title: "Productos",
          tabBarIcon: () => (
            <IconListUser />
          )
        }}
        name='products'
      />
      <Tabs.Screen
        options={{
          title: "Usuarios",
          tabBarIcon: () => (
            <IconListUser />
          )
        }}
        name='users'
      />
    </Tabs>
  )
}

