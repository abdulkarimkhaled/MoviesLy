import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: "center",
        zIndex: 10001,
        position: "absolute",
        backgroundColor: AppStyles.Color.rgba(250, 250, 252, 0.6)
    },

});

export default styles;
