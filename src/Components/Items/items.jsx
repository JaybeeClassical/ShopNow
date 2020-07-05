import React from "react";
import Styles from "../Items/items.module.scss";
import Trouser from "../../Assets/trouser.jpg";
import Shoe from "../../Assets/shoe.png";
import Top from "../../Assets/top.jpg";
import Sweater from "../../Assets/sweater.jpg";
import Jacket from "../../Assets/jacket_image.jpg";

const Items = ({title}) => {
	return (
		<div className={Styles.Homepage_item}>
			<div className={Styles.Homepage_secondGrid__boxes}>
				<img
					src={Jacket}
					alt='female jacket'
					className={Styles.Homepage_secondGrid__img}
				/>
				<h3 className={Styles.Homepage_secondGrid__title}>{title}</h3>
			</div>
			<div className={Styles.Homepage_secondGrid__boxes}>
				<img
					src={Trouser}
					alt='female trouser'
					className={Styles.Homepage_secondGrid__img}
				/>
				<h3 className={Styles.Homepage_secondGrid__title}>{title}</h3>
			</div>
			<div className={Styles.Homepage_secondGrid__boxes}>
				<img
					src={Shoe}
					alt='female shoe'
					className={Styles.Homepage_secondGrid__img}
				/>
				<h3 className={Styles.Homepage_secondGrid__title}>{title}</h3>
			</div>

			<div className={Styles.Homepage_secondGrid__boxes}>
				<img
					src={Jacket}
					alt='female jacket'
					className={Styles.Homepage_secondGrid__img}
				/>
				<h3 className={Styles.Homepage_secondGrid__title}>{title}</h3>
			</div>
			<div className={Styles.Homepage_secondGrid__boxes}>
				<img
					src={Sweater}
					alt='female sweater'
					className={Styles.Homepage_secondGrid__img}
				/>
				<h3 className={Styles.Homepage_secondGrid__title}>{title}</h3>
			</div>
			<div className={Styles.Homepage_secondGrid__boxes}>
				<img
					src={Top}
					alt='female top'
					className={Styles.Homepage_secondGrid__img}
				/>
				<h3 className={Styles.Homepage_secondGrid__title}>{title}</h3>
			</div>
		</div>
	);
};

export default Items;
