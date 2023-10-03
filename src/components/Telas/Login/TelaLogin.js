import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, TextView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth, db } from '../../../../firebase';
import {Ionicons} from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const Stack = createStackNavigator();

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve conter no mínimo 6 dígitos").required("Informe sua senha")
});

export default function TelaLogin({ navigation }) {
  const [emailValue, setEmailValue] = useState('');
  const [loginError, setLoginError] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [hidepass, setHidepass] = useState(true);
  const emailRef = useRef(null);

  function loginFirebase(formData) {
  const { email, password } = formData;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          alert("Logado com Sucesso!");
          goToScreenTab();
        } else {
          setLoginError(true);
        }
      })
      .catch((error) => {
        setLoginError(true);
      });
  }
const goToScreenCalendar = () => {
  navigation.navigate('Calendar'); // Use navigation.navigate instead of navigation.push
};

const goToScreenTab = () => {
  navigation.navigate('TabRoutes', { email: emailValue }); // Use navigation.navigate instead of navigation.push
};

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/a.png')} />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            ref={emailRef}
            style={[
              styles.input, {
                borderWidth: errors.email && 1,
                borderColor: errors.email && '#ff375b'
              }
            ]}
            onChangeText={(text) => {
              setEmailValue(text);
              onChange(text);
            }}
            onBlur={onBlur}
            value={value}
            placeholder="E-mail"
            placeholderTextColor="black"
          />
        )}
      />
      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

      <View style={styles.password}>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                styles.inputpass, {
                  borderWidth: errors.password && 1,
                  borderColor: errors.password && '#ff375b'
                }]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Senha"
              secureTextEntry={hidepass}
              placeholderTextColor="black"
            />
          )}
        />

        <TouchableOpacity style={styles.icon} onPress={() => setHidepass(!hidepass)} activeOpacity={0.8}>
          {hidepass ?
            <Ionicons name="eye" size={16} />
            :
            <Ionicons name="eye-off" size={16} />
          }
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(loginFirebase)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#e4eaed'
  },
  logo: {
    width: 333,
    height:160,
    top: -230,
  },
  input: {
    width: '80%',
    padding: 20,
    fontSize: 14,
    borderRadius: 20,  
    backgroundColor: '#0003',
  },
  password: {
    width: "80%",
    marginTop: 25,
    backgroundColor: '#0003',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },
  //senha
  inputpass: {
    width: '80%',
    padding: 20,
    fontSize: 14,
    borderRadius: 20,
  },
  //entrar
  button: {
    backgroundColor: '#71a89b',
    width: "60%",
    height: 55,
    marginTop: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    //Letra do 'Login'
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3a5044',
  },
  icon: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelError:{
    alignSelf: 'flex-start',
    color:'red',
    marginLeft: '8%',
    borderRadius: 20
  },
});
