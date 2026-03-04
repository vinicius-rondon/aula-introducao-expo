import{View, Text} from 'react-native'

import styles from '../../atividade1/att01/styles'

function Exemplo01 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Text style={styles.texto}>
                aula de react native com expo
            </Text>
        </View>
    );
}

export default Exemplo01;