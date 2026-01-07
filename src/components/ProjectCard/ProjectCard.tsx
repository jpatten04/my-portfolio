import { useState } from "react";

interface Props {
	title: string;
	imgUrls: string[];
	description: string;
	techStack: string[];
	githubLink: string;
}

export default function ProjectCard({ title, imgUrls, description, techStack, githubLink }: Props) {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

	const nextImg = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImgIndex((prev) => (prev + 1) % imgUrls.length);
	};

	const prevImg = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImgIndex((prev) => (prev - 1 + imgUrls.length) % imgUrls.length);
	};

	return (
		<>
			<div
				className="group relative flex flex-col bg-[#111] rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer"
				onClick={() => {
					setIsActive(true);
					setCurrentImgIndex(0);
				}}
			>
				<div className="aspect-video w-full bg-neutral-900 overflow-hidden">
					<img
						src={imgUrls[0]}
						alt={title}
						className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
					/>
				</div>
				<div className="p-6 flex flex-col gap-3">
					<div className="flex justify-between items-start">
						<h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
					</div>
					<p className="text-neutral-400 line-clamp-2 text-sm leading-relaxed">{description}</p>
					<ul className="flex gap-2 flex-wrap mt-2">
						{techStack.slice(0, 3).map((t) => (
							<li
								key={t}
								className="text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded text-neutral-300"
							>
								{t}
							</li>
						))}
					</ul>
				</div>
			</div>

			{isActive && (
				<div
					className="fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center z-200 p-6 md:p-20"
					onClick={() => setIsActive(false)}
				>
					<div
						className="max-w-5xl w-full flex flex-col gap-8 overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="relative aspect-video w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group/carousel">
							<img
								src={imgUrls[currentImgIndex]}
								alt={title}
								className="w-full h-full object-contain transition-opacity duration-500"
							/>

							{imgUrls.length > 1 && (
								<>
									<button
										onClick={prevImg}
										className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
									>
										←
									</button>
									<button
										onClick={nextImg}
										className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
									>
										→
									</button>
									<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
										{imgUrls.map((_, i) => (
											<button
												key={i}
												onClick={(e) => {
													e.stopPropagation();
													setCurrentImgIndex(i);
												}}
												className={`h-1.5 rounded-full transition-all duration-300 ${
													i === currentImgIndex ? "w-8 bg-white" : "w-2 bg-white/30"
												}`}
											/>
										))}
									</div>
								</>
							)}
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
								<h1 className="text-5xl md:text-7xl font-bold tracking-tighter">{title}</h1>
								<a
									href={githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-all active:scale-95"
									onClick={(e) => e.stopPropagation()}
								>
									View Source Code
								</a>
							</div>
							<p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">{description}</p>
							<div className="flex flex-col gap-4">
								<h4 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">
									Technologies
								</h4>
								<div className="flex gap-3 flex-wrap">
									{techStack.map((t) => (
										<span
											key={t}
											className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-neutral-200 text-sm"
										>
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
					<button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors uppercase tracking-[0.3em] text-xs">
						Close
					</button>
				</div>
			)}
		</>
	);
}
