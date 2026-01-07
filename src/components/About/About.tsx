export default function About() {
	return (
		<div className="flex flex-col gap-20">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				<div className="flex flex-col gap-6">
					<h2 className="text-5xl font-bold tracking-tighter">About</h2>
					<p className="text-xl text-neutral-400 leading-relaxed">
						I'm a Computer Science student at the University of Georgia with a focus on 
						cybersecurity and privacy. I enjoy building efficient, secure, and user-friendly 
						applications.
					</p>
					<div className="flex flex-col gap-4 text-neutral-500">
						<p>Pursuing a B.S. in Computer Science at UGA.</p>
						<p>Based in Athens, GA.</p>
					</div>
					<button className="w-fit px-8 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
						Download CV
					</button>
				</div>
				<div className="aspect-square bg-neutral-900 rounded-3xl overflow-hidden border border-white/5">
					<div className="w-full h-full flex items-center justify-center text-neutral-700 uppercase tracking-widest text-xs">
						Profile Image
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
				<div className="flex flex-col gap-4">
					<h4 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Education</h4>
					<div className="flex flex-col gap-6">
						<div>
							<h5 className="font-bold">University of Georgia</h5>
							<p className="text-sm text-neutral-500">B.S. in Computer Science</p>
							<p className="text-xs text-neutral-600 mt-1">2024 - 2027</p>
							<p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-wider">Cert. in Cybersecurity & Privacy</p>
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
							"Python", "JavaScript", "TypeScript", "Java", "C#", "C", 
							"React", "Flask", "Vite", "Git", "GitHub", "PostgreSQL", 
							"SQLite", "RESTful APIs", "Linux"
						].map((skill) => (
							<span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-neutral-400">
								{skill}
							</span>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<h4 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Experience</h4>
					<div className="flex flex-col gap-6">
						<div>
							<h5 className="font-bold">Marco’s Pizza</h5>
							<p className="text-sm text-neutral-500">Manager / Shift Leader</p>
							<p className="text-xs text-neutral-600 mt-1">2021 - 2023</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
