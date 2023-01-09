import React from 'react';
import classes from '../../Styles/ProductDetail.module.css';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ params: { slug } }) => {
	return (
		<div className={classes['product-detail-container']}>
			<div>
				<div className={classes[`image-container`]}>
					<img src={urlFor()} />
				</div>
			</div>
		</div>
	);
};

export const getStaticProps = async () => {
	const query = `*[_type == "product" && slug.current = ${slug}][0]`;
	const productsQuary = `*[_type == "product"]`;

	const product = await client.fetch(query);
	const products = await client.fetch(productsQuary);

	const bannerQuery = `*[_type == "banner"]`;
	const bannerData = await client.fetch(bannerQuery);
	return { props: { product, bannerData, products } };
};
export default ProductDetails;
