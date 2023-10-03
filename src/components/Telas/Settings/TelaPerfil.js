import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

export default function TelaPerfil() {
  const navigation = useNavigation();

  const handleSave = () => {
    // lógica para salvar as configurações
    navigation.goBack(); // volta para a tela anterior
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  const IMAGES = [
    { id: 1, uri: 'https://picsum.photos/id/1/200/200' },
    { id: 2, uri: 'https://picsum.photos/id/10/200/200' },
    { id: 3, uri: 'https://picsum.photos/id/100/200/200' },
    { id: 4, uri: 'https://picsum.photos/id/1000/200/200' },
  ];

  const handleEditPhoto = (uri) => {
    setPhoto(uri);
  };

  const renderImageItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEditPhoto(item.uri)}>
      <Image style={styles.imageItem} source={{ uri: item.uri }} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil</Text>
      <TouchableOpacity style={styles.photoContainer} onPress={() => console.log('Edit photo')}>
        <Image style={styles.photo} source={{ uri: photo }} />
        <View style={styles.editIcon}>
          <Text style={styles.editIconText}>Editar</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        style={styles.input1}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <FlatList
        data={IMAGES}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        contentContainerStyle={styles.imagesContainer}
      />

      <TouchableOpacity style={styles.button}>
        <Button title="Salvar" onPress={handleSave} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4eaed',
    padding: 20,
  },
  photoContainer: {
    position: 'absolute',
    top: 90,
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b5dAd0',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  editIcon: {
    position: 'absolute',
    marginTop: -40,
    bottom: 2,
    backgroundColor: '#8fc4b7',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIconText: {
    color: '#0009',
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: '#c7d7d8',
    marginTop: 15,
  },
   input1: {
    width: '90%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 209,
    backgroundColor: '#c7d7d8',
  },
 button: {
    width: '70%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8fc4b7',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
 
  texto: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});


