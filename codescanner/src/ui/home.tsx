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
			justifyContent: 'center',
			borderBottomColor: colors.border,
			borderBottomWidth: 1,
			paddingHorizontal: 10
		}}
	>
		<TouchableOpacity style={{ flex: 10 }} onPress={props.onItem}>
			<Text style={{ fontFamily: fontFamilies.normal, fontSize: fontSizes.h1 }}>{props.awb.awbNumnber}</Text>
		</TouchableOpacity>

		<TouchableOpacity
			style={{ flex: 1 }}
			onPress={props.onSelect}
			disabled={props.awb.codes == null || props.awb.codes.length == 0}
		>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					width: 25,
					height: 25,
					backgroundColor: props.selected ? colors.buttonBackground : colors.background,
					borderRadius: 4,
					borderWidth: 1,
					borderColor:
						props.awb.codes == undefined || props.awb.codes.length == 0 ? colors.border : colors.borderDark
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
	<View>
		<ScrollView>
			{props.awbs.map((item) => (
				<Item
					key={item.id}
					awb={item}
					selected={props.selected.indexOf(item.id) != -1}
					onItem={() => props.onItemPress(item)}
					onSelect={() => props.onSelect(item.id)}
				/>
			))}
		</ScrollView>
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
