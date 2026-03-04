import{View, Text} from 'react-native'

import styles from './styles'

function att01 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Text style={styles.texto}>
                aula de react native com expo
            </Text>
            <Text style={styles.texto2}>
                um texto qualquer ai 
            </Text>
            <Text style={styles.texto3}>
    <           Text style={styles.textoPreto}>FLA</Text>
                <Text style={styles.textoVermelho}>MENGO!!!</Text>
            </Text>
        </View>
    );
}

export default att01;