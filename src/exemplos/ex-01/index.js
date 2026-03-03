import{View, Text} from 'react-native'

import styles from './styles'

function Exemplo01 (){
    return(
        <View style={styles.conteiner}>
            <Text styles={styles.titulo}>Exemplo 1</Text>
            <Text styles={styles.texto}>
                aula de react native com expo
            </Text>
        </View>
    );
}

export default Exemplo01;