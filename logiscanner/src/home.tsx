import * as React from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import UIHome from './ui/home';

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
			{ id: '1', awbNumnber: '11111111111', houseNumber: '2222222222222', poNumber: '3e333e33333' },
			{
				id: '2',
				awbNumnber: '2322222222',
				houseNumber: '3344455555',
				poNumber: '334343d993',
				codes: [ { code: 'dkkddkdk' }, { code: 'ddddd' } ]
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
		this.props.navigator.push({
			screen: 'scanner.awbdetail',
			backButtonHidden: true,
			passProps: {
				awb,
				onChange: this.onChange
			}
		});
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
