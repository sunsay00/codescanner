import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Frame from './frame';
import { Input, Icon, Button } from 'react-native-elements';
import { colors, fontFamilies } from './sg';
import KeyboardAvoidingView from './keyboardavoidingview';

export default (props: {
	onSignIn: () => void;

	onUsernameChangeText: (text: string) => void;
	usernameValue: string;
	usernameMessage?: string;

	onPasswordChangeText: (text: string) => void;
	passwordValue: string;
	passwordMessage?: string;
}) => (
	<KeyboardAvoidingView>
		<Frame>
			<View
				style={{
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					paddingHorizontal: 20,
					backgroundColor: colors.app
				}}
			>
				<View style={{ alignItems: 'center', paddingBottom: 60 }}>
					<Text style={{ fontFamily: fontFamilies.normal, fontSize: 40, color: 'white' }}>
						l o g i s c a n
					</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
						<Text
							style={{ fontFamily: fontFamilies.normal, fontSize: 20, color: 'white', paddingRight: 5 }}
						>
							{/*you ship &nbsp;||||| &nbsp; we scan*/}
							you ship
						</Text>
						<Image source={require('./img/logo.png')} style={{ width: 30, height: 30 }} />
						<Text
							style={{ fontFamily: fontFamilies.normal, fontSize: 20, color: 'white', paddingLeft: 10 }}
						>
							{/*you ship &nbsp;||||| &nbsp; we scan*/}
							we scan
						</Text>
					</View>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						autoCapitalize="none"
						keyboardType="default"
						autoCorrect={false}
						placeholder="USERNAME"
						style={{ fontSize: 20, color: colors.text, fontFamily: fontFamilies.normal }}
						onChangeText={props.onUsernameChangeText}
					/>
				</View>
				<View style={{ height: 20 }} />
				<View style={styles.inputContainer}>
					<TextInput
						autoCapitalize="none"
						keyboardType="default"
						autoCorrect={false}
						placeholder="PASSWORD"
						style={{ fontSize: 20, color: colors.text, fontFamily: fontFamilies.normal }}
						secureTextEntry
						onChangeText={props.onPasswordChangeText}
					/>
				</View>
				<View style={{ height: 40 }} />
				<View style={{ width: '100%' }}>
					<Button
						title="SIGN IN"
						onPress={props.onSignIn}
						buttonStyle={{
							backgroundColor: colors.buttonBackground,
							width: '100%',
							height: 50,
							borderColor: 'transparent',
							borderWidth: 0,
							borderRadius: 25
						}}
						titleStyle={{ fontFamily: fontFamilies.bold }}
					/>
				</View>
			</View>
		</Frame>
	</KeyboardAvoidingView>
);

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: 'white',
		height: 50,
		width: '100%',
		borderRadius: 25,
		justifyContent: 'center',
		paddingHorizontal: 25
	}
});
