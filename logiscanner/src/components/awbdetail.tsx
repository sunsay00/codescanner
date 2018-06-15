import * as React from 'react';
import { AsyncStorage } from 'react-native';
import UIAWBDetail from '../ui/awbdetail';

type Props = NavigatorProps & {
	awb: AWB;
	onChange: (awb: AWB) => void;
	onScan: (awb: AWB) => void;
};

type State = {
	loading: boolean;
	awb: AWB;
};

class AWBDetail extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.props.navigator.setTitle({ title: this.props.awb.awbNumnber });
		this.state = {
			loading: false,
			awb: this.props.awb
		};
	}
	onNavigatorEvent = (e: NavigatorEvent) => {
		if (e.type == 'NavBarButtonPress') {
			if (e.id == 'back') {
				this.props.navigator.pop();
			}
		}
	};

	componentDidMount() {
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
		this.props.navigator.setButtons({
			leftButtons: [
				{
					icon: require('../ui/img/nav/ic_arrow_back.png'),
					id: 'back'
				}
			]
		});
	}

	onItemPress = (awb: AWB, code: BarCode) => {
		this.props.navigator.push({
			screen: 'scanner.scancode',
			backButtonHidden: true,
			passProps: {
				awb,
				code,
				onCodeDelete: this.onCodeDelete
			}
		});
	};

	onCodeDelete = (awb: AWB, code: BarCode) => {
		AsyncStorage.getItem(awb.id, (err, value) => {
			if (value != undefined) {
				const currentAWB = { ...this.state.awb };
				if (awb.codes != undefined) {
					currentAWB.codes = awb.codes.filter((c) => c.code != code.code);
					this.setState({
						awb: currentAWB
					});
					AsyncStorage.setItem(awb.id, JSON.stringify(this.state.awb));
				}
				this.props.onChange(this.state.awb);
				this.props.navigator.pop();
			} else {
				alert('Invalid record');
			}
		});
	};

	onScan = (awb: AWB) => {
		this.props.navigator.showModal({
			screen: 'scanner.scan',
			passProps: {
				awb,
				onScan: this.props.onScan
			}
		});
	};

	render() {
		return (
			<UIAWBDetail
				loading={this.state.loading}
				awb={this.state.awb}
				onItemPress={this.onItemPress}
				onScan={this.onScan}
				onCodeDelete={this.onCodeDelete}
			/>
		);
	}
}

export default AWBDetail;
