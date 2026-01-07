export default function Contact() {
	return (
		<div className="flex flex-col gap-12">
			<div className="flex flex-col gap-4">
				<h2 className="text-5xl font-bold tracking-tighter">Contact</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<h4 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Email</h4>
						<a
							href="mailto:jake@patten-family.net"
							className="text-2xl hover:text-neutral-400 transition-colors"
						>
							jake@patten-family.net
						</a>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Socials</h4>
						<div className="flex gap-6">
							<a
								href="https://www.linkedin.com/in/jake-patten"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-neutral-400 transition-colors underline decoration-neutral-800 underline-offset-8"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/jpatten04"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-neutral-400 transition-colors underline decoration-neutral-800 underline-offset-8"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>

				<form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
					<div className="flex flex-col gap-2">
						<label className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Name</label>
						<input
							type="text"
							className="bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 transition-all"
							placeholder="John Doe"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Email</label>
						<input
							type="email"
							className="bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 transition-all"
							placeholder="john@example.com"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Message</label>
						<textarea
							rows={4}
							className="bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 transition-all resize-none"
							placeholder="Your message..."
						/>
					</div>
					<button className="bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-all active:scale-[0.98]">
						Send Message
					</button>
				</form>
			</div>

			<div className="mt-20 pt-10 border-t border-white/5 text-center text-neutral-600 text-xs uppercase tracking-[0.5em]">
				© 2026 JAKE PATTEN • ALL RIGHTS RESERVED
			</div>
		</div>
	);
}
