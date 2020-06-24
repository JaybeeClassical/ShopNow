import React from "react";
import Styles from "../pagination/pagination.module.scss";

const Pigination = () => {
	return (
		<div className={Styles.Pigination_wrapper}>
			<div className={Styles.ItemTabs}>Sort</div>
			<div className={Styles.ItemTabs}>Product Type</div>
			<div className={Styles.ItemTabs}>Style</div>
			<div className={Styles.ItemTabs}>Size</div>
			<div className={Styles.ItemTabs}>Color</div>
			<div className={Styles.ItemTabs}>Price Range</div>
		</div>
	);
};

export default Pigination;
