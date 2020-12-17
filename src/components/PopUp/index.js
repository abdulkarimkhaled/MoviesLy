import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import styles from './styles';
import Images from '../../config/Images';




type Props = {
    show: true | false,
    changeShow: Function
}




export default PopUp = (props: Props) => {

    const [show, setShow] = useState(props.show)
    const fadeAnim = new Animated.Value(0);
    // alert("parent : " + props.show + " " + show)


    const open = () => {
        let delayTime = 0
        Animated.parallel([
            Animated.timing(
                fadeAnim,
                { toValue: 1, duration: 200, delay: delayTime, useNativeDriver: true },
            ),

        ]).start(() => {
            props.changeShow(true)
            // currentThread = setTimeout(this.close, 2000)
        })

    }

    const close = () => {
        let delayTime = 0
        Animated.parallel([
            Animated.timing(
                fadeAnim,
                { toValue: 0, duration: 200, delay: delayTime, useNativeDriver: true },
            ),

        ]).start(() => {
            setShow(false)
            props.changeShow(false)
        })

    }

    useEffect(() => {
        if (!show && props.show) {
            setShow(props.show)
        }
        else if (show && !props.show) {
            close()
        }

    }, [props.show])

    useEffect(() => {
        if (show) {
            open()
        }
    }, [show])

    //Render
    return (
        show ?
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                <TouchableOpacity style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} activeOpacity={1} onPress={() => close()}>
                    {props.children}
                </TouchableOpacity>
            </Animated.View>
            : null
    )

}
