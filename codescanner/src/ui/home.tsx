import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import Button from './button';

const Item = (props: { awb: AWB; selected: boolean; onItem: () => void; onSelect: () => void }) => (
	<View
		style={{
			backgroundColor: colors.background,
			height: 50,
			flexDirection: 'row',
			alignItems: 'center',
			borderBottomColor: colors.border,
			borderBottomWidth: 1,
			paddingHorizontal: 10
		}}
	>
		<TouchableOpacity style={{ flex: 10 }} onPress={props.onItem}>
			<View>
				<Text>{props.awb.awbNumnber}</Text>
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					width: 25,
					height: 25,
					backgroundColor: props.selected ? colors.buttonBackground : colors.background,
					borderRadius: 4,
					borderWidth: 1,
					borderColor: '#bababa'
				}}
			>
				{props.selected && <Image source={require('./img/ic_check.png')} style={{ width: 15, height: 15 }} />}
			</View>
		</TouchableOpacity>
	</View>
);

export default (props: {
	loading: boolean;
	awbs: AWB[];
	selected: string[];
	onItemPress: (awb: AWB) => void;
	onUpload: () => void;
	onSelect: (awb: string) => void;
}) => (
	<View style={{ flex: 1 }}>
		<View>
			<ScrollView>
				<View
					style={{
						width: '100%',
						backgroundColor: colors.background
					}}
				>
					{props.awbs.map((item) => (
						<Item
							key={item.id}
							awb={item}
							selected={props.selected.indexOf(item.id) != -1}
							onItem={() => props.onItemPress(item)}
							onSelect={() => props.onSelect(item.id)}
						/>
					))}
				</View>
				)} />
			</ScrollView>
		</View>
		<View>
			<Button
				mode="primary"
				title="Upload"
				disabled={props.selected == undefined || props.selected.length == 0}
				onPress={props.onUpload}
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	iphonex: {
		flex: 1,
		marginBottom: 40,
		marginTop: 20
	},
	notIphonex: {
		flex: 1,
		marginBottom: 0,
		marginTop: 0
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: colors.background
	},
	content: {
		flex: 7
	},
	chooseContainer: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: colors.border
	},
	chooseSelected: {
		//borderBottomWidth: 0.5,
		//borderBottomColor: colors.lightGray,
		height: 48,
		alignSelf: 'stretch',
		backgroundColor: colors.background,
		paddingHorizontal: 15,
		paddingVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	choose: {
		height: 48,
		alignSelf: 'stretch',
		backgroundColor: colors.background,
		paddingHorizontal: 15,
		paddingVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	choosePrimaryContainer: {
		flex: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	choosePrimarySelectedText: {
		fontFamily: fontFamilies.bold,
		fontSize: fontSizes.h2,
		justifyContent: 'center'
	},
	choosePrimaryText: {
		fontFamily: fontFamilies.normal,
		fontSize: fontSizes.h2,
		justifyContent: 'center'
	},
	chooseSecondaryContainer: {
		flexDirection: 'row',
		flex: 4,
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderLeftWidth: 1
	}
});
