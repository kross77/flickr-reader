import React from 'react'
import {compose, withHandlers, withState, withPropsOnChange} from 'recompose'
import Search from "../pages/Search";
import {Routes} from "./index";


const enhancer = compose(
	withState('loading', 'setLoading', false),
	withHandlers({
		onSubmit: ({loading, setLoading, navigation: {navigate}}) => (searchString) => {
			console.log('onSubmit', {searchString});
			setLoading(true);
			setTimeout(() => {
				navigate(Routes.RESULT_PAGE, {searchString});
				setLoading(false);
			}, 900)
		},
	})
);

const SearchRoute = ({
						 loading,
						 onSubmit,
					 }) =>
	<Search loading={loading} onSubmit={onSubmit}/>;

SearchRoute.navigationOptions = {
	header: null,// !!! Hide Header
};


export default enhancer(SearchRoute);