import React from 'react';

import Link from 'next/link';

import classes from './Banner.module.css';
import { urlFor } from '../lib/client';
const Banner = ({ bannerData }) => {
	return (
		<div className={classes['banner-container']}>
			<div>
				<p className={classes['beats-solo']}>{bannerData.smallText}</p>
				<h3>{bannerData.midText}</h3>
				<h1>{bannerData.largeText1}</h1>

				<img
					src={urlFor(bannerData.image).url()}
					alt='swimsuit'
					className={classes['banner-image']}
				/>

				<div>
					<Link href='/product/ID'>
						<button type='button'>{bannerData.buttonText}</button>
					</Link>
					<div className={classes.desc}>
						<h5>Description</h5>
						<p>{bannerData.desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
