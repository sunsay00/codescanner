import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import { Button, Input, Icon } from 'react-native-elements';

const Item = (props: { awb: AWB; selected: boolean; onItem: () => void; onSelect: () => void }) => (
	<View style={{ paddingTop: 5 }}>
		<View
			style={{
				backgroundColor: colors.background,
				height: 100,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				paddingLeft: 20,
				paddingRight: 10,
				borderRadius: 15,
				borderWidth: 1,
				borderColor: colors.border
			}}
		>
			<TouchableOpacity style={{ flex: 10 }} onPress={props.onItem}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon name="book" type="font-awesome" color="#50b8ea" size={15} />
					<Text
						style={{
							fontFamily: fontFamilies.normal,
							fontSize: fontSizes.h2,
							color: colors.text,
							paddingLeft: 10
						}}
					>
						{props.awb.awbNumnber}
					</Text>
				</View>
				<View style={{ height: 5 }} />
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon name="columns" type="font-awesome" color="#50b8ea" size={15} />
					<Text
						style={{
							fontFamily: fontFamilies.normal,
							fontSize: fontSizes.h2,
							color: colors.text,
							paddingLeft: 10
						}}
					>
						{props.awb.houseNumber}
					</Text>
				</View>
				<View style={{ height: 5 }} />
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon name="dehaze" color="#50b8ea" size={15} />
					<Text
						style={{
							fontFamily: fontFamilies.normal,
							fontSize: fontSizes.h2,
							color: colors.text,
							paddingLeft: 10
						}}
					>
						{props.awb.poNumber}
					</Text>
				</View>
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
							props.awb.codes == undefined || props.awb.codes.length == 0 ? colors.border : '#00c6ae'
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
				height: 40,
				justifyContent: 'center',
				backgroundColor: colors.background
			}}
		>
			<Input
				leftIcon={<Icon name="search" type="font-awesome" size={20} color="#ccccd1" />}
				inputStyle={{ backgroundColor: colors.background, color: 'white' }}
				containerStyle={{ backgroundColor: colors.background, width: '100%' }}
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
			<View style={{ paddingTop: 10 }} />
			<Button
				icon={<Icon name="arrow-circle-up" type="font-awesome" size={20} color="white" />}
				buttonStyle={{ backgroundColor: '#506da3' }}
				loading={props.loading}
				iconRight
				title="UPLOAD"
				disabled={props.loading || props.selected == undefined || props.selected.length == 0}
				onPress={props.onUpload}
			/>
		</View>
	</View>
);
