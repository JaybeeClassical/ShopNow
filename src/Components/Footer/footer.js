import React from "react";
import Styles from "../Footer/footer.module.scss";

const Footer = () => {
	return (
		<>
			<div className={Styles.footer__wrapper}>
				<div className={Styles.footer_column}>
					<h3>ShopNow</h3>
					<p>2018</p>
				</div>
				<div className={Styles.footer_column}>
					<h3>Customers</h3>
					<p>Buyer</p>
					<p>Supplier</p>
				</div>
				<div className={Styles.footer_column}>
					<h3>Company</h3>
					<p>About us</p>
					<p>Careers</p>
					<p>Contact Us</p>
				</div>
				<div className={Styles.footer_column}>
					<h3>Further Information</h3>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
				</div>
				<div className={Styles.footer_column}>
					<h3>Further Information</h3>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
				</div>
			</div>
			<div className={Styles.Footer__createBy}>
				<p className={Styles.Footer__paragraph}>Created by Jude Obiejesi</p>
			</div>
		</>
	);
};

export default Footer;
