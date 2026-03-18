import { View, Text} from 'react-native';

import styles from './styles';

import azul from '../../../assets/brasilAzul.jpg';
import amarela from '../../../assets/brasilAmarela.png';
import preta from '../../../assets/brasilPreta.jpg';

import Card from './card';

function Att02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>camisas de time</Text>

        <Card
          titulo={'Camisa Brasil Amarela Versão Jogador'}
          img={amarela}
          descricao={'Principal Camisa Da Seleção Brasileira'}
          preco={'R$ 799,99'}
        />
        <Card
          titulo={'Camisa Brasil Azul Versão Torcedor '}
          img={azul}
          descricao={'Segunda Camisa Da Seleção Brasileira'}
          preco={'R$ 399,99'}
        />
        <Card
          titulo={'Camisa Do Brasil Preta Versão Fã '}
          img={preta}
          descricao={'Camisa Da Seleção Versão Nordeste '}
          preco={'R$ 99,99'}
        />
          


        </View>
    );
}

export default Att02;