import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';

import Att01 from './src/atividade1/Att01';

export default function App() {
  return (
    <View style={styles.container}>
      <Att01/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3cff00',
    padding: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});
