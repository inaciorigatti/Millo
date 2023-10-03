import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { auth, db } from '../../../../firebase';
import {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import DatePicker from 'react-native-datepicker'
import TelaLogin from '../Login/TelaLogin';

const Stack = createStackNavigator(); // <-- resume o código 

const schema = yup.object({
  username: yup.string().required("          Informe seu nome"),
  date: yup.date().required("          Informe sua data de nascimento").typeError(          "Digite apenas números"),
  email: yup.string().email("          Email inválido").required("          Informe seu email"),
  password: yup.string().min(6, "      A senha deve conter no mínimo 6 dígitos").required("          Digite sua senha")
})


export default function TelaRegister({ navigation }) {

  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  function registerFirebase (schema) {
  
  auth.createUserWithEmailAndPassword(schema.email, schema.password).then(() => {
    alert("Cadastrado realizado com sucesso!");  
    goToScreenBemVindo();
  })
  .catch((error) => {
    alert(error.message)
  });
  }
  const [hidepass, setHidepass] = useState(true);

const goToScreenBemVindo = () => {
navigation.push('BemVindo'); // mostra a tela
};


return (
  <View style={styles.container}>
   <Text style={styles.titulo}>Para continuarmos, informe os dados necessários para o cadastro :) </Text>

    <Image style={styles.logo} source={require('../../assets/b.png')}/>
    <Controller 
      control = {control}
      name="username"
      render={({field:{onChange, onBlur, value}}) => (
        <TextInput
          style={[
            styles.input, {
              borderWidth: errors.username && 1,
              borderColor: errors.username && '#ff375b' 
            }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Nome completo"
            placeholderTextColor="black"
        />
      )}
    />
    {errors.username && <Text style = {styles.labelError}>{errors.username?.message}</Text>} 
    <Controller 
      control = {control}
      name="date"
      type="date"
      render={({field:{onChange, onBlur, value}}) => (
        <TextInput
          style={[
            styles.input, {
              borderWidth: errors.date && 1,
              borderColor: errors.date && '#ff375b' 
            }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Data de nascimento (aa/mm/dd)"
            placeholderTextColor="#000"
        />
      )}
    />
    {errors.date && <Text style = {styles.labelError}>{errors.date?.message}</Text>} 
    <Controller 
      control = {control}
      name="email"
      render={({field:{onChange, onBlur, value}}) => (
        <TextInput
          style={[
            styles.input, {
              borderWidth: errors.email && 1,
              borderColor: errors.email && '#ff375b' 
            }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Email"
            placeholderTextColor="black"
        />
      )}
    />
    {errors.email && <Text style = {styles.labelError}>{errors.email?.message}</Text>} 
    <View style={styles.password}>
    <Controller 
      control = {control}
      name="password"
      render={({field:{onChange, onBlur, value}}) => (
        <TextInput
          style={[
            styles.inputpass, {
              borderWidth: errors.password && 1,
              borderColor: errors.password && '#ff375b',
              borderRadius: 40
            }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Defina sua senha"
            secureTextEntry={hidepass}
            placeholderTextColor="black"
            borderRadius={40}
          />
        )}
      />
      <TouchableOpacity style={styles.icon} onPress={() => setHidepass(!hidepass)}>
      {hidepass ? 
      <Ionicons name="eye" size={16}/>
      :
      <Ionicons name="eye-off" size={16}/>
      }      
      </TouchableOpacity>         
    </View>
    {errors.password && <Text style = {styles.labelError}>{errors.password?.message}</Text>}
    
    {/* Botão de Registrar*/}
    <TouchableOpacity style={styles.button} onPress={handleSubmit(registerFirebase)}>
      <LinearGradient 
      style={styles.btn}
      start={{x:0,y:1}}
      end={{x:1,y:0}}
      colors={['#71a89b', '#71a89b']}
      borderRadius='20'>
        <Text style={styles.buttonText}>Registrar</Text> 
      </LinearGradient>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
   titulo: {
    top: 120, 
    fontSize: 19,
    color: '#000',
    marginLeft: 15,
    marginRight: 15 ,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4eaed',
  },
 logo: {
    //Logo
   width: 333,
    height:160,
    top: -130,
  },
  input: {
    //Estilo botões email e senha
    width:'80%',
    padding: 20,
    marginTop: 22,
    backgroundColor: '#BFC7CB',
    fontSize: 14,
    borderRadius: 20,
  },
  password: {
    //Estilo botões email e senha
    width: '80%',
    marginTop: 22,
    backgroundColor: '#BFC7CB',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },
  inputpass: {
    //Estilo botões email e senha
    width: '85%',
    padding:20,
    fontSize: 14,
    borderRadius: 20,
  },
  button: {
    //Estilo botão de Login
    width: 200,
    height: 45,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: "#71a89b",
  },
 
  buttonText: {
    //Letra do 'Login'
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3a5044'
  },
  icon: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  labelError:{
    alignSelf: 'flex-start',
    color:'#ff375b',
    marginLeft: "5%"
  }
});

