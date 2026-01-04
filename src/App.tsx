import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import styles from "./App.module.css";

export default function App() {
	return (
		<div className={styles.container}>
			<div id="header">
				<Header />
			</div>
			<section id="home">
				<Home />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}
