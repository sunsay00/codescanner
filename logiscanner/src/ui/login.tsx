import * as React from 'react';
import { View, TextInput } from 'react-native';
import Frame from './frame';
import { Input, Icon, Button } from 'react-native-elements';
import { colors } from './sg';
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
					paddingHorizontal: 40
				}}
			>
				<TextInput style={{ width: '100%' }} />

				<Input
					leftIcon={<Icon name="user" type="font-awesome" size={20} color="#ccccd1" />}
					inputStyle={{ backgroundColor: colors.background, color: 'white' }}
					containerStyle={{ backgroundColor: colors.background, width: '100%', height: 40 }}
					autoCapitalize="none"
					keyboardType="default"
					autoCorrect={false}
					onChangeText={props.onUsernameChangeText}
				/>
				<View style={{ height: 20 }} />
				<Input
					leftIcon={<Icon name="lock" type="font-awesome" size={20} color="#ccccd1" />}
					inputStyle={{ backgroundColor: colors.background, color: 'white' }}
					containerStyle={{ backgroundColor: colors.background, width: '100%', height: 40 }}
					autoCapitalize="none"
					keyboardType="default"
					autoCorrect={false}
					secureTextEntry
					onChangeText={props.onPasswordChangeText}
				/>
				<View style={{ height: 40 }} />
				<View style={{ width: '100%' }}>
					<Button title="SIGN IN" onPress={props.onSignIn} />
				</View>
			</View>
		</Frame>
	</KeyboardAvoidingView>
);
