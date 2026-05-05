import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native-web";

export default function Index() {

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [total, setTotal] = useState('');

  function soma() {
    // ❌ antes: setTotal(n1+n2);
    // ✅ agora: converti para número pra não concatenar string
    setTotal(Number(n1) + Number(n2));
  }

  return (
    
    // ❌ antes: vários elementos soltos
    // ✅ agora: tudo dentro de uma View (obrigatório no React)
    <View>

      <Text style={styles.textLabel}> 1 numero </Text>

      <TextInput 
        // ❌ antes: Style (maiúsculo)
        // ✅ agora: style (minúsculo)
        style={styles.txtEntrada}

        // ❌ antes: onChargeText (não existe)
        // ✅ agora: onChangeText (correto)
        onChangeText={(entrada) => setN1(entrada)}

        // ❌ antes: value={"n1"} (string fixa)
        // ✅ agora: value={n1} (estado correto)
        value={n1}
      />

      <Text style={styles.textLabel}> 2 numero </Text>

      <TextInput 
        style={styles.txtEntrada}

        // mesma correção aqui
        onChangeText={(entrada) => setN2(entrada)}

        // mesma correção aqui
        value={n2}
      />

      <Text style={styles.textLabel}> Total: {total} </Text>  
      <TextInput
        style={styles.txtEntrada}
        value={total}
        editable={false}
      />
    <TouchableOpacity style={styles.button} onPress={soma}>
          <Text style={styles.textButton}> Somar </Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF80AB',
    padding: 8,
  },

  paragraph: {
    margin: 6,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#C51162',
  },

  txtSaida: {
    margin: 6,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E91E63',
  },

  txtEntrada: {
    borderWidth: 4,
    textAlign: 'center',
    fontSize: 22,
    borderColor: '#E91E63',
    height: 40,
    borderRadius: 10,
    marginTop: 10,
  },

  textButton: {
    fontSize: 22,
    color: '#FF80AB',
    textAlign: 'center',
  },

  textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C51162',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#E91E63',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});