import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AppStyles from '../../config/styles'
import Images from '../../config/Images'
import { calcWidth, calcHeight } from '../../config/metrics'
import { strings } from '../../config/Local/localLanguagesController'

let { Color } = AppStyles

export const NoData = (props) => {
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

			<Images source={"NoDataImage"} />

			<Text style={{
				fontFamily: AppStyles.Fonts.Medium,
				fontSize: calcWidth(20),
				color: "#29304D",
				marginTop: calcHeight(8)
			}}>{strings("noData")}</Text>

			<Text style={{
				fontFamily: AppStyles.Fonts.Regular,
				fontSize: calcWidth(14),
				color: "#ABABAB",
				textAlign: "center",
				marginTop: calcHeight(8)
			}}>{strings("noDataDesc")}</Text>

		</View>
	)
}
