import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Storybook from './storybook/index';
import Routes from './routes/';
import cacheImages from './utils/cacheImages';
import {Font} from 'expo';


export default class App extends React.Component {
	state = {
		fontLoaded: false,
	};

	componentDidMount = async () => {
		await Font.loadAsync({
			'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
			'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
			'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
		});
		await cacheImages();
		this.setState({fontLoaded: true});
	};

	render() {
		return this.state.fontLoaded ? (
			<Routes/>
		) : (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<ActivityIndicator/>
			</View>
		);
	}
}