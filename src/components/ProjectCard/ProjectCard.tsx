import { useState } from "react";
import styles from "./ProjectCard.module.css";

interface Props {
	title: string;
	imgUrls: string[];
	description: string;
	techStack: string[];
	githubLink: string;
}

export default function ProjectCard({ title, imgUrls, description, techStack, githubLink }: Props) {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<>
			<div className={styles.container} onClick={() => setIsActive(!isActive)}>
				<div className={styles.picture}>
					<img src={imgUrls[0]} alt={title} />
				</div>
				<h3 className={styles.title}>{title}</h3>
				<ul className={styles.techPreview}>
					{techStack.slice(0, 4).map((t) => (
						<li key={t}>{t}</li>
					))}
				</ul>
			</div>

			{isActive && (
				<div className={styles.overlay} onClick={() => setIsActive(false)}>
					<div className={styles.picture}></div>
					<h1 className={styles.title}>{title}</h1>
				</div>
			)}
		</>
	);
}
