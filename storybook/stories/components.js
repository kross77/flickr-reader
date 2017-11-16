import React from 'react';
import styled from 'styled-components/native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import Background from '../../components/Backgound'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ActivityIndicator from '../../components/ActivityIndicator'
import NavigationBlock from '../../components/NavigationBlock'
import Grid from "../../components/Grid/index";

const Wrapper80 = styled.View`
	width: 80%;
	height: 100%;
	background-color: bisque;
`;

const images = {
	"photos": {
		"page": 1, "pages": "35102", "perpage": 11, "total": "386118",
		"photo": [
			{
				"id": "38413332386",
				"owner": "156239254@N07",
				"secret": "1a5d9b02ba",
				"server": "4515",
				"farm": 5,
				"title": "Melissa Etheridge Pleads Guilty To Pot Possession",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "38437384622",
				"owner": "61568743@N04",
				"secret": "779dac0f26",
				"server": "4528",
				"farm": 5,
				"title": "IMG_1934",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "38469106571",
				"owner": "157998955@N07",
				"secret": "7bec44dc6a",
				"server": "4516",
				"farm": 5,
				"title": 2,
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "24597218728",
				"owner": "40297626@N05",
				"secret": "f0137ae56d",
				"server": "4527",
				"farm": 5,
				"title": "【婚攝】ming+zhen\/mld台鋁晶綺盛宴-銀河廳",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "24597214398",
				"owner": "26408066@N05",
				"secret": "324dff637e",
				"server": "4515",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "38468966681",
				"owner": "26408066@N05",
				"secret": "9fcc0949e5",
				"server": "4526",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "38413148216",
				"owner": "26408066@N05",
				"secret": "fa25723d5a",
				"server": "4524",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "38468946481",
				"owner": "20392184@N06",
				"secret": "397ed9eb9c",
				"server": "4558",
				"farm": 5,
				"title": "Portrait of the Dog as a Young Dog",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "26693274459",
				"owner": "26408066@N05",
				"secret": "8db786edef",
				"server": "4543",
				"farm": 5,
				"title": "",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "38468896651",
				"owner": "74777049@N02",
				"secret": "9617791171",
				"server": "4519",
				"farm": 5,
				"title": "LC-A",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "37754396644",
				"owner": "90402169@N02",
				"secret": "47d558de54",
				"server": "4519",
				"farm": 5,
				"title": "DSC_0833",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			}
		]
	}, "stat": "ok"
}

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
			<NavigationBlock onPressRight={() => action('navigation block -> prev')}
							 onPressLeft={() => action('navigation block -> next')}
			/>
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

		</Background>
	)
	.add('grid 3 images', () =>
		<Background>

		</Background>
	)
	.add('grid 4 images', () =>
		<Background>

		</Background>
	)
	.add('grid 5 images', () =>
		<Background>

		</Background>
	)
	.add('grid 9 images', () =>
		<Background>

		</Background>
	)
	.add('description block', () =>
		<Background>

		</Background>
	)
	.add('bottom navigation', () =>
		<Background>

		</Background>
	)
	.add('zoom control', () =>
		<Background>

		</Background>
	)
	.add('navigation icons -> all disabled', () =>
		<Background>

		</Background>
	)
	.add('navigation icons -> left top disabled', () =>
		<Background>

		</Background>
	)
	.add('navigation icons -> bottom disabled', () =>
		<Background>

		</Background>
	)
	.add('navigation icons -> bottom disabled', () =>
		<Background>

		</Background>
	)
	.add('close button', () =>
		<Background>

		</Background>
	);
