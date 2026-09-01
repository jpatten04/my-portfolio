export default function About() {
	return (
		<div className="flex flex-col gap-12">
			<h2 className="text-5xl font-bold tracking-tighter">About</h2>
			<div className="flex items-center gap-8">
				<div className="w-50 aspect-square bg-neutral-900 rounded-3xl overflow-hidden border border-white/5">
					<div className="w-full h-full flex items-center justify-center text-neutral-700 uppercase tracking-widest text-xs">
						Profile Image
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h3 className="text-5xl font-bold">Jake Patten</h3>
					<p className="w-200 text-xl text-neutral-400">
						I am a Computer Science student at the University of Georgia driven by a passion for building
						practical solutions through code. I am interested in software design, web development, and
						cybersecurity. My approach blends analytical thinking with a focus on clean design and
						user-centric execution. I am eager to contribute my foundational skills and collaborative
						mindset to a dynamic internship where I can grow and help build meaningful technology.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
				<div className="flex flex-col gap-4">
					<h4 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Education</h4>
					<div className="flex flex-col gap-6">
						<div>
							<h5 className="font-bold">University of Georgia</h5>
							<p className="text-sm text-neutral-500">B.S. in Computer Science</p>
							<p className="text-xs text-neutral-600 mt-1">2024 - 2027</p>
							<p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-wider">
								Cert. in Cybersecurity & Privacy
							</p>
						</div>
						<div>
							<h5 className="font-bold">Kennesaw State University</h5>
							<p className="text-sm text-neutral-500">B.S. in Computer Science</p>
							<p className="text-xs text-neutral-600 mt-1">2023 - 2024</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<h4 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Skills</h4>
					<div className="flex flex-wrap gap-2">
						{[
							"Python",
							"JavaScript",
							"TypeScript",
							"Java",
							"C#",
							"C",
							"React",
							"Flask",
							"Vite",
							"Git",
							"GitHub",
							"PostgreSQL",
							"SQLite",
							"RESTful APIs",
							"Linux",
						].map((skill) => (
							<span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-neutral-400">
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
