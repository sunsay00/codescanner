import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import { Button, Icon } from 'react-native-elements';
import Frame from './frame';

const Item = (props: { code: BarCode; onItemPress: () => void }) => (
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
		<TouchableOpacity style={{ flex: 1 }} onPress={props.onItemPress}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ flex: 8 }}>
					<Text
						style={{
							fontFamily: fontFamilies.normal,
							fontSize: fontSizes.h2,
							color: colors.text,
							paddingLeft: 10
						}}
					>
						{props.code.code}
					</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Icon name="angle-right" type="font-awesome" color={colors.text} size={25} />
				</View>
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
	<View>
		{props.awb.codes == undefined || props.awb.codes.length == 0 ? (
			<Frame>
				<View
					style={{
						width: '100%',
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Button
						title="START SCANNING"
						icon={<Icon name="arrow-circle-right" type="font-awesome" size={20} color="white" />}
						iconRight
						onPress={() => props.onScan(props.awb)}
						buttonStyle={{
							width: '100%',
							height: 50,
							borderRadius: 25,
							backgroundColor: colors.buttonBackground
						}}
						titleStyle={{ fontFamily: fontFamilies.normal }}
					/>
				</View>
			</Frame>
		) : (
			<Frame>
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
				</ScrollView>
				<Button
					icon={<Icon name="arrow-circle-right" type="font-awesome" size={20} color="white" />}
					iconRight
					title="CONTINUE SCANNING"
					onPress={() => props.onScan(props.awb)}
					titleStyle={{ fontFamily: fontFamilies.normal }}
					buttonStyle={{
						backgroundColor: colors.buttonBackground,
						borderRadius: 0
					}}
				/>
			</Frame>
		)}
	</View>
);
