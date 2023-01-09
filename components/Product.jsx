import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import classes from './Product.module.css';

const Product = ({ product: { image, name, slug, price } }) => {
	return (
		<div>
			<Link href={`/product/${slug.current} `}>
				<div className={classes['product-card']}>
					<img
						src={image && urlFor(image[0]).url()}
						width={250}
						height={250}
						className={classes[`product-image`]}
					/>
					<p className={classes[`product-name`]}>{name}</p>
					<p className={classes[`product-price`]}>$ {price} </p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
