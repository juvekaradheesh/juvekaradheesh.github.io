export const profile = {
	fullName: 'Adheesh Juvekar',
	title: 'PhD Student',
	institute: 'University of Illinois at Urbana-Champaign',
	author_name: 'Adheesh Juvekar', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Multimodal Learning & Generative AI',
			description: "My research focuses on how models connect language with visual evidence for multimodal understanding, generation, and editing. My current work investigates how models interpret visual regions and use regional information to guide reasoning and control visual content. Through this work, I aim to develop models that understand scene structure and support precise, temporally consistent visual generation and editing. I'm also interested in reasoning at the intersection of generation and perception, including spatial and temporal reasoning, 3D-consistent generation, and unified models for understanding, generation, and editing, as a step towards reliable and robust world models.",
			field: 'Computer Science'
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'adheesh2@illinois.edu',
	linkedin: 'https://www.linkedin.com/in/juvekaradheesh',
	x: 'https://www.x.com/adheeshjuvekar',
	github: 'https://github.com/juvekaradheesh',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?hl=en&user=dVDyCTIAAAAJ&inst=13410158990364976897',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://juvekaradheesh.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'bumblebee', // Select one of the Daisy UI Themes or create your own
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Adheesh Juvekar',
	default_description: 'Adheesh Juvekar - PhD Student at University of Illinois at Urbana-Champaign',
	default_image: '',
}
