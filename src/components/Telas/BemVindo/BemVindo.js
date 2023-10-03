import React, { useState } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TextInput,Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';

const INSTAGRAM_ICON = 'instagram';
const WEBSITE_ICON = 'globe';

const Stack = createStackNavigator(); 
export default function BemVindo({ navigation }) {

 const InstagramLink = () => {
    const instagramURL = 'https://instagram.com/milloapp?igshid=ZDdkNTZiNTM=';
    Linking.openURL(instagramURL);
  };

  const WebsiteLink = () => {
    const websiteURL =
      'https://inaciorigatti.github.io/divulgacaoMillo/?fbclid=PAAaaaWlL1cZSQuBej1qQ-fQVctDcreuGuZI4pF99Z2HB8HZx74Tgy_iQF3lE';
    Linking.openURL(websiteURL);
  };

    //navegacao na classe

    const goToScreenLogin = () => {
      navigation.push('TelaLogin'); // chama a tela
    };
    const goToScreenRegister = () => {
      navigation.push('TelaRegister'); // chama a tela
    };
  
    const goToScreenTabRoutes = () => {
      navigation.push('TabRoutes');
    };

    return (
      <Animatable.View  style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/nv.png')}
        />

        {/* botao login*/}
        <TouchableOpacity onPress={goToScreenLogin}>
          <LinearGradient
            style={styles.buttonLogin}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 2 }}
            colors={['#8fc4b7', '#5fc9bf']}>
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToScreenRegister}>
          <LinearGradient
            style={styles.buttonRegister}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={['#8fc4b7', '#5fc9bf']}>
            <Text style={styles.buttonText}>Cadastro</Text>
          </LinearGradient>
        </TouchableOpacity>

          {/* botao teste*/}
        <TouchableOpacity onPress={goToScreenTabRoutes}>
          <LinearGradient
            style={styles.buttonTeste}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={['#8fc4b7', '#5fc9bf']}>
            <Text style={styles.buttonText}>Teste</Text>
          </LinearGradient>
        </TouchableOpacity>
        
         <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button6} onPress={InstagramLink}>
          <Icon name={INSTAGRAM_ICON} size={40} color={'#333'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button6} onPress={WebsiteLink}>
          <Icon name={WEBSITE_ICON} size={40} color={'#333'} />
        </TouchableOpacity>
      </View>
      </Animatable.View>
    );

}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4eaed',
  },
  logo: {
    //Logo
    width: 333,
    height:360,
    top: -138,
    marginTop: 70,
  },
  buttonLogin: {
    //Estilo botão de Login
    width: 290,
    height: 60,
    marginTop: -80,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9BB0B2',
  },
  buttonRegister: {
    //Estilo botão de cadastro
    width: 290,
    height: 60,
    marginTop: -5,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8FC4B7'
  },

  buttonTeste: {
    width: 290,
    height: 60,
    marginTop: 17,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8FC4B7'
  },

  buttonText: {
    //Letra do 'Login'
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0009',
  },
   //instagram
  button6: {
    backgroundColor: '#c7d7d8',
    padding: 20,
    marginTop: 60,
    width: 120,
    alignItems: 'center',
    borderRadius: 100,
    
  },
});


 	