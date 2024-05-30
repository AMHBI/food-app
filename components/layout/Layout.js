import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.left}>
					<Link href={"/"}>Order Food</Link>
				</div>
				<div className={styles.right}>
					<Link href={"/menu"}>Menu</Link>
					<Link href={"/categories"}>Categories</Link>
				</div>
			</header>
			<main className={styles.container}>{children}</main>
			<footer className={styles.footer}>
                <a target="_blank" href="https://amhb.ir" rel="noreferrer"> developed by AMHB with 💖 </a>
            </footer>
		</>
	);
};

export default Layout;
