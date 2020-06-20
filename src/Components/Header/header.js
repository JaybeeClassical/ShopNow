import React from "react";
import Styles from "../Header/header.module.scss";

const Header = () => {
	return (
		<div className={Styles.Header_wrapper}>
			<div className={Styles.Header}>
				<div className={Styles.Header_logo}>Shop-Now</div>
				<div>
					<input
						type='text'
						placeholder='search items'
						className={Styles.input_search}
					/>
				</div>
				<div className={Styles.Header_account__display}>Logged in US</div>
			</div>
		</div>
	);
};

export default Header;
