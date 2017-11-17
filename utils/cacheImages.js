import {Asset, } from 'expo';
import {Image} from 'react-native';
const ImagesAssets = [
	require('../assets/close-button.png'),
	require('../assets/arrow.png'),
	require('../assets/icon.png'),
	require('../assets/splash.png'),
	require('../assets/logos/logo.png'),
];

const cache = (images) => {
	return images.reduce(async (a, image) => {
		if (typeof image === 'string') {
			a[image.id] = await Image.prefetch(image);
			return a;
		} else {
			a[image.id] = await Asset.fromModule(image).downloadAsync();
			return a;
		}
	}, {});
};

export default async () => await cache(ImagesAssets);