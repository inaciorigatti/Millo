import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function pp() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
      Políticas de privacidade:
      </Text>

      <Text style={styles.texto}>
          A sua privacidade é importante para nós. É política do Millo - Seu Amigo Virtual respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Millo - Seu Amigo Virtual, e outros sites que possuímos e operamos. Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemos-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
   Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
  Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
     O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
    Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
      </Text>

      <Text style={styles.aa}>
  Esta política é efetiva a partir de Oct/2022.
      </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 1,
  },
    titulo: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  aa: {
    marginTop: 10,
    fontSize: 10,
    marginRight: 100,
  },
  texto: {
    marginLeft: 2,
    marginRight: 2,
    marginTop: 10,
    fontSize: 14,
    padding: 1,
    justifyContent: 'center',
  },

});
