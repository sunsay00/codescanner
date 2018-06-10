import * as React from 'react';
import { Text, Platform, View, Button, TouchableOpacity, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import withNavigator from './hocs/navigator';

type BackButtonFrameProps = {
	onBack?: () => void;
	children: React.ReactNode;
};

type Props = NavigatorProps & BackButtonFrameProps;

class BackButtonFrame extends React.Component<Props, {}> {
	onNavigatorEvent = (e: NavigatorEvent) => {
		if (e.type == 'NavBarButtonPress') {
			if (e.id == Platform.select({ ios: 'back', android: 'backPress' })) {
				this.props.onBack && this.props.onBack();
			}
		}
	};

	componentDidMount() {
		this.props.navigator.addNavigatorEventListener(this.onNavigatorEvent);
		if (Platform.OS == 'ios') {
			this.props.navigator.setButtons({
				leftButtons: [
					{
						icon: require('./ui/img/ic_arrow_back.png'),
						id: 'back'
					}
				]
			});
		} else if (Platform.OS == 'android') {
			this.props.navigator.setButtons({
				leftButtons: [ {} ]
			});
		}
	}

	componentWillUnmount() {
		this.props.navigator.removeNavigatorEventListener(this.onNavigatorEvent);
	}

	render() {
		return (
			<View style={{ width: '100%', height: '100%' }}>
				{this.props.children && this.props.children}
				{Navigation.appMode() != 'tabs' &&
				Platform.OS == 'ios' &&
				this.props.onBack != undefined && (
					<View
						style={{
							position: 'absolute',
							justifyContent: 'center',
							top: 40,
							left: 20,
							width: 40,
							height: 40
						}}
					>
						<TouchableOpacity onPress={this.props.onBack}>
							<Image source={require('./ui/img/ic_arrow_back.png')} style={{ width: 15, height: 15 }} />
						</TouchableOpacity>
					</View>
				)}
			</View>
		);
	}
}

export default BackButtonFrame;
