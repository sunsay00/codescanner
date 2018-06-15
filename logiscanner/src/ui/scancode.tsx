import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import { Button, Icon, Overlay, ButtonGroup } from 'react-native-elements';
import Frame from './frame';

export default (props: { code: BarCode; awb: AWB; onCodeDelete: (awb: AWB, code: BarCode) => void }) => (
	<View>
		<Frame>
			{/*
			<View style={{ width: '100%', paddingHorizontal: 40 }}>
				<Overlay
					isVisible={true}
					windowBackgroundColor="#eceeee"
					overlayBackgroundColor={colors.app}
					width="100%"
					height={210}
					containerStyle={{ paddingHorizontal: 40 }}
					overlayStyle={{ borderRadius: 20 }}
				>
					<View style={{ paddingTop: 60 }}>
						<ButtonGroup
							onPress={this.updateIndex}
							selectedIndex={0}
							buttons={[ 'YES', 'NO' ]}
							containerStyle={{ height: 40, alignItems: 'center', justifyContent: 'center' }}
							textStyle={{ fontFamily: fontFamilies.normal, fontSize: fontSizes.h1 }}
						/>
					</View>
				</Overlay>
			</View>
			*/}
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
					paddingHorizontal: 40,
					height: 50,
					flex: 1
				}}
			>
				<View
					style={{
						borderBottomWidth: 1,
						borderColor: colors.border,
						width: '100%',
						alignItems: 'center'
					}}
				>
					<Text style={{ fontFamily: fontFamilies.normal, fontSize: 30, color: colors.text }}>
						{props.code.code}
					</Text>
				</View>
			</View>
			<Button
				icon={<Icon name="trash" type="font-awesome" size={20} color="white" />}
				iconRight
				title="DELETE"
				onPress={() => props.onCodeDelete(props.awb, props.code)}
				titleStyle={{ fontFamily: fontFamilies.normal }}
				buttonStyle={{
					backgroundColor: 'red',
					borderRadius: 0
				}}
			/>
		</Frame>
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
	}
});
