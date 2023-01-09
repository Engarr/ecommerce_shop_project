import React from 'react';
import classes from '../Styles/index.module.css';
import { Product, FooterBanner, Banner } from '../components/index';
import { client } from '../lib/client';
const HomePage = ({ product, bannerData }) => {
	return (
		<div>
			<Banner bannerData={bannerData.length && bannerData[0]} />
			<div className={classes.heading}>
				<h2>Best selling products</h2>
				<p>The most beauty swimwear</p>
			</div>
			<div className={classes.box}>
				{product?.map((product) => (
					<Product key={product?._id} product={product} />
				))}
			</div>
			<FooterBanner footerBaner={bannerData && bannerData[0]} />
		</div>
	);
};

export const getServerSideProps = async () => {
	const query = `*[_type == "product"]`;
	const product = await client.fetch(query);
	const bannerQuery = `*[_type == "banner"]`;
	const bannerData = await client.fetch(bannerQuery);
	return { props: { product, bannerData } };
};

export default HomePage;
