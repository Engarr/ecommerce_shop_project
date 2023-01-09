import React from 'react';
import Head from 'next/head';
import classes from './Layout.module.css';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
	return (
		<div className={classes.layout}>
			<Head>
				<title>WOSMOD STORE</title>
			</Head>
			<header>
				<Nav />
			</header>
			<main className={classes['main-container']}>{props.children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
