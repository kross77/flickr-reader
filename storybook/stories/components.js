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

	.add('bottom navigation left disabled', () =>
		<Background>
			<BottomNavigation onPressRight={() => action('navigation block -> prev')}
							  leftDisable={true}
							  onPressLeft={() => action('navigation block -> next')}
			/>
		</Background>
	)

	.add('bottom navigation right disabled', () =>
		<Background>
			<BottomNavigation onPressRight={() => action('navigation block -> prev')}
							  rightDisable={true}
							  onPressLeft={() => action('navigation block -> next')}
			/>
		</Background>
	)

	.add('bottom navigation all disabled', () =>
		<Background>
			<BottomNavigation onPressRight={() => action('navigation block -> prev')}
							  leftDisable={true}
							  rightDisable={true}
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
			<FullscreenImage {...images.photos.photo[Math.ceil(Math.random() * images.photos.photo.length)]} />
		</Background>
	)
	.add('close btn', () =>
		<Background>
			<CloseButton onPress={() => action('close button pressed')}/>
		</Background>
	);
