import React from 'react';

import Link from 'next/link';
import classes from './FooterBanner.module.css';
import {urlFor} from "../lib/client"

const FooterBanner = ({
	footerBaner: {
		discount,
		largeText1,
		largeText2,
		saleTime,
		smallText,
		midText,
		product,
		buttonText,
		image,
		desc,
	},
}) => {
	return (
		<div className={classes['banner-container']}>
			<div className={classes[`banner-desc`]}>
				<div className={classes.left}>
					<p>{discount}</p>
					<h3>{largeText1}</h3>
					<h3>{largeText2}</h3>
					<p>{saleTime}</p>
				</div>
				<div className={classes.right}>
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<button type='button'>{buttonText}</button>
					</Link>
				</div>
        <img src={urlFor(image)} className={classes[`footer-banner-image`]}/>
			</div>
		</div>
	);
};

export default FooterBanner;
