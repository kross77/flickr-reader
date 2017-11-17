import React from 'react';
import styled from 'styled-components/native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ActivityIndicator from '../../components/ActivityIndicator'
import NavigationBlock from '../../components/NavigationBlock'
import BottomNavigation from '../../components/BottomNavigation'
import Grid from "../../components/Grid";
import DescriptionBlock from "../../components/DescriptionBlock";
import FullscreenImage from "../../components/FullscreenImage";
import CloseButton from "../../components/CloseButton";

const Wrapper80 = styled.View`
	width: 80%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const images = {
	"photos": {
		"page": 1, "pages": "38735", "perpage": 11, "total": "426085",
		"photo": [
			{
				"id": "38415975946",
				"owner": "43925496@N00",
				"secret": "212cdcace9",
				"server": "4533",
				"farm": 5,
				"title": "F8855 ~ Walking the dogs....",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": "It's such an enjoyable task!"}
			},
			{
				"id": "24599817618",
				"owner": "69726099@N05",
				"secret": "4a0514ecef",
				"server": "4553",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "38471482001",
				"owner": "50743454@N03",
				"secret": "a1b1254dc8",
				"server": "4559",
				"farm": 5,
				"title": "Chill",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": "Foma Retropan 320"}
			},
			{
				"id": "37756560424",
				"owner": "132444949@N07",
				"secret": "1834205fa5",
				"server": "4581",
				"farm": 5,
				"title": "Hurricane Irma and Maria",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": "The powerful category 5 hurricanes Irma and Maria hit the Caribbean in September causing a number of deaths and widespread devastation in the Caribbean. \n\nPhoto: Michael Atwood \/ UNDP"}
			},
			{
				"id": "37584211295",
				"owner": "132444949@N07",
				"secret": "ef45955b43",
				"server": "4552",
				"farm": 5,
				"title": "Hurricane Irma and Maria",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": "The powerful category 5 hurricanes Irma and Maria hit the Caribbean in September causing a number of deaths and widespread devastation in the Caribbean. \n\nPhoto: Michael Atwood \/ UNDP"}
			},
			{
				"id": "37756559604",
				"owner": "132444949@N07",
				"secret": "3af5b7abe6",
				"server": "4515",
				"farm": 5,
				"title": "Hurricane Irma and Maria",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": "The powerful category 5 hurricanes Irma and Maria hit the Caribbean in September causing a number of deaths and widespread devastation in the Caribbean. \n\nPhoto: Michael Atwood \/ UNDP"}
			},
			{
				"id": "38471291071",
				"owner": "59956364@N07",
				"secret": "89b7797968",
				"server": "4583",
				"farm": 5,
				"title": "A man and his dog",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "37756450844",
				"owner": "32669914@N04",
				"secret": "223e38e90a",
				"server": "4562",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "37584091305",
				"owner": "32669914@N04",
				"secret": "33027bedae",
				"server": "4552",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "26695460779",
				"owner": "32669914@N04",
				"secret": "3eeedf6d54",
				"server": "4551",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			},
			{
				"id": "37584081655",
				"owner": "32669914@N04",
				"secret": "4be23520fd",
				"server": "4576",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0,
				"description": {"_content": ""}
			}
		]
	}, "stat": "ok"
}

let oneImage = images.photos.photo.filter((v, i) => i < 1);
storiesOf('Components', module)

	.add('background', () =>
		<Background/>
	)
	.add('Logo', () =>
		<Background>
			<Logo/>
		</Background>
	)
	.add('Logo small', () =>
		<Background>
			<Logo size="small"/>
		</Background>
	)
	.add('Logo xsmall', () =>
		<Background>
			<Logo size="xsmall"/>
		</Background>
	)
	.add('input empty', () =>
		<Background>
			<Wrapper80>
				<Input label="keywords" onChange={value => action(`Text input value: ${value}`)}/>
			</Wrapper80>
		</Background>
	)
	.add('input filled', () =>
		<Background>
			<Wrapper80>
				<Input label="keywords" value="Dogs"/>
			</Wrapper80>
		</Background>
	)
	.add('button', () =>
		<Background>
			<Wrapper80>
				<Button onPress={() => action('button is pressed')}>Search</Button>
			</Wrapper80>
		</Background>
	)
	.add('button disabled', () =>
		<Background>
			<Wrapper80>
				<Button disabled={true} onPress={() => action('button is pressed')}>Search</Button>
			</Wrapper80>
		</Background>
	)
	.add('activity indicator', () =>
		<Background>
			<Wrapper80>
				<ActivityIndicator/>
			</Wrapper80>
		</Background>
	)
	.add('navigation block', () =>
		<Background>
			<NavigationBlock label="Hello world"
							 tip="it is your keywords:"
							 onBackPress={() => action('navigation block -> back')}/>
		</Background>
	)
	.add('grid full', () =>
		<Background>
			<Grid images={images.photos.photo}
				  onImageSelect={(image) => action('Grid -> onImageSelect:', image)}
			/>
		</Background>
	)
	.add('grid 1 image', () =>
		<Background>
			<Grid images={oneImage}
				  onImageSelect={(image) => action('Grid -> onImageSelect:', image)}
			/>
		</Background>
	)
	.add('grid 3 images', () =>
		<Background>
			<Grid images={images.photos.photo.filter((v, i) => i < 3)}
				  onImageSelect={(image) => action('Grid -> onImageSelect:', image)}
			/>
		</Background>
	)
	.add('grid 4 images', () =>
		<Background>
			<Grid images={images.photos.photo.filter((v, i) => i < 4)}
				  onImageSelect={(image) => action('Grid -> onImageSelect:', image)}
			/>
		</Background>
	)
	.add('grid 5 images', () =>
		<Background>
			<Grid images={images.photos.photo.filter((v, i) => i < 5)}
				  onImageSelect={(image) => action('Grid -> onImageSelect:', image)}
			/>
		</Background>
	)
	.add('grid 9 images', () =>
		<Background>
			<Grid images={images.photos.photo.filter((v, i) => i < 9)}
				  onImageSelect={(image) => action('Grid -> onImageSelect:', image)}
			/>
		</Background>
	)

	.add('bottom navigation', () =>
		<Background>
			<BottomNavigation onPressRight={() => action('navigation block -> prev')}
							  onPressLeft={() => action('navigation block -> next')}
			/>
		</Background>
	)
	.add('description block', () =>
		<Background>
			<DescriptionBlock title="F8855 ~ Walking the dogs...." description="The powerful category 5 hurricanes Irma and Maria hit the Caribbean in September causing a number of deaths and widespread devastation in the Caribbean.

Photo: Michael Atwood / UNDP"/>
		</Background>
	)
	.add('fullscreen image', () =>
		<Background>
			<FullscreenImage {images[Math.ceil(Math.random() * images.length)]} />
		</Background>
	)
	.add('close btn', () =>
		<Background>
			<CloseButton onPress={() => action('close button pressed')} />
		</Background>
	);
