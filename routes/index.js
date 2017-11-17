import { StackNavigator } from 'react-navigation';
import SearchRoute from "./SearchRoute";
import ResultPage from "./SearchedResultRoute";

export const Routes = {
	HOME: 'Home',
	RESULT_PAGE: 'ResultPage',
}

export  default StackNavigator({
	Home: {
		screen: SearchRoute,
	},
	ResultPage: {
		screen: ResultPage,
	}
}, {headerMode: 'none',});
