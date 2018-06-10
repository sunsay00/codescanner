import * as React from 'react';
import { CameraKitCamera, CameraKitCameraScreen } from 'react-native-camera-kit';
import { Text, ActivityIndicator, Button, View } from 'react-native';

type Mode = 'loading' | 'denied' | 'ready';

type Props = NavigatorProps & {
	awb: AWB;
};

type State = {
	mode: Mode;
};

class Scan extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			mode: 'loading'
		};
		//this.props.navigator.toggleNavBar({ to: 'hidden' });
	}
	async componentDidMount() {
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
		this.props.navigator.setButtons({
			leftButtons: [
				{
					icon: require('./ui/img/nav/ic_arrow_back.png'),
					id: 'back'
				}
			]
		});
		this.setState({
			mode: (await CameraKitCamera.checkDeviceCameraAuthorizationStatus()) ? 'ready' : 'denied'
		});
	}
	onNavigatorEvent = (e: NavigatorEvent) => {
		if (e.type == 'NavBarButtonPress') {
			if (e.id == 'back') {
				this.props.navigator.pop();
			}
		}
	};

	onCancel = () => {
		this.props.navigator.pop();
	};

	onPress = (event: any) => {
		if (event.type === 'capture') {
		} else if (event.type === 'left') {
			//this.props.navigator.dismissModal();
		} else if (event.type === 'right') {
			//this.props.navigator.dismissModal();
		}
	};

	render() {
		if (this.state.mode === 'loading') {
			return (
				<View style={{ justifyContent: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		} else if (this.state.mode === 'denied') {
			return (
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Text>To enable the camera, go to Settings->Props and allow access to camera</Text>
					<Button title="Cancel" onPress={this.onCancel} />
				</View>
			);
		} else {
			return (
				<View>
					<CameraKitCameraScreen
						actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
						onBottomButtonPressed={this.onPress}
						scanBarcode={true}
						laserColor={'blue'}
						frameColor={'yellow'}
					/>
				</View>
			);
		}
	}
}

export default Scan;
