import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BemVindo from '../components/Telas/BemVindo/BemVindo';
import TelaLogin from '../components/Telas/Login/TelaLogin';
import TelaRegister from '../components/Telas/Register/TelaRegister';
import Drugs from '../components/Telas/Drugs/Drugs';
import Chatbot from '../components/Telas/Chatbot/Chatbot';
import Settings from '../components/Telas/Settings/Settings';
import Calendar from '../components/Telas/Drugs/Drugs';
import TabRoutes from './TabRoutes';
import TelaConfig from '../components/Telas/Settings/Settings';
import TelaPerfil from '../components/Telas/Settings/TelaPerfil';
import Pp from '../components/Telas/Settings/pp';
import TelaPIN from '../components/Telas/Settings/TelaPIN';

const Stack = createStackNavigator(); 

export default function Routes(){
  return(
    
    <Stack.Navigator intialRouteName='BemVindo'>
        <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="TelaLogin"
        component={TelaLogin}
      />
        <Stack.Screen
        name="TelaRegister"
        component={TelaRegister}
      />
        <Stack.Screen
        name="Settings"
        component={Settings}
      />
        <Stack.Screen
        name="Calendar"
        component={Calendar}
      />
        <Stack.Screen
        name="Drugs"
        component={Drugs}
      />
        <Stack.Screen
        name="ChatBot"
        component={Chatbot}
      />
        <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
         options={{headerShown: false}}
      />
        <Stack.Screen
        name="TelaConfig"
        component={TelaConfig}
      />
       <Stack.Screen
        name="TelaPerfil"
        component={TelaPerfil}
      />
       <Stack.Screen
        name="Pp"
        component={Pp}
      />
       <Stack.Screen
          name="TelaPIN"
          component={TelaPIN}
      />
      </Stack.Navigator>
      
  )
}
