import * as React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';

type Mode = 'primary' | 'danger';
const modeMapping = {
	primary: {
		color: colors.buttonFontColor,
		backgroundColor: colors.buttonBackground,
		borderWidth: 0,
		fontFamily: fontFamilies.bold
	},
	danger: {
		color: colors.buttonFontColor,
		backgroundColor: 'red',
		borderWidth: 0,
		fontFamily: fontFamilies.bold
	}
};

const ghostMapping = {
	primary: {
		color: colors.buttonBackground,
		backgroundColor: colors.buttonFontColor,
		borderColor: colors.buttonGhostBorder,
		borderWidth: 1,
		fontFamily: fontFamilies.bold
	},
	danger: {
		color: colors.buttonBackground,
		backgroundColor: colors.buttonFontColor,
		borderColor: colors.buttonGhostBorder,
		borderWidth: 1,
		fontFamily: fontFamilies.bold
	}
};

export default (props: {
	title: string;
	//onPress: () => void,
	onPress?: () => void;
	mode?: Mode;
	disabled?: boolean;
	ghost?: boolean;
	loading?: boolean;
}) => {
	const mode = props.mode == undefined ? 'primary' : props.mode;
	const ghost = props.ghost == undefined ? 'primary' : props.ghost;
	const fontFamily = modeMapping[mode].fontFamily;
	const color = props.ghost ? ghostMapping[mode].color : modeMapping[mode].color;
	const backgroundColor = props.ghost ? ghostMapping[mode].backgroundColor : modeMapping[mode].backgroundColor;
	const borderColor = props.ghost ? ghostMapping[mode].borderColor : modeMapping[mode].backgroundColor;
	const borderWidth = props.ghost ? ghostMapping[mode].borderWidth : modeMapping[mode].borderWidth;

	return (
		<View style={{ borderRadius: 20 }}>
			<TouchableOpacity
				style={{
					opacity: props.disabled ? 0.5 : 1,
					backgroundColor,
					overflow: 'hidden',
					borderColor,
					borderWidth,
					height: 40,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 30
				}}
				disabled={props.disabled}
				onPress={props.onPress}
			>
				{props.loading ? (
					<ActivityIndicator
						size="small"
						color={props.ghost ? colors.buttonBackground : colors.buttonFontColor}
						style={{ paddingBottom: 5 }}
					/>
				) : (
					<Text
						style={{
							color,
							fontFamily,
							fontSize: fontSizes.h1,
							textAlign: 'center',
							paddingHorizontal: 10
						}}
					>
						{props.title}
					</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};
