import * as React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from './sg';

export default (props: { children: React.ReactNode }) => (
	<KeyboardAvoidingView
		keyboardVerticalOffset={65}
		behavior={Platform.OS == 'ios' ? 'padding' : undefined}
		style={{ backgroundColor: colors.background }}
	>
		{props.children}
	</KeyboardAvoidingView>
);
