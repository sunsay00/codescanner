import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import Button from './button';

const Item = (props: { awb: AWB; selected: boolean; onItem: () => void; onSelect: () => void }) => (
	<View style={{ paddingTop: 5 }}>
		<View
			style={{
				backgroundColor: 'white',
				height: 100,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				paddingLeft: 20,
				paddingRight: 10,
				borderRadius: 15
			}}
		>
			<TouchableOpacity style={{ flex: 10 }} onPress={props.onItem}>
				<Text style={{ fontFamily: fontFamilies.normal, fontSize: fontSizes.h2, color: colors.text }}>
					{props.awb.awbNumnber}
				</Text>
				<View style={{ height: 5 }} />
				<Text style={{ fontFamily: fontFamilies.normal, fontSize: fontSizes.h2, color: colors.text }}>
					{props.awb.houseNumber}
				</Text>
				<View style={{ height: 5 }} />
				<Text style={{ fontFamily: fontFamilies.normal, fontSize: fontSizes.h2, color: colors.text }}>
					{props.awb.poNumber}
				</Text>
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
						backgroundColor: props.selected ? colors.buttonBackground : 'white',
						borderRadius: 4,
						borderWidth: 1,
						borderColor:
							props.awb.codes == undefined || props.awb.codes.length == 0
								? colors.border
								: colors.borderDark
					}}
				>
					{props.selected && (
						<Image source={require('./img/ic_check.png')} style={{ width: 15, height: 15 }} />
					)}
				</View>
			</TouchableOpacity>
		</View>
	</View>
);

export default (props: {
	loading: boolean;
	awbs: AWB[];
	selected: string[];
	onItemPress: (awb: AWB) => void;
	onUpload: () => void;
	onSelect: (awb: string) => void;
	onSearchText: (text: string) => void;
}) => (
	<View
		style={{
			backgroundColor: colors.background,
			height: '100%',
			marginBottom: -40
		}}
	>
		<View
			style={{
				width: '100%',
				paddingLeft: 10,
				height: 40,
				justifyContent: 'center',
				backgroundColor: 'white'
			}}
		>
			<TextInput
				keyboardType="default"
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				style={{ height: 30, fontFamily: fontFamilies.normal, fontSize: fontSizes.h1 }}
				onChangeText={props.onSearchText}
			/>
		</View>
		<View style={{ paddingHorizontal: 15 }}>
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
			<View style={{ paddingTop: 10 }}>
				<Button
					title="Upload"
					disabled={props.selected == undefined || props.selected.length == 0}
					onPress={props.onUpload}
				/>
			</View>
		</View>
	</View>
);
