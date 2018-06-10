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

/*const disabledMapping = {
  primary: { color: colors.white, backgroundColor: colors.greenDisabled, borderColor: colors.extraLightGray, borderWidth: 1, fontFamily: fontFamilies.helveticaBold },
  secondary: { color: colors.navyDisabled, backgroundColor: colors.whiteDisabled, borderColor: colors.extraLightGray, borderWidth: 1, fontFamily: fontFamilies.helveticaBold },
  special: { color: colors.white, backgroundColor: colors.navyDisabled, borderColor: colors.extraLightGray, borderWidth: 1, fontFamily: fontFamilies.helveticaBold },
  danger: { color: colors.white, backgroundColor: colors.redDisabled, borderColor: colors.extraLightGray, borderWidth: 1, fontFamily: fontFamilies.helveticaBold }
};*/

type Size = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'stretch' | 'fullrectangle';
const sizeMapping = {
	xxsmall: { width: 94, height: 32, borderRadius: 0, paddingVertical: 8, fontSize: fontSizes.h4 },
	xsmall: { width: 171, height: 32, borderRadius: 0, paddingVertical: 8, fontSize: fontSizes.h4 },
	small: { width: 130, height: 38, borderRadius: 0, paddingVertical: 10, fontSize: fontSizes.h3 },
	medium: { width: 165, height: 38, borderRadius: 0, paddingVertical: 10, fontSize: fontSizes.h3 },
	large: { width: 285, height: 38, borderRadius: 0, paddingVertical: 10, fontSize: fontSizes.h3 },
	xlarge: { width: 345, height: 38, borderRadius: 0, paddingVertical: 10, fontSize: fontSizes.h3 },
	stretch: { width: '100%', height: 38, borderRadius: 0, paddingVertical: 10, fontSize: fontSizes.h3 },
	fullrectangle: { width: '100%', height: 38, borderRadius: 0, paddingVertical: 10, fontSize: fontSizes.h3 }
};

export default (props: {
	title: string;
	//onPress: () => void,
	onPress?: () => void;
	mode?: Mode;
	size?: Size;
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

	const size = props.size == undefined ? 'stretch' : props.size;
	const fontSize = sizeMapping[size].fontSize;
	const width = sizeMapping[size].width;
	const height = sizeMapping[size].height;
	const borderRadius = sizeMapping[size].borderRadius;
	const paddingVertical = sizeMapping[size].paddingVertical;

	return (
		<View>
			<TouchableOpacity
				style={{
					opacity: props.disabled ? 0.5 : 1,
					backgroundColor,
					borderRadius,
					overflow: 'hidden',
					borderColor,
					borderWidth,
					width,
					height,
					paddingVertical
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
					<Text style={{ color, fontFamily, fontSize, textAlign: 'center', paddingHorizontal: 10 }}>
						{props.title}
					</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};
