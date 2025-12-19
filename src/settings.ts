export const profile = {
	fullName: 'Adheesh Juvekar',
	title: 'PhD Student',
	institute: 'University of Illinois at Urbana-Champaign',
	author_name: 'Adheesh Juvekar', // Author name to be highlighted in the papers section
	research_areas: [
		{ 
			title: 'Multimodal Learning & Generative AI', 
			description: "I'm particularly interested in multimodal understanding, image/video generation. Currently, I am exploring hallucination mitigation in grounded vision-language models and controllable image/video generation with diffusion/flow-based models. I'm also interested in emerging direction at the intersection of generation and perception such as 3D-consistent generation, egocentric video understanding/editing as a step towards reliable and robust world models.", 
			field: 'Computer Science' 
		},
		// {
		// 	title: 'Generative AI',
		// 	description: 'Brief description of the research interest',
		// 	field: 'Computer Science'
		// },
		// {
		// 	title: 'Computer Vision',
		// 	description: 'Brief description of the research interest',
		// 	field: 'Computer Science'
		// },
		// {
		// 	title: '3D Vision',
		// 	description: 'Brief description of the research interest',
		// 	field: 'Computer Science'
		// },
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
	darkTheme: '', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Adheesh Juvekar',
	default_description: 'Adheesh Juvekar - PhD Student at University of Illinois at Urbana-Champaign',
	default_image: '',
}
