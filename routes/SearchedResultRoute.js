import React from 'react'
import axios from 'axios'
import {compose, lifecycle, withHandlers, withPropsOnChange, withState} from 'recompose'
import Search from "../pages/Search";
import {Routes} from "./index";
import SearchResults from "../pages/SearchResults";
import { NavigationActions } from 'react-navigation'

const backAction = NavigationActions.back({
	key: 'Profile'
})


const apiKey = 'dd1f37406f619d661d5c40cddd1d5054';
const getImages = async (text, page, perPage) => {
	try{
		return await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&extras=description&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`);
	}catch (err){
		await sleep(1);
		return getImages(text, page, perPage);
	}

};

const sleep = (time) => new Promise((resolve => setTimeout(resolve, time * 1000)));

const enhancer = compose(
	withState('loading', 'setLoading', false),
	withState('searchRequest', 'setSearchRequest', {}),
	withState('images', 'setImages', {images: [], page: 0, pages: 0}),
	withState('selectedImage', 'setSelectedImage', null),
	withPropsOnChange(['searchRequest'],
		(props) => {
			if (props.searchRequest.text) {
				const {searchRequest: {text, page, perPage}, setImages, setLoading, loading} = props;

				setLoading(true);
				getImages(text, page, perPage).then(async response => {
					response = response.data;
					//console.log('getImages', {response});
					setImages({
						images: response.photos.photo,
						page: response.photos.page,
						pages: response.photos.pages,
					});
					setTimeout(() => setLoading(false), 750);
				}).catch(err => console.error(err));
				return {
					searchRequest: {
						text, page, perPage
					},

				}
			}
			return props
		}),
	withHandlers({
		next: ({setSearchRequest, searchRequest: {text, perPage, page}}) => () => {
			setSearchRequest({text, page: page + 1, perPage});
		},
		prev: ({setSearchRequest, searchRequest: {text, page, perPage}}) => () => {
			if (page > 1) {
				setSearchRequest({text, page: page - 1, perPage});
			}
		},
	}),
	lifecycle({
		componentDidMount: function () {
			this.props.setSearchRequest({text: this.props.navigation.state.params.searchString, page: 1, perPage: 11})
		},
	}),
);
const SearchedResultRoute = ({
						next,
						prev,
						images: {images, pages, page},
						searchRequest: {text},
						loading,
						selectedImage,
						navigation,
						setSelectedImage
}) =>
	<SearchResults images={images}
				   onNext={next}
				   onPrev={prev}
				   onBack={() => navigation.goBack()}
				   page={page}
				   loading={loading}
				   pages={pages}
				   searchString={text}
				   selectedImage={selectedImage}
				   setSelectedImage={setSelectedImage}
				   onImageSelect={value => setSelectedImage(value)}
	/>


SearchedResultRoute.navigationOptions = {
	header: null// !!! Hide Header
};


export default enhancer(SearchedResultRoute);