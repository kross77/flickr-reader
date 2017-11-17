
import React from 'react';
import Image from '../ImageItem';


export default (index, images, onImageSelect, isBig = false) =>
	images[index] &&
	<Image onPress={() => {
		console.log(images[index]);
		onImageSelect(images[index])
	}}
		   isBig={isBig}
		   {...images[index]}/>;

