import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo04() {

    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');

    function handlExibeNome() {
        setNomeCompleto(`${nome} ${sobreNome}`);
        setNome('');
        setSobreNome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.txt}>{nomeCompleto}</Text>

            <Text style={styles.txtNome}>nome</Text>
            <TextInput
                onChangeText={setNome}
                value={nome}
                placeholder=''
                maxLength={10}
                style={styles.input}
            />

            <Text style={styles.txtSobreNome}>sobrenome</Text>
            <TextInput
                onChangeText={setSobreNome}
                value={sobreNome}
                placeholder=''
                maxLength={10}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handlExibeNome()}
            >
                <Text style={styles.txtBotao}>Exibir nome completo</Text>
            </TouchableOpacity>

        </View>
    );
}


