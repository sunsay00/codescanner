import * as React from 'react';
import { View, Platform, Dimensions } from 'react-native';
import { colors } from './sg';
type FrameProps = {
	children: React.ReactNode;
};

type Props = FrameProps;

const isIPhoneX = () => {
	const dimen = Dimensions.get('window');
	return Platform.OS === 'ios' && (dimen.height === 812 || dimen.width === 812);
};

class Frame extends React.Component<Props, {}> {
	render() {
		return (
			<View
				style={{
					width: '100%',
					height: '100%',
					marginBottom: isIPhoneX() ? -40 : 0,
					backgroundColor: colors.background
				}}
			>
				{this.props.children && this.props.children}
			</View>
		);
	}
}

export default Frame;
