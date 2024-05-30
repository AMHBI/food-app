import Link from "next/link";
import React from "react";
import styles from "./Banner.module.css";
const Banner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h2>Food App</h2>
				<p>Food Delivery and Takeout!</p>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
					purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
					rhoncus aenean vel elit scelerisque
				</span>
				<Link href={"/menu"}>See All</Link>
			</div>
			<div className={styles.right}>
				<img src='/images/banner.png' alt='food image' />
			</div>
		</div>
	);
};

export default Banner;
