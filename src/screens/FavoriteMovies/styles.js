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
        borderBottomLeftRadius: calcWidth(0),
        borderBottomRightRadius: calcWidth(30),
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: { fontSize: calcWidth(32), fontWeight: 'bold' },
    headerBottomLine: { width: '100%', height: calcHeight(2) },
    searchContainer: {
        marginTop: calcHeight(16), width: calcWidth(320),
        backgroundColor: '#fff',
        height: calcHeight(40),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: calcWidth(8),
        overflow: 'hidden'
    },
    searchInput: {
        width: calcWidth(268),
    },
    backIcon: { padding: calcWidth(10), marginRight: calcWidth(20) },
    movieTitle: {
        color: '#fff',
        marginTop: calcHeight(6),
        fontSize: calcWidth(16),
        fontWeight: '500',
        marginLeft: calcWidth(6),
        maxWidth: calcWidth(300)
    },
    info: {
        color: '#fff',
        fontSize: calcWidth(12),
        fontWeight: '500',
        marginLeft: calcWidth(6),
        marginTop: calcHeight(2),
        maxWidth: calcWidth(300)
    },
    floatingToToP: {
        position: 'absolute',
        zIndex: 999,
        bottom: calcWidth(20),
        right: calcWidth(20),
        width: calcWidth(50),
        height: calcWidth(50),
        borderRadius: calcWidth(25),
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default styles;
