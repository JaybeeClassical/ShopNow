import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Styles from "../Homepage/homepage.module.scss";
import Sidebar from "../../Components/Sidebar/side";
import Pigination from "../../Components/pagination/pagination";
import Trouser from "../../Assets/trouser.jpg";
import Shoe from "../../Assets/shoe.png";
import Top from "../../Assets/top.jpg";
import Sweater from "../../Assets/sweater.jpg";
import Jacket from "../../Assets/jacket_image.jpg";

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
						<div className={Styles.Homepage_item}>
							<div className={Styles.Homepage_secondGrid__boxes}>
								<img
									src={Jacket}
									alt='female jacket'
									className={Styles.Homepage_secondGrid__img}
								/>
								<h3 className={Styles.Homepage_secondGrid__text}>
									Women's Jacket
								</h3>
							</div>
							<div className={Styles.Homepage_secondGrid__boxes}>
								<img
									src={Trouser}
									alt='female trouser'
									className={Styles.Homepage_secondGrid__img}
								/>
								<h3 className={Styles.Homepage_secondGrid__text}>
									Women's Trousers
								</h3>
							</div>
							<div className={Styles.Homepage_secondGrid__boxes}>
								<img
									src={Shoe}
									alt='female shoe'
									className={Styles.Homepage_secondGrid__img}
								/>
								<h3 className={Styles.Homepage_secondGrid__text}>
									Women's Shoe
								</h3>
							</div>

							<div className={Styles.Homepage_secondGrid__boxes}>
								<img
									src={Jacket}
									alt='female jacket'
									className={Styles.Homepage_secondGrid__img}
								/>
								<h3 className={Styles.Homepage_secondGrid__text}>
									Women's Jacket
								</h3>
							</div>
							<div className={Styles.Homepage_secondGrid__boxes}>
								<img
									src={Sweater}
									alt='female sweater'
									className={Styles.Homepage_secondGrid__img}
								/>
								<h3 className={Styles.Homepage_secondGrid__text}>
									Women's Sweater
								</h3>
							</div>
							<div className={Styles.Homepage_secondGrid__boxes}>
								<img
									src={Top}
									alt='female top'
									className={Styles.Homepage_secondGrid__img}
								/>
								<h3 className={Styles.Homepage_secondGrid__text}>
									Women's Top
								</h3>
							</div>
						</div>
						<p className={Styles.Homepage_items__viewMore}>View more</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Homepage;
