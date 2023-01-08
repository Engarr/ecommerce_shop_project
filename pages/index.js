import React from 'react';
import classes from '../styles/index.module.css';
import { Product, FooterBanner, Banner } from '../components/index';
import { client } from '../lib/client';
const HomePage = ({ product }) => {
	console.log(product[0].image);
	return (
		<div>
			<Banner />
			<div className={classes.heading}>
				<h2>Best selling products</h2>
				<p>The most beauty swimwear</p>
			</div>
			<div className={classes.box}>
				{product?.map((product) => product?.name)}
			</div>
			<FooterBanner />
		</div>
	);
};

export const getServerSideProps = async () => {
	const query = `*[_type == "product"]`;
	const product = await client.fetch(query);
	const bannerQuery = `*[_type == "banner"]`;
	const banner = await client.fetch(query);
	return { props: { product, banner } };
};

export default HomePage;
