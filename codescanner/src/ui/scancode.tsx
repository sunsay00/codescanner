import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { colors, fontFamilies, fontSizes } from './sg';
import Button from './button';

export default (props: { code: BarCode; awb: AWB; onCodeDelete: (awb: AWB, code: BarCode) => void }) => (
	<View style={Dimensions.get('window').height == 812 ? styles.iphonex : styles.notIphonex}>
		<ScrollView style={{ paddingHorizontal: 20 }}>
			<View
				style={{
					paddingTop: 20,
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
					borderBottomWidth: 1,
					borderColor: colors.borderDark,
					height: 50
				}}
			>
				<Text style={{ fontFamily: fontFamilies.normal, fontSize: fontSizes.h1 }}>{props.code.code}</Text>
			</View>
		</ScrollView>
		<View>
			<Button title="Delete" mode="danger" onPress={() => props.onCodeDelete(props.awb, props.code)} />
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
	}
});
