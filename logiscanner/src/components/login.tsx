import * as React from 'react';
import UILogin from '../ui/login';

type Props = NavigatorProps & {};

type State = {
	userName: string;
	password: string;
};

class Login extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			userName: '',
			password: ''
		};
	}

	onSigIn = () => {
		this.setState({
			userName:'',
			password: ''
		})
		this.props.navigator.push({
			screen: 'scanner.home',
			backButtonHidden: true,
			passProps: {}
		});
	};

	onUserNameChange = (userName: string) => {
		this.setState({
			userName
		})
	};
	onPasswordChange = (password: string) => {
		this.setState({
			password
		})
	};

	render() {
		return (
			<UILogin
				onUsernameChangeText={this.onUserNameChange}
				onPasswordChangeText={this.onPasswordChange}
				onSignIn={this.onSigIn}
				usernameValue={this.state.userName}
				usernameMessage="Invalid username"
				passwordValue={this.state.password}
				passwordMessage="Invalid password"
			/>
		);
	}
}

export default Login;
