import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectList } from "../../assets/project-list";

export default function Projects() {
	return (
		<div className="flex flex-col gap-12">
			<div className="flex flex-col gap-4">
				<h2 className="text-5xl font-bold tracking-tighter">Projects</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{ProjectList.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						imgUrls={project.imgUrls}
						description={project.description}
						techStack={project.techStack}
						githubLink={project.githubLink}
						demoLink={project.demoLink}
					/>
				))}
			</div>
		</div>
	);
}
