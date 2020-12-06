import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import About from "./components/About";
import Alarms from "./components/Alarms";

const Tab = createBottomTabNavigator();

const App = () => (
    <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
            activeBackgroundColor: '#16697a',
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
        }}>
            <Tab.Screen name="Alarmes" component={Alarms} options={{ title: 'Mes alarmes' }} />
            <Tab.Screen name="A propos" component={About} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default App;
