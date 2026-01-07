export default function Home() {
	return (
		<div className="flex flex-col justify-center min-h-[80vh] gap-8">
			<div className="flex flex-col gap-2">
				<span className="text-neutral-500 uppercase tracking-[0.4em] text-xs font-bold">
					Software Engineer & Designer
				</span>
				<h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none">
					Jake <br /> Patten
				</h1>
			</div>
			<div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
				<p className="text-xl text-neutral-400 max-w-lg leading-relaxed">
					CS student at the University of Georgia, passionate about web development and software engineering.
				</p>
				<div className="flex gap-4">
					<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:brightness-60 transition-all cursor-pointer">
						<a href="https://github.com/jpatten04" target="_blank">
							<img src="/src/assets/icons/github-icon.png" />
						</a>
					</div>
					<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:brightness-60 transition-all cursor-pointer">
						<a href="https://www.linkedin.com/in/jake-patten" target="_blank">
							<img src="/src/assets/icons/linkedin-icon.png" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
