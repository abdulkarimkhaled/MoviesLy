import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1
    },
    headerContainer: {
        paddingTop: calcHeight(35),
        paddingBottom: calcHeight(10),
        backgroundColor: '#000',
        width: '100%',
        paddingHorizontal: calcWidth(24),
        flexDirection: 'row',
    },
    headerText: { fontSize: calcWidth(32), fontWeight: 'bold' },
    headerBottomLine: { width: '100%', height: calcHeight(2) },
    partitionContainer: { marginTop: calcHeight(26), width: calcWidth(320), flexDirection: 'row' },
    partitionKnob: {
        width: calcWidth(4),
        height: '100%',
        borderRadius: calcWidth(10),
    },
    partitionText: { color: 'white', marginLeft: calcWidth(14), fontSize: calcWidth(20), fontWeight: 'bold' },
    backIcon: { padding: calcWidth(10), marginRight: calcWidth(20) },

});

export default styles;
