import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import { Button, Icon } from 'react-native-elements';
import Frame from './frame';

export default (props: { code: BarCode; awb: AWB; onCodeDelete: (awb: AWB, code: BarCode) => void }) => (
	<View>
		<Frame>
			<View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
				<View
					style={{
						backgroundColor: colors.cardBackground,
						justifyContent: 'center',
						alignItems: 'center',
						alignContent: 'center',
						borderWidth: 1,
						borderColor: colors.border,
						height: 50
					}}
				>
					<Text style={{ fontFamily: fontFamilies.normal, fontSize: fontSizes.h1, color: colors.text }}>
						{props.code.code}
					</Text>
				</View>
				<View style={{ paddingTop: 10 }}>
					<Button
						icon={<Icon name="trash" type="font-awesome" size={20} color="white" />}
						iconRight
						title="DELETE"
						onPress={() => props.onCodeDelete(props.awb, props.code)}
						buttonStyle={{ backgroundColor: 'red' }}
					/>
				</View>
			</View>
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
