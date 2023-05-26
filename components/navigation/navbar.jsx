import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://chrome.google.com/webstore/detail/revamp-for-salesforce/llgcejoamphenmjaoiipcipcohjpmjof" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/public/20230515_111544-128.png"></img>
			</a>
		</nav>
	);
}
