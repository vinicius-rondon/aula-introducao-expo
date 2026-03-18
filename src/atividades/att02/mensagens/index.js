import { View, Text, Image } from 'react-native';

import styles from './styles';

function Card({ titulo, preco, descricao,img }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Image source={img} style={styles.imagem} />
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>{preco}</Text>

        </View>
    );
}

export default Card;