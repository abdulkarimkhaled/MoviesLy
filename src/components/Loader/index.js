import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AppStyles from '../../config/styles'

let { Color } = AppStyles

export const Loader = (props) => {
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: props.closeOpacity ? 'transparent' : 'rgba(0,0,0,.4)',
				// backgroundColor:"red",
				position: 'absolute',
				zIndex: 10000,
				justifyContent: 'center',
				alignItems: 'center',

			}}
		>
			<ActivityIndicator
				color={props.color ? props.color : Color.THEME_APP_DARK}
				size={props.small ? 'small' : 'large'}
			/>
		</View>
	)
}
