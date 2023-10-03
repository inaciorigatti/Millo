import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Navigation/routes'
import TabRoutes from './src/Navigation/TabRoutes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return(
    <NavigationContainer> 
    <Routes/>
    </NavigationContainer> 
  )
}