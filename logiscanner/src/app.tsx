import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import Home from './components/home';
import AWBDetail from './components/awbdetail';
import Scan from './components/scan';
import ScanCode from './components/scancode';
import Login from './components/login';

Navigation.registerComponent('scanner.login', () => Login);
Navigation.registerComponent('scanner.home', () => Home);
Navigation.registerComponent('scanner.awbdetail', () => AWBDetail);
Navigation.registerComponent('scanner.scan', () => Scan);
Navigation.registerComponent('scanner.scancode', () => ScanCode);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'scanner.login' // unique ID registered with Navigation.registerScreen
		//title: 'Welcome', // title of the screen as appears in the nav bar (optional)
		//navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
		//navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
	},
	appStyle: {
		orientation: 'portrait'
	}
});
