import React, { } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Images from '../../config/Images';
import NavigationService from '../../navigation/NavigationService';
import { getAppLanguage } from "../../config/Local/localLanguagesController"



type Props = {
    title: String,
    hiddenBack: True | False
}




export default Header = (props: Props) => {
    let { title, hiddenBack } = props

    //Render
    return (
        <View style={[styles.container, (hiddenBack && { backgroundColor: "transparent" })]}>

            <View style={styles.child}>

                {/*********** Back Button ***********/}
                <TouchableOpacity style={styles.leftButton} onPress={() => NavigationService.goBack()}>
                    <Images source={"Back"} rotateDegree={getAppLanguage() == "ar" ? 180 : 0} />
                    <Text numberOfLines={1} style={styles.titleText}>{title}</Text>
                </TouchableOpacity>

                {/*********** Title Text ***********/}

            </View>



        </View>
    )

}
