import {StyleSheet } from 'react-native'
import { RFPercentage} from "react-native-responsive-fontsize";


const style = StyleSheet.create({
   container :{
        backgroundColor: '#fffb00',
        // margin : 20,
        padding: RFPercentage(2),
        flex: 1,
        borderRadius: RFPercentage(2),

    },
    titulo: {
        fontSize: RFPercentage(3),
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: RFPercentage(5),
        fontFamily: 'sans-serif-light',
    },
    texto:{
        fontSize: RFPercentage(2),
        fontStyle: 'italic',
        fontFamily: 'sans-serif-condensed',
        
    }
});

export default style
