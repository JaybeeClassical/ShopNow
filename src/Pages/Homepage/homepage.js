import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Styles from "../Homepage/homepage.module.scss";
import Sidebar from "../../Components/Sidebar/side";
import Pigination from "../../Components/pagination/pagination";
import Items from "../../Components/Items/items";

function Homepage() {
	return (
		<>
			<div className={Styles.Homepage}>
				<Header />
				<div className={Styles.Homepage_banner__wrapper}>
					<div className={Styles.Homepage_banner}>
						<div className={Styles.Homepage_banner__text}>
							<h1 className={Styles.Homepage_banner__text___header}>
								$20 Off $100 plus, <br /> Get Free Next-day Delivery.
							</h1>
							<h4>With code 210001</h4>
							<button className={Styles.Homepage_banner__button} type='button'>
								Take me to shopping
							</button>
						</div>
					</div>
				</div>
				<div className={Styles.Homepage_item__grid}>
					<Sidebar />

					<div className={Styles.Homepage_second__grid}>
						<h1 className={Styles.Homepage_second__gridText}>Coats</h1>
						<p className={Styles.Homepage_viewMore}>View more</p>
						<Pigination />
						<Items />
						<p className={Styles.Homepage_items__viewMore}>View more</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Homepage;
