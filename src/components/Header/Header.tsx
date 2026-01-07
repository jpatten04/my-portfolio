import { HashLink } from "react-router-hash-link";
export default function Header() {
	return (
		<div className="flex justify-center items-center gap-10 fixed top-0 left-0 w-full h-(--header-height) bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 z-100 text-sm font-medium uppercase tracking-widest">
			<HashLink smooth to="/#home" className="hover:text-gray-400 transition-colors">
				Home
			</HashLink>
			<HashLink smooth to="/#about" className="hover:text-gray-400 transition-colors">
				About
			</HashLink>
			<HashLink smooth to="/#projects" className="hover:text-gray-400 transition-colors">
				Projects
			</HashLink>
			<HashLink smooth to="/#contact" className="hover:text-gray-400 transition-colors">
				Contact
			</HashLink>
		</div>
	);
}
