import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth } from '../../config/metrics';


const styles = StyleSheet.create({
    partitionContainer: { marginTop: calcHeight(26), width: calcWidth(320), flexDirection: 'row' },
    partitionKnob: {
        width: calcWidth(4),
        height: '100%',
        borderRadius: calcWidth(10),
    },
    partitionText: { color: 'white', marginLeft: calcWidth(14), fontSize: calcWidth(20), fontWeight: 'bold' }
});

export default styles;
