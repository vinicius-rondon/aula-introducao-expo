import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import Exemplo01 from './src/exemplos/ex01';
import Exemplo05 from './src/exemplos/ex05';
import Exemplo06 from './src/exemplos/ex06';
import Exemplo07 from './src/exemplos/ex07';

//import Att01 from './src/atividades/Att01';
//import Att02 from './src/atividades/att-02';
import Att03 from './src/atividades/Att03';
import Att04 from './src/atividades/Att04'
import Att05 from './src/atividades/Att05'


//para importar os exemplos escreva exatamente como esta no arquivo q esta em sua respectiva pasta 
//nao esquece de mudar embaixo do view
export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo07/>
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
