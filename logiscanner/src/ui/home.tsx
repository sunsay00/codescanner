import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import { Button, Input, Icon } from 'react-native-elements';
import Frame from './frame';

const ItemDetail = (props: { icon: string; value: string }) => (
	<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
		<Icon name={props.icon} type="font-awesome" color={colors.app} size={15} />
		<Text
			style={{
				fontFamily: fontFamilies.normal,
				fontSize: fontSizes.h2,
				color: colors.text,
				paddingLeft: 10
			}}
		>
			{props.value}
		</Text>
	</View>
);

const Item = (props: { awb: AWB; selected: boolean; onItem: () => void; onSelect: () => void }) => (
	<View>
		<View
			style={{
				backgroundColor: colors.background,
				height: 100,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				borderBottomWidth: 1,
				borderBottomColor: colors.border,
				paddingHorizontal: 20
			}}
		>
			<TouchableOpacity style={{ flex: 10 }} onPress={props.onItem}>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
					<View style={{ flex: 2, alignItems: 'flex-start' }}>
						<ItemDetail icon="book" value={props.awb.awbNumnber} />
					</View>
					<View style={{ flex: 1, alignItems: 'flex-start' }}>
						<ItemDetail icon="hashtag" value={props.awb.totalCodes.toString()} />
					</View>
				</View>
				<View style={{ height: 5 }} />
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={{ flex: 2, alignItems: 'flex-start' }}>
						<ItemDetail icon="columns" value={props.awb.houseNumber} />
					</View>
					<View style={{ flex: 1, alignItems: 'flex-start' }}>
						<ItemDetail
							icon="barcode"
							value={
								props.awb.codes == undefined ||
								props.awb.codes.filter((c) => !c.isUploaded).length == 0 ? (
									'--'
								) : (
									props.awb.codes.filter((c) => !c.isUploaded).length.toString()
								)
							}
						/>
					</View>
				</View>
				<View style={{ height: 5 }} />
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={{ flex: 2, alignItems: 'flex-start' }}>
						<ItemDetail icon="list" value={props.awb.poNumber} />
					</View>
					<View style={{ flex: 1, alignItems: 'flex-start' }}>
						<ItemDetail
							icon="arrow-circle-up"
							value={
								props.awb.codes == undefined ||
								props.awb.codes.filter((c) => c.isUploaded).length == 0 ? (
									'--'
								) : (
									props.awb.codes.filter((c) => c.isUploaded).length.toString()
								)
							}
						/>
					</View>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={{ flex: 1 }}
				onPress={props.onSelect}
				disabled={
					props.awb.codes == null ||
					props.awb.codes.length == 0 ||
					props.awb.codes.filter((c) => !c.isUploaded).length == 0
				}
			>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						width: 25,
						height: 25,
						backgroundColor: props.selected ? colors.app : colors.background,
						borderRadius: 4,
						borderWidth: 1,
						borderColor:
							props.awb.codes == undefined || props.awb.codes.length == 0 ? colors.background : colors.app
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
	<Frame>
		<Input
			leftIcon={<Icon name="search" type="font-awesome" size={20} color="#ccccd1" />}
			inputStyle={{
				backgroundColor: colors.background,
				color: colors.text,
				borderBottomWidth: 1,
				borderBottomColor: colors.border,
				fontFamily: fontFamilies.normal,
				fontSize: fontSizes.h1
			}}
			containerStyle={{
				backgroundColor: colors.background,
				width: '100%',
				height: 40,
				borderBottomWidth: 1,
				borderBottomColor: colors.border
			}}
			onChangeText={props.onSearchText}
			autoCapitalize="none"
			keyboardType="default"
			autoCorrect={false}
		/>
		<ScrollView style={{ flex: 1 }}>
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
		<Button
			icon={<Icon name="arrow-circle-up" type="font-awesome" size={20} color="white" />}
			loading={props.loading}
			iconRight
			title="UPLOAD"
			disabled={props.loading || props.selected == undefined || props.selected.length == 0}
			onPress={props.onUpload}
			titleStyle={{ fontFamily: fontFamilies.normal }}
			buttonStyle={{
				backgroundColor: colors.buttonBackground,
				borderRadius: 0
			}}
		/>
	</Frame>
);
