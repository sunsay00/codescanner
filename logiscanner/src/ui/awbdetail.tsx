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
				<Icon name="barcode" type="font-awesome" color="#50b8ea" size={15} />
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
					<Text
						style={{
							paddingBottom: 20,
							fontFamily: fontFamilies.bold,
							color: colors.text,
							fontSize: fontSizes.h1
						}}
					>
						You have not scan any code yet
					</Text>
					<Button
						title="START SCANNING"
						icon={<Icon name="barcode" type="font-awesome" size={20} color="white" />}
						iconRight
						onPress={() => props.onScan}
						buttonStyle={{ width: 270 }}
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
					<View style={{ paddingTop: 10 }}>
						<Button
							icon={<Icon name="barcode" type="font-awesome" size={20} color="white" />}
							iconRight
							title="CONTINUE SCANNING"
							onPress={() => props.onScan(props.awb)}
						/>
					</View>
				</ScrollView>
			</Frame>
		)}
	</View>
);
