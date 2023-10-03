import React, { useState } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import NumericKeyboard from './Numbers'
import { useNavigation } from '@react-navigation/native';


export default function TelaPIN() {
  const [pin, setPIN] = useState('');
  const [isPINEnabled, setIsPINEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleNumberPress = (number) => {
    setPin((prev) => prev + number);
  };

const navigation = useNavigation(); 

   function salvarPin() {
    // código para salvar o PIN escolhido
    console.log('PIN salvo:', pin);
    navigation.navigate('TelaConfig');
  }

  return (
     <View style={styles.container}>
     <Text style={styles.title}>Habilitar PIN</Text>
         <View style={styles.switchContainer}>
      <Switch
        value={isPINEnabled}
        onValueChange={setIsPINEnabled}
      />
      {isPINEnabled && (
        <>

        <TextInput style={styles.input} value={pin} secureTextEntry />
      <NumericKeyboard onPress={handleNumberPress} />
        </>
      )}
    </View>
    <TouchableOpacity onPress={salvarPin} style={styles.botao}>
  <Text style={styles.textoBotao}>Salvar e Sair</Text>
    </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#e4eaed',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 30,
    marginLeft: 70,
    marginTop: 50,
   
  },
   switchContainer: {
    alignItems: 'flex-end',
    marginTop: -30,
  },
   botao: {
    marginTop: 20,
    backgroundColor: '#8fc4b7',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  });
