import { Tabs } from "expo-router";
import { IconCategory, IconCountries, IconHome, IconListUser, IconProducts } from "../../components/utls/icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 10, 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          height: 85, // 👈 Aumentamos un poco más (antes 80)
          paddingBottom: 15, 
          paddingTop: 10,    
        },
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarLabelStyle: {
          fontSize: 11,      // 👈 Bajamos de 12 a 11 para que quepan mejor
          fontWeight: '600',
          marginTop: 4,      // 👈 Damos un poco más de margen arriba del texto
          marginBottom: 4,   
        },
        tabBarShowLabel: true, 
        headerShown: false, 
      }}
    >
      <Tabs.Screen
        options={{
          title: "Inicio", // Corto, cabe bien
          tabBarIcon: ({ focused }) => (
            <IconHome color={focused ? '#2563eb' : '#9ca3af'} size={24} /> // 👈 Forzamos size={24}
          )
        }}
        name='index'
      />
      <Tabs.Screen
        options={{
          title: "Categorías",
          tabBarIcon: ({ focused }) => (
            <IconCategory color={focused ? '#2563eb' : '#9ca3af'} size={24} />
          )
        }}
        name='category'
      />
      <Tabs.Screen
        options={{
          title: "Productos",
          tabBarIcon: ({ focused }) => (
            <IconProducts color={focused ? '#2563eb' : '#9ca3af'} size={24} />
          )
        }}
        name='products'
      />
      <Tabs.Screen
        options={{
          title: "Usuarios",
          tabBarIcon: ({ focused }) => (
            <IconListUser color={focused ? '#2563eb' : '#9ca3af'} size={24} />
          )
        }}
        name='users'
      />
      <Tabs.Screen
        options={{
          title: "Países", // 👈 Cambiado de "Countries" a "Países" (más corto)
          tabBarIcon: ({ focused }) => (
            <IconCountries color={focused ? '#2563eb' : '#9ca3af'} size={24} />
          )
        }}
        name='countries'
      />
    </Tabs>
  )
}