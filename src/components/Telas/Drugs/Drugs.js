import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Remedioc from '../Remedioc/Remedioc'

const Stack = createStackNavigator(); 
export default function Calendar({navigation}) {

      const goToScreenRemedioc = () => {
      navigation.push('Remedioc'); // chama a tela
    };
    
  return (
    <View style={styles.container}>
      <View style={styles.pendentes}>
        <Text style={styles.textop}> remédios pendentes </Text>
      </View>
      <View style={styles.tomados}>
        <Text style={styles.textot}> remédios tomados </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.banoffe}> Remédios </Text>
      </View>
      <View style={styles.botao}>
          <TouchableOpacity onPress={() => {goToScreenRemedioc}}>
            <Text style={styles.textor}>adicionar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '15%',
    alignSelf: 'top',
    alignItems: 'center',
    backgroundColor: '#71a89b',
    borderBottomLeftRadius: '5%',
    borderBottomRightRadius: '5%',
  },
  banoffe: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '150%',
    marginTop: '30px',
  },
  pendentes: {
    backgroundColor: '#e6e6e6',
    height: '20%',
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '70%',
    borderRadius: '30px',
  },
  tomados: {
    backgroundColor: '#e6e6e6',
    height: '20%',
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '450px',
    borderRadius: '30px',
  },
  textop: {
    textAlign: 'center',
    backgroundColor: '#bb1a34',
    height: '13%',
    width: '60%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '30',
    margin: '10px',
    borderRadius: '25px',
  },
  textot: {
    textAlign: 'center',
    backgroundColor: '#58a74a',
    height: '13%',
    width: '60%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '30',
    margin: '10px',
    borderRadius: '25px',
  },
  textor: {
    fontWeight: 'bold',
    bottom: '100px',
    marginTop: '10px',
  },
  botao: {
    backgroundColor: "#0002",
    height: '5%',
    width: '22%',
    borderRadius: '30px',
    bottom: '100px',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  }
});