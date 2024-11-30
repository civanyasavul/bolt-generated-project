import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SymptomsScreen from './screens/SymptomsScreen';
import TreatmentScreen from './screens/TreatmentScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
          <Stack.Screen name="Belirtiler" component={SymptomsScreen} />
          <Stack.Screen name="Tedavi" component={TreatmentScreen} />
          <Stack.Screen name="İletişim" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
