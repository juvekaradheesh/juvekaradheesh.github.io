export const experiences = [
	{
		title: "Applied Scientist Intern",
		company: "Amazon Inc.",
		time: "Summer 2023",
	},
	{
		title: "ML and NLP Intern",
		company: "Deloitte",
		time: "Summer 2021",
	},
	{
		title: "Graduate Research Assistant",
		company: "University of Illinois at Urbana-Champaign",
		time: "Aug 2024 - Present",
	},
	{
		title: "Graduate Research Assistant",
		company: "Virginia Tech",
		time: "Jan 2022 - Aug 2024",
	},
];

export const education = [
	{
		school: "University of Illinois at Urbana-Champaign",
		time: "2024-Present",
		degree: "Ph.D. in Computer Science",
	},
	{
		school: "Virginia Tech",
		time: "2023",
		degree: "M.S. in Computer Science",
	},
	{
		school: "Vivekanand Education Society's Institute Of Technology (VESIT), University of Mumbai",
		time: "2019",
		degree: "B.E. in Computer Science",
	},
];

export const skills = [
	{
		title: '',
		description: '',
	},
	// {
	// 	title: 'Experimental Techniques',
	// 	description: 'Spectroscopy, Isolation of Radioactive Elements, Radiation Measurement',
	// },
];

export const publications = [
	{
		title: 'PyraTok: Language-Aligned Pyramidal Tokenizer for Video Understanding and Generation',
		authors: 'Onkar Susladkar, Tushar Prakash, Adheesh Juvekar, Kiet A Nguyen, Dong-Hwan Jang, Inderjit S Dhillon, Ismini Lourentzou',
		journal: 'arXiv preprint arXiv:2601.16210',
		time: '2026',
		link: 'https://arxiv.org/abs/2601.16210',
		abstract: 'Discrete video VAEs underpin modern text-to-video generation and video understanding systems, yet existing tokenizers typically learn visual codebooks at a single scale with limited vocabularies and shallow language supervision, leading to poor cross-modal alignment and zero-shot transfer. We introduce PyraTok, a language-aligned pyramidal tokenizer that learns semantically structured discrete latents across multiple spatiotemporal resolutions. PyraTok builds on a pretrained video VAE and a novel Language aligned Pyramidal Quantization (LaPQ) module that discretizes encoder features at several depths using a shared large binary codebook, yielding compact yet expressive video token sequences. To tightly couple visual tokens with language, PyraTok jointly optimizes multi-scale text-guided quantization and a global autoregressive objective over the token hierarchy. Across ten benchmarks, PyraTok delivers state-of-the-art (SOTA) video reconstruction, consistently improves text-to-video quality, and sets new SOTA zero-shot performance on video segmentation, temporal action localization, and video understanding, scaling robustly to up to 4K/8K resolutions.',
		image: '/papers/pyratok.png',
	},
	{
		title: 'Counterfactual Segmentation Reasoning: Diagnosing and Mitigating Pixel-Grounding Hallucination',
		authors: 'Xinzhuo Li*, Adheesh Juvekar*, Xingyou Liu, Muntasir Wahed, Kiet A Nguyen, Ismini Lourentzou',
		journal: 'arXiv preprint arXiv:2506.21546',
		time: '2025',
		link: 'https://plan-lab.github.io/projects/hallusegbench/',
		abstract: 'Segmentation Vision-Language Models (VLMs) have significantly advanced grounded visual understanding, yet they remain prone to pixel-grounding hallucinations, producing masks for incorrect objects or for objects that are entirely absent. Existing evaluations rely almost entirely on text- or label-based perturbations, which check only whether the predicted mask matches the queried label. Such evaluations overlook the spatial footprint and severity of hallucination and therefore fail to reveal vision-driven hallucinations, which are more challenging and more prevalent. To address this gap, we formalize the task of Counterfactual Segmentation Reasoning (CSR), where a model must segment the referenced object in the factual image and abstain in its counterfactual counterpart. To support this task, we curate HalluSegBench, the first large-scale benchmark to diagnose referring and reasoning expression segmentation hallucinations using controlled visual counterfactuals, alongside new evaluation metrics that measure hallucination severity and disentangle vision- and language-driven failure modes. We further introduce RobustSeg, a segmentation VLM trained with counterfactual fine-tuning (CFT) to learn when to segment and when to abstain. Experimental results confirm RobustSeg reduces hallucinations by 30%, while improving segmentation performance on FP-RefCOCO(+/g)',
		notes: '* Equal contribution',
		image: '/papers/halluseg.jpg',
	},
	{
		title: 'CALICO: Part-Focused Semantic Co-Segmentation with Large Vision-Language Models',
		authors: 'Kiet A Nguyen, Adheesh Juvekar, Tianjiao Yu, Muntasir Wahed, Ismini Lourentzou',
		journal: 'Proceedings of the Computer Vision and Pattern Recognition Conference',
		time: '2025',
		link: 'https://plan-lab.github.io/projects/calico/',
		abstract: 'Recent advances in Large Vision-Language Models (LVLMs) have enabled general-purpose vision tasks through visual instruction tuning. While existing LVLMs can generate segmentation masks from text prompts for single images, they struggle with segmentation-grounded reasoning across images, especially at finer granularities such as object parts. In this paper, we introduce the new task of part-focused semantic co-segmentation, which involves identifying and segmenting common objects, as well as common and unique object parts across images. To address this task, we present Calico, the first LVLM designed for multi-image part-level reasoning segmentation. Calico features two proposed components, a novel Correspondence Extraction Module that identifies semantic part-level correspondences, and Correspondence Adaptation Modules that embed this information into the LVLM to facilitate multi-image understanding in a parameter-efficient manner. To support training and evaluation, we curate MixedParts, a large-scale multi-image segmentation dataset containing ~2.4M samples across ~44K images spanning diverse object and part categories. With just 0.3% of its parameters finetuned, Calico achieves strong performance on this challenging task.',
		image: '/papers/calico.jpg',
	},
	{
		title: 'Prima: Multi-image vision-language models for reasoning segmentation',
		authors: 'Muntasir Wahed, Kiet A Nguyen, Adheesh Juvekar, Xinzhuo Li, Xiaona Zhou, Vedant Shah, Tianjiao Yu, Pinar Yanardag, Ismini Lourentzou',
		journal: 'arXiv preprint arXiv:2412.15209',
		time: '2024',
		link: 'https://plan-lab.github.io/projects/prima/',
		abstract: 'Despite significant advancements in Large Vision-Language Models (LVLMs) capabilities, existing pixel-grounding models operate in single-image settings, limiting their ability to perform detailed, fine-grained comparisons across multiple images. Conversely, current multi-image understanding models lack pixel-level grounding. Our work addresses this gap by introducing the task of multi-image pixel-grounded reasoning segmentation alongside PRIMA, an LVLM that integrates pixel-level grounding with robust multi-image reasoning to produce contextually rich, pixel-grounded explanations. Central to PRIMA is SQuARE, a vision module that injects cross-image relational context into compact query-based visual tokens before fusing them with the language backbone. To support training and evaluation, we curate M4Seg, a new multi-image reasoning segmentation benchmark consisting of ~744K question-answer pairs that require fine-grained visual understanding across multiple images. PRIMA outperforms state-of-the-art baselines with 7.83% and 11.25% improvements in Recall and S-IoU, respectively. Ablation studies further demonstrate the effectiveness of the proposed SQuARE module in capturing cross-image relationships.',
		image:'/papers/prima.jpg',
	},
	{
		title: 'MetaCompare 2.0: Differential ranking of ecological and human health resistome risks',
		authors: 'Monjura Afrin Rumi, Min Oh, Benjamin C Davis, Connor L Brown, Adheesh Juvekar, Peter J Vikesland, Amy Pruden, Liqing Zhang',
		journal: 'FEMS Microbiology Ecology',
		time: '2024',
		link: 'https://academic.oup.com/femsec/article/100/12/fiae155/7888989',
		abstract: 'While numerous environmental factors contribute to the spread of antibiotic resistance genes (ARGs), quantifying their relative contributions remains a fundamental challenge. Similarly, it is important to differentiate acute human health risks from environmental exposure, versus broader ecological risk of ARG evolution and spread across microbial taxa. Recent studies have proposed various methods for achieving such aims. Here, we introduce MetaCompare 2.0, which improves upon original MetaCompare pipeline by differentiating indicators of human health resistome risk (potential for human pathogens of acute resistance concern to acquire ARGs) from ecological resistome risk (overall mobility of ARGs and potential for pathogen acquisition). The updated pipeline’s sensitivity was demonstrated by analyzing diverse publicly-available metagenomes from wastewater, surface water, soil, sediment, human gut, and synthetic microbial communities. MetaCompare 2.0 provided distinct rankings of the metagenomes according to both human health resistome risk and ecological resistome risk, with both scores trending higher when influenced by anthropogenic impact or other stress. We evaluated the robustness of the pipeline to sequence assembly methods, sequencing depth, contig count, and metagenomic library coverage bias. The risk scores were remarkably consistent despite variations in these technological aspects. We packaged the improved pipeline into a publicly-available web service (http://metacompare.cs.vt.edu/) that provides an easy-to-use interface for computing resistome risk scores and visualizing results.',
		image: '/papers/metacompare.jpg',
	},
	{
		title: 'Uncertainty in Action: Confidence Elicitation in Embodied Agents',
		authors: 'Tianjiao Yu, Vedant Shah, Muntasir Wahed, Kiet A. Nguyen, Adheesh Juvekar, Tal August, Ismini Lourentzou',
		journal: 'arXiv preprint arXiv:2503.10628',
		time: '2025',
		link: 'https://plan-lab.github.io/projects/ece/',
		abstract: 'Expressing confidence is challenging for embodied agents navigating dynamic multimodal environments, where uncertainty arises from both perception and decision-making processes. We present the first work investigating embodied confidence elicitation in open-ended multimodal environments. We introduce Elicitation Policies, which structure confidence assessment across inductive, deductive, and abductive reasoning, along with Execution Policies, which enhance confidence calibration through scenario reinterpretation, action sampling, and hypothetical reasoning. Evaluating agents in calibration and failure prediction tasks within the Minecraft environment, we show that structured reasoning approaches, such as Chain-of-Thoughts, improve confidence calibration. However, our findings also reveal persistent challenges in distinguishing uncertainty, particularly under abductive settings, underscoring the need for more sophisticated embodied confidence elicitation methods.',
		image: '/papers/ece.jpg',
	}
	// {
	// 	title: 'The Radiation of Uranium Compounds',
	// 	authors: 'Marie Curie',
	// 	journal: 'Comptes Rendus de l’Académie des Sciences',
	// 	time: '1898',
	// 	link: '#',
	// 	abstract: 'Early research leading to the identification of uranium’s radioactive properties.',
	// },
];
