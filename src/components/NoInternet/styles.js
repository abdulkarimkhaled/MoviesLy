import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: AppStyles.Color.BACKGROUND_COLOR
    },

    scrollContainer: {
        alignItems: "center",
        width: calcWidth(375),
        paddingBottom: calcHeight(50)
    },

    logo: {
        marginTop: calcHeight(105)
    },

    loginView: {
        width: calcWidth(325),
        height: calcHeight(172),
        alignItems: "center",
        backgroundColor: AppStyles.Color.WHITE,
        borderRadius: calcWidth(15),
        marginTop: calcHeight(40),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        width: calcWidth(285),
        paddingVertical: calcHeight(10),
        paddingLeft: calcWidth(20),
        paddingRight: calcWidth(40),
        backgroundColor: "#F0F4F9",
        borderRadius: calcWidth(10),
        fontFamily: AppStyles.Fonts.Regular,
        fontSize: calcWidth(14),
        color: "#29304D"
    },

    textInputImage: {
        position: "absolute",
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: calcWidth(40)
    },

    forgotView: {
        width: calcWidth(335),
        alignItems: "flex-end",
    },

    forgotText: {
        fontFamily: AppStyles.Fonts.Regular,
        color: AppStyles.Color.TEXT_GRAY,
        fontSize: calcWidth(14),
        padding: calcWidth(10)
    },

    button: {
        borderRadius: calcWidth(10),
        width: calcWidth(207),
        height: calcHeight(47),
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginTop: calcHeight(35)
    },

    buttonText: {
        fontFamily: AppStyles.Fonts.Regular,
        fontSize: calcWidth(18),
        color: AppStyles.Color.WHITE
    },

    registerView: {
        width: calcWidth(335),
        marginTop: calcHeight(20),
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "row"
    },

    registerText: {
        fontFamily: AppStyles.Fonts.Regular,
        color: AppStyles.Color.TEXT_GRAY,
        fontSize: calcWidth(16),
        color: "#29304D",
        paddingVertical: calcHeight(5)
    },
    registerTextButoon: {
        color: "#005EA3",
        textDecorationLine: "underline",
        paddingBottom: calcHeight(5),
        paddingHorizontal: calcWidth(5)
    },


});

export default styles;
