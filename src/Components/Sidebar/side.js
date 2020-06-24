import React from "react";
import Styles from "../Sidebar/sidebar.module.scss";
import Trouser from "../../Assets/trouser.jpg";
import Shoe from "../../Assets/shoe.png";
import Top from "../../Assets/top.jpg";
import Sweater from "../../Assets/sweater.jpg";
import Jacket from "../../Assets/jacket_image.jpg";

const Sidebar = () => {
	return (
		<div className={Styles.Homepage_first__grid}>
			<div className={Styles.Homepage_first__gridMenu}>
				<h4>Home</h4>
			</div>
			<div className={Styles.Homepage_first__gridItem}>
				<h4>New In</h4>
				<img
					src={Shoe}
					alt='knitwear'
					style={{width: "40px", borderRadius: "0px 12px 12px 0px"}}
				/>
			</div>
			<div className={Styles.Homepage_first__gridItem}>
				<h4>Coats</h4>
				<img
					src={Top}
					alt='knitwear'
					style={{width: "40px", borderRadius: "0px 12px 12px 0px"}}
				/>
			</div>
			<div className={Styles.Homepage_first__gridItem}>
				<h4>tops</h4>
				<img
					src={Sweater}
					alt='knitwear'
					style={{width: "40px", borderRadius: "0px 12px 12px 0px"}}
				/>
			</div>
			<div className={Styles.Homepage_first__gridItem}>
				<h4>knitwear</h4>
				<img
					src={Trouser}
					alt='knitwear'
					style={{width: "40px", borderRadius: "0px 12px 12px 0px"}}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
