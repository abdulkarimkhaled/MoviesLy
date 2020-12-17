import React, { } from 'react';
import { View, TouchableOpacity, Text, Settings } from 'react-native';
import styles from './styles';
import Images from '../../config/Images';
import NavigationService from '../../navigation/NavigationService';
import { getAppLanguage } from "../../config/Local/localLanguagesController"



type Props = {
    title: String,
    icon: Component,
    onPress?: Function,
    textStyle?: StyleSheet
}


export default SettingsCard = (props: Props) => {
    let { title, icon, onPress, textStyle } = props

    //Render
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={onPress ? 0.2 : 1}>

            <Text numberOfLines={1} style={[styles.titleText, (!icon && { width: "100%" }), textStyle ? textStyle : {}]}>{title}</Text>

            {icon ? icon : null}

        </TouchableOpacity>
    )

}
