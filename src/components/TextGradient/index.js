import React, { } from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

export default GradientText = (props: Props) => {
    //Gradient Text component
    return (
        <MaskedView maskElement={
            <Text {...props} />
        }>
            <LinearGradient colors={props.colors} start={{ x: 0, y: 0 }} end={{ x: 1.6, y: 0 }}>
                <Text {...props} style={[props.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    )
}
