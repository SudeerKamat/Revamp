import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					<span>Revamp</span> For Salesforce
				</h1>
				<p>
					<span>Revamp Your Salesforce Experience</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://chrome.google.com/webstore/detail/revamp-for-salesforce/llgcejoamphenmjaoiipcipcohjpmjof"}
				>
					<div className={styles.button}>
						<p>Install Chrome Extension</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://twitter.com/sudeerkamat"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
<div>
						<a
							href="https://linkedin.com/in/sudeerkamat"
							target={"_blank"}
						>
							Follow us on LinkedIn
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
