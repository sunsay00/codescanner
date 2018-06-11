import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import Button from './button';

const Item = (props: { code: BarCode; onItemPress: () => void }) => (
	<View
		style={{
			backgroundColor: 'white',
			height: 50,
			flexDirection: 'row',
			alignItems: 'center',
			borderBottomColor: colors.border,
			borderBottomWidth: 1,
			paddingHorizontal: 10
		}}
	>
		<TouchableOpacity style={{ flex: 1 }} onPress={props.onItemPress}>
			<View>
				<Text style={{ fontFamily: fontFamilies.normal, fontSize: fontSizes.h1, color: colors.text }}>
					{props.code.code}
				</Text>
			</View>
		</TouchableOpacity>
	</View>
);

export default (props: {
	loading: boolean;
	awb: AWB;
	onItemPress: (awb: AWB, code: BarCode) => void;
	onScan: (awb: AWB) => void;
	onCodeDelete: (awb: AWB, code: BarCode) => void;
}) => (
	<View style={{ height: '100%', backgroundColor: colors.background }}>
		{props.awb.codes == undefined || props.awb.codes.length == 0 ? (
			<View
				style={{
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Text
					style={{
						paddingBottom: 20,
						fontFamily: fontFamilies.bold,
						color: colors.borderDark,
						fontSize: fontSizes.h1
					}}
				>
					You have not scan any code yet
				</Text>
				<TouchableOpacity
					style={{
						width: 150,
						height: 150,
						borderRadius: 75,
						backgroundColor: colors.buttonBackground,
						justifyContent: 'center',
						alignItems: 'center'
					}}
					onPress={() => props.onScan(props.awb)}
				>
					<Text
						style={{ color: colors.buttonFontColor, fontFamily: fontFamilies.bold, fontSize: fontSizes.h1 }}
					>
						Start Scanning
					</Text>
				</TouchableOpacity>
			</View>
		) : (
			<ScrollView>
				<View
					style={{
						width: '100%',
						backgroundColor: colors.background
					}}
				>
					{props.awb.codes.map((item) => (
						<Item key={item.code} code={item} onItemPress={() => props.onItemPress(props.awb, item)} />
					))}
				</View>
				)} />
				<View style={{ paddingTop: 10 }}>
					<Button mode="primary" title="Continue Scanning" onPress={() => props.onScan(props.awb)} />
				</View>
			</ScrollView>
		)}
	</View>
);
