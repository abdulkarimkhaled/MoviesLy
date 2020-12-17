import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AppStyles from '../../config/styles'
import Images from '../../config/Images'
import { calcWidth, calcHeight } from '../../config/metrics'
import { strings } from '../../config/Local/localLanguagesController'
// import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient'
import styles from "./styles"
import NavigationService from '../../navigation/NavigationService'

let { Color } = AppStyles

export const NoInternet = (props) => {
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: 'transparent',
				position: 'absolute',
				zIndex: 10000,
				justifyContent: 'center',
				alignItems: 'center',

			}}
		>

			<Images source={"NoInternetImage"} />

			<Text style={{
				fontFamily: AppStyles.Fonts.Medium,
				fontSize: calcWidth(20),
				color: "#29304D",
				marginTop: calcHeight(8)
			}}>{strings("noNet")}</Text>

			<Text style={{
				fontFamily: AppStyles.Fonts.Regular,
				fontSize: calcWidth(14),
				color: "#ABABAB",
				textAlign: "center",
				marginTop: calcHeight(8)
			}}>{strings("noNetDesc")}</Text>

			{/*********** Login button ***********/}
			<TouchableOpacity style={[styles.button]} onPress={() => { NavigationService.goBack() }}>
				{/* <AnimatedLinearGradient customColors={AppStyles.Color.THEME_APP_GRADIENT} speed={1500} /> */}
				<Text style={[styles.buttonText]}>{strings("try")}</Text>
			</TouchableOpacity>

		</View>
	)
}

