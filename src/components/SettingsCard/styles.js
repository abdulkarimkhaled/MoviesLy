import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';


const styles = StyleSheet.create({
    container: {
        width: calcWidth(285),
        height: calcHeight(41),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F0F4F9",
        borderRadius: calcWidth(10)
    },


    titleText: {
        fontFamily: AppStyles.Fonts.Regular,
        fontSize: calcWidth(14),
        color: AppStyles.Color.TEXT_GRAY,
        alignSelf: "center",
        width: calcWidth(246),
        paddingHorizontal: calcWidth(20),
        // backgroundColor: "red"
    }


});

export default styles;
