import React from 'react';
import axios from 'axios';
import {compose, lifecycle, withHandlers, withPropsOnChange, withState} from 'recompose';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import Background from "../../components/Background";
import Search from "../../pages/Search";
import SearchResults from "../../pages/SearchResults";
import App from "../../routes";

const images = {
	"photos": {
		"page": 1, "pages": "36309", "perpage": 11, "total": "399396",
		"photo": [
			{
				"id": "26697074429",
				"owner": "24696968@N02",
				"secret": "6be9328f35",
				"server": "4583",
				"farm": 5,
				"title": "IMG_20070113_171405_1.JPG",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "38441247002",
				"owner": "46980153@N08",
				"secret": "ceaaa3fc35",
				"server": "4581",
				"farm": 5,
				"title": "Smoky Mountain Stream",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "37758007744",
				"owner": "80174067@N02",
				"secret": "9e473bd649",
				"server": "4572",
				"farm": 5,
				"title": "DSC05723",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "38472621941",
				"owner": "33924876@N05",
				"secret": "4ec94e5ae3",
				"server": "4565",
				"farm": 5,
				"title": "Durham!",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "38416749436",
				"owner": "26484363@N06",
				"secret": "e5cabb0e6a",
				"server": "4542",
				"farm": 5,
				"title": "Photo",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "37585452015",
				"owner": "33924876@N05",
				"secret": "b6d442d062",
				"server": "4558",
				"farm": 5,
				"title": "Durham!",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "38440720692",
				"owner": "29927633@N08",
				"secret": "62d4ecd3a7",
				"server": "4549",
				"farm": 5,
				"title": "dogs in costumes",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "24600492448",
				"owner": "29927633@N08",
				"secret": "544a649858",
				"server": "4536",
				"farm": 5,
				"title": "dogs in costumes2",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "24600491768",
				"owner": "29927633@N08",
				"secret": "091d5fc595",
				"server": "4557",
				"farm": 5,
				"title": "dogs in costumes3",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "37585278395",
				"owner": "29927633@N08",
				"secret": "c10ec59f54",
				"server": "4531",
				"farm": 5,
				"title": "dogs in costumes4",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "37585276905",
				"owner": "29927633@N08",
				"secret": "fec7b6e569",
				"server": "4540",
				"farm": 5,
				"title": "dogs in costumes5",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			}
		]
	}, "stat": "ok"
};


const apiKey = 'dd1f37406f619d661d5c40cddd1d5054';
const apiSecret = 'a3b602fa2a7cae3a';


const getImages = async (text, page, perPage) => {
	console.log(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&extras=description&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`)
	return await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&extras=description&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`);
};

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
					})
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
			this.props.setSearchRequest({text: 'dogs', page: 1, perPage: 11})
		},
	}),
);

const DogSearchResultPage = enhancer(({next, prev, images: {images, pages, page}, searchRequest: {text}, loading, selectedImage, setSelectedImage} ) => {

	return <SearchResults images={images}
						  onNext={next}
						  onPrev={prev}
						  onBack={action('onBack')}
						  page={page}
						  loading={loading}
						  pages={pages}
						  searchString={text}
						  selectedImage={selectedImage}
						  setSelectedImage={setSelectedImage}
						  onImageSelect={value => setSelectedImage(value)}
						  />
})

storiesOf('Pages', module)
	.add('Search page', () =>
		<Search onSubmit={(searchString) => action('onSubmit', searchString)}/>
	)
	.add('Search page -> loading', () =>
		<Search loading={true} onSubmit={(searchString) => action('onSubmit', searchString)}/>
	)
	.add('Search results page', () =>
		<SearchResults onBack={action('onBack')}
					   images={images.photos.photo}
					   onPrev={action('onPrev')}
					   onImageSelect={action('onImageSelect')}
					   onNext={action('onNext')}/>
	)
	.add('Dog Search results page', () =>
		<DogSearchResultPage/>
	)
	.add('App', () =>
		<App/>
	)
;
