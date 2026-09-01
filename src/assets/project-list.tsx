export const ProjectList = [
	{
		title: "Movie Recommender",
		imgUrls: [
			import.meta.env.BASE_URL + "assets/images/movie-recommender/search.png",
			import.meta.env.BASE_URL + "assets/images/movie-recommender/details.png",
			import.meta.env.BASE_URL + "assets/images/movie-recommender/recommendations.png",
		],
		description:
			"A web application that allows users to search for movies, explore detailed information, and receive AI-based or genre-based movie recommendations. Built with Vite + React on the frontend and Flask on the backend, this app leverages TMDb API for movie data and optionally Hugging Face AI models for personalized recommendations.",
		techStack: ["Vite + React", "Python + Flask", "TMDb API", "Hugging Face AI model", "TailwindCSS"],
		githubLink: "https://github.com/jpatten04/movie-recommender",
		demoLink: "",
	},
	{
		title: "Futures Trading Journal",
		imgUrls: [
			import.meta.env.BASE_URL + "assets/images/futures-trading-journal/stats.png",
			import.meta.env.BASE_URL + "assets/images/futures-trading-journal/calendar.png",
		],
		description:
			"A sophisticated, client-side web application for futures traders to meticulously track their performance. This journal calculates advanced statistics, provides temporal analysis (daily, weekly, monthly), and offers full data portability via CSV files.",
		techStack: ["HTML", "CSS", "JavaScript"],
		githubLink: "https://github.com/jpatten04/trading-journal",
		demoLink: "https://jpatten04.github.io/trading-journal/",
	},
	{
		title: "Pixel Art Canvas",
		imgUrls: [import.meta.env.BASE_URL + "assets/images/pixel-art-canvas/canvas.png"],
		description:
			"A lightweight, web-based pixel art application that allows users to create digital artwork right in their browser. This project demonstrates core front-end development skills using pure HTML, CSS, and JavaScript without any external libraries or frameworks.",
		techStack: ["HTML", "CSS", "JavaScript"],
		githubLink: "https://github.com/jpatten04/pixel-art-canvas",
		demoLink: "https://jpatten04.github.io/pixel-art-canvas/",
	},
];
