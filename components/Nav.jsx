import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import classes from './Nav.module.css';
const Nav = () => {
	return (
		<div className={classes['navbar-container']}>
			<p className={classes.logo}>
				<Link href='/'>WOSMOD STORE</Link>
			</p>
			<button type='button' className={classes['cart-icon']} onClick=''>
				<AiOutlineShopping />
				<span className={classes['cart-item-count']}>1</span>
			</button>
		</div>
	);
};

export default Nav;
