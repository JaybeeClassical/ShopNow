import React from "react";
import Styles from "../Sidebar/sidebar.module.scss";
import knitwear from "../../Assets/homepage.svg";

const Sidebar = () => {
	return (
		<div className={Styles.Homepage_first__grid}>
			<div className={Styles.Homepage_first__gridMenu}>
				<h4>Home</h4>
			</div>
			<div className={Styles.Homepage_first__gridItem}>
				<h4>New In</h4>
				<img src={knitwear} alt='knitwear' style={{width: "40px"}} />
			</div>
			<div className={Styles.Homepage_first__gridItem}>
				<h4>Coats</h4>
				<img src={knitwear} alt='knitwear' style={{width: "40px"}} />
			</div>
			<div className={Styles.Homepage_first__gridItem}>
				<h4>tops</h4>
				<img src={knitwear} alt='knitwear' style={{width: "40px"}} />
			</div>
			<div className={Styles.Homepage_first__gridItem}>
				<h4>knitwear</h4>
				<img src={knitwear} alt='knitwear' style={{width: "40px"}} />
			</div>
		</div>
	);
};

export default Sidebar;
