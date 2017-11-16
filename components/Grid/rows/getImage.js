
import React from 'react';
import Image from '../ImageItem';


export default (index, images, onImageSelect) =>
	images[index] &&
	<Image onPress={() => onImageSelect(images[index])}
		   {...images[index]}/>;

