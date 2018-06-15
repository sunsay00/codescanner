import * as React from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import UIHome from '../ui/home';

type Props = NavigatorProps;

type State = {
	loading: boolean;
	awbs: AWB[];
	filtered: AWB[];
	selected: string[];
};

class Home extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		let awbs = [
			{
				id: '1',
				awbNumnber: '11111111111',
				houseNumber: '2222222222222',
				poNumber: '3e333e33333',
				totalCodes: 10
			},
			{
				id: '2',
				awbNumnber: '11111111111',
				houseNumber: '2222222222222',
				poNumber: '3e333e33333',
				totalCodes: 10
			},
			{
				id: '3',
				awbNumnber: '11111111111',
				houseNumber: '2222222222222',
				poNumber: '3e333e33333',
				totalCodes: 10
			},
			{
				id: '4',
				awbNumnber: '11111111111',
				houseNumber: '2222222222222',
				poNumber: '3e333e33333',
				totalCodes: 10
			},
			{
				id: '5',
				awbNumnber: '11111111111',
				houseNumber: '2222222222222',
				poNumber: '3e333e33333',
				totalCodes: 10
			},
			{
				id: '6',
				awbNumnber: '11111111111',
				houseNumber: '2222222222222',
				poNumber: '3e333e33333',
				totalCodes: 10
			},
			{
				id: '7',
				awbNumnber: '2322222222',
				houseNumber: '3344455555',
				poNumber: '334343d993',
				totalCodes: 20,
				codes: [
					{ code: 'dkkddkdk', isUploaded: false },
					{ code: 'ddddd', isUploaded: false },
					{ code: 'ddddd1', isUploaded: false },
					{ code: 'ddddd2', isUploaded: false },
					{ code: 'ddddd3', isUploaded: false },
					{ code: 'ddddd4', isUploaded: false },
					{ code: 'ddddd5', isUploaded: false },
					{ code: 'ddddd6', isUploaded: false },
					{ code: 'ddddd7', isUploaded: false },
					{ code: 'ddddd8', isUploaded: false },
					{ code: 'ddddd9', isUploaded: false },
					{ code: 'ddddd10', isUploaded: false },
					{ code: 'ddddd11', isUploaded: false },
					{ code: 'ddddd12', isUploaded: false },
					{ code: 'ddddd13', isUploaded: false },
					{ code: 'ddddd14', isUploaded: false }
				]
			}
		];
		this.state = {
			loading: false,
			awbs,
			filtered: awbs,
			selected: []
		};

		this.state.awbs.map((a) => {
			AsyncStorage.setItem(a.id, JSON.stringify(a));
		});
	}

	onNavigatorEvent = (e: NavigatorEvent) => {
		if (e.type == 'NavBarButtonPress') {
			if (e.id == 'refresh') {
			} else if (e.id == 'back') {
				this.props.navigator.pop();
			}
		}
	};

	componentDidMount() {
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
		this.props.navigator.setButtons({
			leftButtons: [
				{
					title: 'Sign Out',
					id: 'back'
				}
			],
			rightButtons: [
				{
					title: 'Refresh',
					id: 'refresh'
				}
			]
		});
	}
	onItemPress = (awb: AWB) => {
		if (awb.codes != undefined && awb.codes.length > 0) {
			this.props.navigator.push({
				screen: 'scanner.awbdetail',
				backButtonHidden: true,
				passProps: {
					awb,
					onScan: this.onScanCode,
					onChange: this.onChange
				}
			});
		} else {
			this.props.navigator.push({
				screen: 'scanner.scan',
				backButtonHidden: true,
				passProps: {
					awb,
					onScan: this.onScanCode
				}
			});
		}
	};

	onScanCode = (awb: AWB, code: string) => {
		let currentAWB = awb;
		if (currentAWB.codes == undefined) {
			currentAWB.codes = [];
		}
		currentAWB.codes.push({ code: code, isUploaded: false });
		this.onChange(currentAWB);
	};

	onChange = (awb: AWB) => {
		let currentAWBs = [ ...this.state.awbs ];
		let found = currentAWBs.find((a) => a.id == awb.id);
		if (found != undefined) {
			let index = currentAWBs.indexOf(found);
			currentAWBs[index] = awb;
			this.setState({
				awbs: currentAWBs
			});
		}
	};

	onUpload = () => {
		try {
			let itemsToBeUpload: AWB[] = [];
			this.state.selected.map((id) => {
				AsyncStorage.getItem(id, (err, value) => {
					if (value != undefined) {
						itemsToBeUpload.push(JSON.parse(value));
					}
				});
			});
		} catch (err) {
			alert(err);
		}
	};

	onSelect = (selected: string) => {
		const newSelection =
			this.state.selected.indexOf(selected) == -1
				? [ ...this.state.selected, selected ]
				: this.state.selected.filter((s) => s != selected);
		this.setState({ selected: newSelection });
	};

	onSearchText = (text: string) => {
		const filtered = this.state.awbs.filter(
			(a) =>
				a.awbNumnber.toUpperCase().indexOf(text.toUpperCase()) != -1 ||
				a.houseNumber.toUpperCase().indexOf(text.toUpperCase()) != -1 ||
				a.poNumber.toUpperCase().indexOf(text.toUpperCase()) != -1
		);
		this.setState({
			filtered
		});
	};

	render() {
		return (
			<View>
				<UIHome
					loading={this.state.loading}
					awbs={this.state.filtered}
					selected={this.state.selected}
					onItemPress={this.onItemPress}
					onUpload={this.onUpload}
					onSelect={this.onSelect}
					onSearchText={this.onSearchText}
				/>
			</View>
		);
	}
}

export default Home;
