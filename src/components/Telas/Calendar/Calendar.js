import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import firestore from '../../../../firebaseConfig'; // Importe a configuração do Firebase

const ForumScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fullName, setFullName] = useState('');
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Recupere os relatórios do Firebase Firestore e atualize o estado local
    const fetchReports = async () => {
      const reportsCollection = collection(firestore, 'reports');
      const querySnapshot = await getDocs(reportsCollection);
      const fetchedReports = [];

      querySnapshot.forEach((doc) => {
        fetchedReports.push({ id: doc.id, ...doc.data() });
      });

      setReports(fetchedReports);
    };

    fetchReports();
  }, []);

  const handleReportSubmit = async () => {
    if (!fullName || !title || !description) {
      Alert.alert('Erro', 'Preencha todos os campos antes de enviar.', [{ text: 'OK' }]);
      return;
    }

    const reportsCollection = collection(firestore, 'reports');

    try {
      const newReportRef = await addDoc(reportsCollection, {
        title,
        description,
        fullName,
      });

      // Limpar os campos após o envio
      setTitle('');
      setDescription('');
      setFullName('');

      // Atualize a lista de relatórios com o novo relatório
      setReports([...reports, { id: newReportRef.id, title, description, fullName }]);

      Alert.alert('Sucesso', 'Relatório enviado com sucesso!', [{ text: 'OK' }]);
    } catch (error) {
      console.error('Erro ao adicionar relatório: ', error);

      Alert.alert('Erro', 'Erro ao enviar relatório. Por favor, tente novamente.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fórum</Text>

      {/* Formulário de Envio de Relatório */}
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Título do Problema"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Problema"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />
      <Button
        title="Enviar Relatório"
        onPress={handleReportSubmit}
        color="#2FAD8F"
      />

      {/* Lista de Relatórios */}
      <Text style={styles.subheading}>Relatórios do Fórum</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reportItem}>
            <Text style={styles.reportTitle}>{item.title}</Text>
            <Text>{`Por: ${item.fullName}`}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  reportItem: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  reportTitle: {
    fontWeight: 'bold',
  },
});

export default ForumScreen;
