import type { Project } from "../types/project.type";

export const projects: Array<Project> = [
  {
    name: "Code Reviewer(AI Agent)",
    desc: "Implemented an autonomous self-correcting agent using LLM tool-calling and Zod-validated feedback units. The agent reviews and improves code snippets based on user requirements, leveraging Mistral AI models and Vercel's AI SDK for seamless integration.",
    img: "/code-reviewer-browser-mockup.avif",
    public_url: "https://code-reviewer-theta-one.vercel.app/",
    github: "https://github.com/rishisoyal/Code-Reviewer",
    techStack: ["NextJS", "Vercel AI SDK", "Zod", "Typescript", "Mistral AI"],
  },
  {
    name: "Weather App",
    desc: "A sleek, modern web application that displays current weather and 3-day forecast for any city using the WeatherAPI API. Users can also get local weather data automatically via IP address.",
    img: "/weather_app-browser-mockup.avif",
    public_url: "https://weather-app-rishisoyal.vercel.app/",
    github: "https://github.com/rishisoyal/Weather-App",
    techStack: ["Javascript", "Svelte"],
  },
  {
    name: "My Portfolio Website",
    desc: "A personal portfolio website to showcase my projects, skills, and experience. Built with SvelteKit and Tailwind CSS, featuring dark mode and custom cursor.",
    img: "/portfolio-browser-mockup.avif",
    public_url: "https://rishisoyal.pages.dev",
    github: "https://github.com/rishisoyal/portfolio-in-svelte",
    techStack: [
      "SvelteKit",
      "Tailwind CSS",
      "Typescript",
      "Cloudflare",
      "Zod",
      "Resend",
    ],
  },
  {
    name: "Web Music Player",
    desc: "A web based music player built completely from scratch in HTML5, CSS3 and JacaScript",
    img: "/music_player.avif",
    public_url: "https://music-player-rishisoyal.vercel.app/",
    github: "https://github.com/rishisoyal/Music-Player",
    techStack: [
     "HTML5",
     "CSS3",
     "Javascript"
    ],
  },
];
