import * as React from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import UIHome from './ui/home';

type Props = NavigatorProps;

type State = {
	loading: boolean;
	awbs: AWB[];
	selected: string[];
};

class Home extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			loading: false,
			awbs: [
				{ id: '1', awbNumnber: '1' },
				{
					id: '2',
					awbNumnber: '2',
					codes: [ { code: 'dkkddkdk', scannedDate: '1/1/2018' }, { code: 'ddddd', scannedDate: '1/1/2018' } ]
				}
			],
			selected: []
		};

		this.state.awbs.map((a) => {
			AsyncStorage.setItem(a.id, JSON.stringify(a));
		});
	}

	onItemPress = (awb: AWB) => {
		this.props.navigator.push({
			screen: 'scanner.awbdetail',
			backButtonHidden: true,
			passProps: {
				awb
			}
		});
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

	render() {
		return (
			<View>
				<UIHome
					loading={this.state.loading}
					awbs={this.state.awbs}
					selected={this.state.selected}
					onItemPress={this.onItemPress}
					onUpload={this.onUpload}
					onSelect={this.onSelect}
				/>
			</View>
		);
	}
}

export default Home;
