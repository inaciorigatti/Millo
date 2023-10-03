import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'

import Drugs from '../components/Telas/Drugs/Drugs';
import Settings from '../components/Telas/Settings/Settings';
import Calendar from '../components/Telas/Calendar/Calendar';
import ChatBot from '../components/Telas/Chatbot/Chatbot';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function TabRoutes() {
  return(
    <NavigationContainer independent={true}>
    <Tab.Navigator
         screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            tabBarShowLabel: false,
            tabBarStyle:{
               position: 'absolute',
               backgroundColor: '#71a89b',
               borderTopWidth: 0,
               borderRadius: 0,
               borderTopEndRadius: 18,
               borderTopStartRadius: 18,
            }
         }}
         >
         
         <Tab.Screen
            name="Calendario"
            component={Calendar}
            options={{
               headerShown: false,
               tabBarIcon: ({color, size, focused}) => {
                  if(focused){
                     return <Ionicons name="calendar" size={40} color={color} />
                  }

                  return <Ionicons name="calendar-outline" size={30} color={color} />

               }
            }}
         />

         <Tab.Screen
            name="Chatbot"
            component={ChatBot}
            options={{
               headerShown: false,
               tabBarIcon: ({color, size, focused}) => {
                  if(focused){
                     return <Ionicons name="chatbubble" size={40} color={color} />
                  }
                  
                  return <Ionicons name="chatbubble-outline" size={30} color={color} />

               }
            }}
         />

         <Tab.Screen
            name="Remedios"
            component={Drugs}
            options={{
               headerShown: false,
               tabBarIcon: ({color, size, focused}) => {
                  if(focused){
                     return <Ionicons name="medkit" size={40} color={color} />
                  }
                  
                  return <Ionicons name="medkit-outline" size={30} color={color} />

               }
            }}
         />

          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
               headerShown: false,
               tabBarIcon: ({color, size, focused}) => {
                  if(focused){
                     return <Ionicons name="cog" size={40} color={color} />
                  }
                  
                  return <Ionicons name="cog-outline" size={30} color={color} />

               }
            }}
         />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabRoutes;