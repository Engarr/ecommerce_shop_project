import React from 'react';

import Link from 'next/link';

import classes from './Banner.module.css';

const Banner = () => {
	return (
		<div className={classes['banner-container']}>
			<div>
				<p className={classes['beats-solo']}>Small text</p>
				<h3>Mid Text</h3>
				<img src='' alt='swimsuit' className={classes['banner-image']} />
				<div>
					<Link href='/product/ID'>
						<button type='button'>Button text</button>
					</Link>
					<div className={classes.desc}>
						<h5>description</h5>
						<p>description</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
