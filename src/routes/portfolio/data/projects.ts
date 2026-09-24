import type { Project } from '../types/project.type';

export const projects: Array<Project> = [
	{
		name: 'Code Reviewer(AI Agent)',
		desc: "Implemented an autonomous self-correcting agent using LLM tool-calling and Zod-validated feedback units. The agent reviews and improves code snippets based on user requirements, leveraging Mistral AI models and Vercel's AI SDK for seamless integration.",
		img: '/code-reviewer-browser-mockup.avif',
		public_url: 'https://code-reviewer-theta-one.vercel.app/',
		github: 'https://github.com/rishisoyal/Code-Reviewer',
		techStack: ['NextJS', 'Vercel AI SDK', 'Zod', 'Typescript', 'Mistral AI']
	},
	{
		name: 'IT solutions platform',
		desc: 'Modern, responsive company website for a software development agency focused on advanced eCommerce and custom digital solutions. Features smooth animations, multi-section layout (Home, About, Industries, Services, Solutions, Contact), and a clean professional UI. Built with React (Vite) + Tailwind CSS and deployed on Vercel.',
		img: '/CTL_browser_mockup.avif',
		public_url: 'https://company-website-frontend-woad.vercel.app/',
		github: 'https://github.com/rishisoyal/company-website-frontend',
		techStack: ['ReactJS', 'TailwindCSS', 'Lenis Smooth Scroll', 'Motion', 'Animate.CSS']
	},
	{
		name: 'Admin Dashboard of the Custom Tech Labs',
		desc: 'Secure admin panel for the Custom Tech Labs company website. Features a clean, modern login interface and provides backend control for managing the public-facing site. Built as the administrative companion to the frontend marketing website, enabling content and operational management behind authentication.',
		img: '/CTL_Dashboard.avif',
		public_url: 'https://company-website-backend-admin.vercel.app/',
		github: 'https://github.com/rishisoyal/company-website-backend-admin',
		techStack: ['Next.JS', 'axios', 'mongoose', 'zustand', 'bcrypt', 'Lucide']
	},
	{
		name: 'Backend API of CTL and Dashboard',
		desc: 'RESTful backend API that powers both the public company website and the admin dashboard. Handles authentication, dynamic content management (text, cards, and media). Built with a clean modular architecture and designed to serve as the single source of truth for the entire Custom Tech Labs platform.',
		img: '/ctl_api.avif',
		public_url: 'https://api-custom-tech-labs.vercel.app',
		github: 'https://github.com/rishisoyal/api.custom-tech-labs',
		techStack: [
			'Hono',
			'TypeScript',
			'MongoDB',
			'Mongoose',
			'JWT (jose)',
			'bcrypt',
			'Cloudinary',
			'Vercel'
		]
	},
	{
		name: 'Weather App',
		desc: 'A sleek, modern web application that displays current weather and 3-day forecast for any city using the WeatherAPI API. Users can also get local weather data automatically via IP address.',
		img: '/weather_app-browser-mockup.avif',
		public_url: 'https://weather-app-rishisoyal.vercel.app/',
		github: 'https://github.com/rishisoyal/Weather-App',
		techStack: ['Javascript', 'Svelte']
	},
	{
		name: 'My Portfolio Website',
		desc: 'A personal portfolio website to showcase my projects, skills, and experience. Built with SvelteKit and Tailwind CSS, featuring dark mode and custom cursor.',
		img: '/portfolio-browser-mockup.avif',
		public_url: 'https://rishisoyal.pages.dev',
		github: 'https://github.com/rishisoyal/portfolio-in-svelte',
		techStack: ['SvelteKit', 'Tailwind CSS', 'Typescript', 'Cloudflare', 'Zod', 'Resend']
	},
	{
		name: 'Web Music Player',
		desc: 'A web based music player built completely from scratch in HTML5, CSS3 and JavaScript',
		img: '/music_player.avif',
		public_url: 'https://music-player-rishisoyal.vercel.app/',
		github: 'https://github.com/rishisoyal/Music-Player',
		techStack: ['HTML5', 'CSS3', 'Javascript']
	}
];
