import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const INSTAGRAM_ICON = 'instagram';
const WEBSITE_ICON = 'globe';

const Stack = createStackNavigator();

export default function TelaConfig() {
  const navigation = useNavigation();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [pin, setPIN] = useState('');
  const [isPINEnabled, setIsPINEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const InstagramLink = () => {
    const instagramURL = 'https://instagram.com/milloapp?igshid=ZDdkNTZiNTM=';
    Linking.openURL(instagramURL);
  };

  const WebsiteLink = () => {
    const websiteURL =
      'https://inaciorigatti.github.io/divulgacaoMillo/?fbclid=PAAaaaWlL1cZSQuBej1qQ-fQVctDcreuGuZI4pF99Z2HB8HZx74Tgy_iQF3lE';
    Linking.openURL(websiteURL);
  };

  const handleNotificationsPress = () => {
    console.log('Notificações pressionado');
  };

  const handlePasswordPress = () => {
    console.log('Senha pressionado');
  };


  const handleResetPress = () => {
    console.log('Resetar configurações pressionado');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={handleNotificationsPress}>
          <Text style={styles.buttonT}>   Notificações</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('TelaPIN')}>
          <Text style={styles.buttonText}>   PIN</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button3}
        onPress={() => navigation.navigate('TelaPerfil')}>
        <Text style={styles.buttonText}>   Perfil</Text>
      </TouchableOpacity>

      <View style={styles.center}>
        <TouchableOpacity
          style={styles.button4}
          onPress={() => navigation.navigate('Pp')}>
          <Text style={styles.buttonText}>   Política de privacidade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button5}
          onPress={(aaaaa) =>
            Linking.openURL('mailto:seuamigovirtualmillo@gmail.com')
          }>
          <Text style={styles.buttonText}>   Feedback</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button6} onPress={InstagramLink}>
          <Icon name={INSTAGRAM_ICON} size={40} color={'#333'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button6} onPress={WebsiteLink}>
          <Icon name={WEBSITE_ICON} size={40} color={'#333'} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.but} onPress={handleResetPress}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4eaed',
    alignItems: 'center',
  },
 titulo: {
    marginTop: 70,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  //botão pin
  button2: {
    backgroundColor: '#c7d7d8',
    padding: 26,
    width: 433,
    marginTop: -41,
  },
  //botão perfil
  button3: {
    backgroundColor: '#a6c4bd',
    padding: 26,
    width: 433,
    marginTop: -10,
  },
  //politicas
  button4: {
    backgroundColor: '#c7d7d8',
    padding: 26,
    width: 433,
  },
  //feedback
  button5: {
    backgroundColor: '#a6c4bd',
    padding: 26,
    width: 433,
  },
  //instagram
  button6: {
    backgroundColor: '#c7d7d8',
    padding: 16,
    marginTop: 25,
    width: 200,
    alignItems: 'center',
  },
  //sair
  but: {
    width: "50%",
    backgroundColor: '#9BB0B2',
    padding: 16,
    alignItems: 'center',
    top: 15,
    borderRadius: 15,
  },

  //botão notificações
  buttonT: {
    alignItems: 'row',
    backgroundColor: '#a6c4bd',
    marginTop: 25,
    width: 433,
    padding: 26,
    fontSize: 25,
   
  },
  buttonText: {
    fontSize: 25,
    flexDirection: 'left,',
  },

  //botão liga/desliga
  switchContainer: {
    marginTop: -68,
    top: -20,
    padding: 35,
    marginLeft: 190,
  },
});
