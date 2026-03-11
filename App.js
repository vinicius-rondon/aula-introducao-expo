import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';

import Att01 from './src/atividade1/Att01';

import Exemplo02 from './src/exemplos/ex-02';
//para importar os exemplos escreva exatamente como esta no arquivo q esta em sua respectiva pasta 
//nao esquece de mudar embaixo do view
export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo02/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474040',
    padding: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
