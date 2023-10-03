import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Chatbot() {
  return (
    <View style={styles.container}>
      <Text>ChatBot</Text>
          <Image
          style={styles.milloChat}
          source={require('../../assets/millo-chat.png')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4EAED',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 333,
  },
  milloChat: {
    paddingTop: '80%',
  },
});