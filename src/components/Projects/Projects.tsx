import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectList } from "../../assets/project-list";
import styles from "./Projects.module.css";

export default function Projects() {
	return (
		<div className={styles.container}>
			{ProjectList.map((project, index) => (
				<ProjectCard
					key={index}
					title={project.title}
					imgUrls={project.imgUrls}
					description={project.description}
					techStack={project.techStack}
					githubLink={project.githubLink}
				/>
			))}
		</div>
	);
}
