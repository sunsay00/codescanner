import * as React from 'react';
import UIScanCode from '../ui/scancode';

type Props = NavigatorProps & {
	code: BarCode;
	awb: AWB;
	onCodeDelete: (awb: AWB, code: BarCode) => void;
};
type State = {};
class ScanCode extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
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
	render() {
		return (
			<UIScanCode
				code={this.props.code}
				awb={this.props.awb}
				onCodeDelete={() => this.props.onCodeDelete(this.props.awb, this.props.code)}
			/>
		);
	}
}

export default ScanCode;
