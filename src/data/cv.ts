import type { Experience, Education, Publication } from '@/types/cv';

// Shared by the home, papers, and CV pages.
export const experiences: Experience[] = [
  {
    "title": "Applied Scientist Intern",
    "company": "Amazon",
    "time": "Jun 2026 – Aug 2026",
    "location": "Bellevue, WA",
    "logo": "/logos/amazon.png",
    "category": "Industry",
    "description": "Worked on geospatial vision-language reasoning with Dr. Mohamed Moustafa and Dr. Hesham Eraqi. Developed GVLM-R to support multiple geospatial tasks within a single reasoning model."
  },
  {
    "title": "Applied Scientist Intern",
    "company": "Amazon",
    "time": "Jun 2023 – Aug 2023",
    "location": "Boston, MA",
    "logo": "/logos/amazon.png",
    "category": "Industry",
    "description": "Worked with Dr. Ali Jahanian and Dr. Achin Jain on compositionality in text-to-image generation. Designed an inference-only method to improve prompt faithfulness without training."
  },
  {
    "title": "Machine Learning & NLP Intern",
    "company": "Deloitte & Touche LLP",
    "time": "May 2021 – Aug 2021",
    "location": "New York, NY · Remote",
    "logo": "/logos/deloitte.png",
    "category": "Industry",
    "description": "Worked with Dr. Sanjeev Srivastava on extracting audit evidence from invoices. Developed a pipeline for automatic information extraction from documents."
  },
  {
    "title": "Graduate Research Assistant",
    "company": "PLAN Lab · University of Illinois Urbana-Champaign",
    "time": "Aug 2024 – Present",
    "location": "Champaign, IL",
    "logo": "/logos/illinois.png",
    "category": "Research",
    "description": "Advised by Dr. Ismini Lourentzou. Research on multimodal foundation models, semantic grounding, multimodal reasoning, and controllable generation."
  },
  {
    "title": "Graduate Research Assistant",
    "company": "PLAN Lab · Virginia Tech",
    "time": "Aug 2021 – Aug 2024",
    "location": "Blacksburg, VA",
    "logo": "/logos/vt.png",
    "category": "Research",
    "description": "Advised by Dr. Ismini Lourentzou. Worked on talking-head generation, scene graph generation, and compositionality in text-to-image generation."
  },
  {
    "title": "Research Assistant",
    "company": "Digital Libraries Research Laboratories · Virginia Tech",
    "time": "Jan 2020 – Dec 2021",
    "location": "Blacksburg, VA",
    "logo": "/logos/vt.png",
    "category": "Research",
    "description": "Advised by Dr. Edward Fox. Worked on a model for extracting definitions from electronic theses and dissertations."
  },
  {
    "title": "Research Assistant",
    "company": "NLP Lab · Virginia Tech",
    "time": "Sep 2020 – May 2021",
    "location": "Blacksburg, VA",
    "logo": "/logos/vt.png",
    "category": "Research",
    "description": "Advised by Dr. Lifu Huang. Worked on a model for event and entity coreference resolution."
  },
  {
    "title": "Research Assistant",
    "company": "Zhang Lab · Virginia Tech",
    "time": "Oct 2019 – Jan 2020",
    "location": "Blacksburg, VA",
    "logo": "/logos/vt.png",
    "category": "Research",
    "description": "Advised by Dr. Liqing Zhang. Developed a visualization module for antibiotic resistance genes, pathogens, and mobile genetic elements for MetaCompare Web."
  }
];

export const education: Education[] = [
  {
    "school": "University of Illinois Urbana-Champaign",
    "degree": "Ph.D. in Computer Science",
    "time": "2024 – Present",
    "location": "Urbana, IL",
    "logo": "/logos/illinois.png",
    "description": "GPA: 4.0/4.0 · Expected graduation: December 2027"
  },
  {
    "school": "Virginia Tech",
    "degree": "M.S. in Computer Science",
    "time": "May 2023",
    "location": "Blacksburg, VA",
    "logo": "/logos/vt.png",
    "description": "GPA: 3.85/4.0"
  },
  {
    "school": "VESIT · University of Mumbai",
    "degree": "B.E. in Information Technology",
    "time": "May 2019",
    "location": "Mumbai, India",
    "logo": "/logos/vesit.png",
    "description": "GPA: 8.31/10"
  }
];

export const publications: Publication[] = [
  {
    "title": "One Editor, Many Edits: A Unified Training-Free Framework for Diverse Video Editing",
    "authors": "Adheesh Juvekar, Onkar Susladkar, Kiet A. Nguyen, Muntasir Wahed, Nabeel Bashir, Xiaona Zhou, Tianjiao Yu, Vedant Shah, Ismini Lourentzou",
    "journal": "arXiv preprint",
    "time": "2026",
    "abstract": "Video editing spans diverse editing paradigms, yet achieving high-quality instruction-guided and subject-guided editing within a single unified framework remains challenging. We introduce EditVid, a training-free framework combining sparse causal memory for local coherence, correspondence-based post-attention token injection for long-range identity preservation, and soft latent blending for edit locality. The same framework supports instruction-guided and reference-guided edits, including style transfer, attribute modification, object insertion, part-level editing, and subject replacement. On FiVE, EditVid achieves 78.16 FiVE-Acc, compared with 58.95 for the strongest evaluated training-free baseline, while obtaining competitive results on IVEBench. A user study further shows a 51.8% overall preference for EditVid over 7 competing methods.",
    "image": "/papers/editvid.webp",
    "link": "https://plan-lab.github.io/projects/editvid/",
    "paperLink": "https://arxiv.org/pdf/2609.04190",
    "codeLink": "https://github.com/PLAN-Lab/EditVid",
    "abstractSource": "https://arxiv.org/abs/2609.04190v1"
  },
  {
    "title": "SILSA: Sliding-Window Slice Latents for Topology-Preserving High-Resolution 3D Generation",
    "authors": "Tianjiao Yu, Xinzhuo Li, Yifan Shen, Ying Shen, Kiet A. Nguyen, Adheesh Juvekar, Ismini Lourentzou",
    "journal": "NeurIPS 2026 · Accepted",
    "time": "2026",
    "link": "https://plan-lab.github.io/projects/silsa/",
    "paperLink": "https://arxiv.org/abs/2610.02201",
    "image": "/papers/silsa.webp",
    "abstract": "High-resolution 3D generation increasingly relies on voxel latents and multi-stage pipelines that first predict active structure and then synthesize local geometry. While effective, this design fragments continuous surfaces into many local tokens, inflates generation cost, and often weakens topological consistency for thin or highly connected shapes. We introduce SILSA, a topology-aware 3D generation framework that represents shapes with compact sliding-window slice latents. Instead of generating expensive voxel tokens, SILSA uses a fixed set of overlapping slices along the three canonical axes, where each token summarizes a local depth window to preserve cross-sectional continuity and support single-stage rectified-flow generation. A Slice VAE encodes oriented surface samples into multi-axis slice latents and reconstructs them with a sparse volumetric decoder, while a Volumetric Anchor Lattice coordinates directional slice streams through a shared 3D workspace. To preserve structural correctness, we introduce slice-level topology supervision that matches persistence diagrams and aligns Betti transitions across neighboring slices. Experiments show that SILSA improves structural fidelity while substantially reducing generation cost. SILSA improves PSNR by 8.7%, coverage by 5.96 absolute points, and Betti error by 9.2% over the strongest baseline, while using 70.0% fewer tokens than the next-most compact baseline and over 98% fewer tokens than sparse or hierarchical tokenizers, effectively reducing training memory by 40.4% and inference time by 58.5%. Qualitative results further show improved preservation of thin structures, repeated components, and long-range connectivity.",
    "abstractSource": "https://arxiv.org/abs/2610.02201v1"
  },
  {
    "title": "GraphVid: Interactive Graph-Controllable Video Generation",
    "authors": "Vedant Shah, Onkar Susladkar, Tushar Prakash, Kiet A. Nguyen, Tianjiao Yu, Adheesh Juvekar, Muntasir Wahed, Ismini Lourentzou",
    "journal": "ECCV 2026",
    "time": "2026",
    "abstract": "Controllable video generation remains challenging due to the difficulty of specifying precise multi-object interactions using text prompts or motion-control inputs that primarily constrain pixel movement. In practice, trajectory-based control often requires users to draw accurate tracks for multiple objects, which scales poorly with scene complexity and becomes ambiguous under occlusion or overlap. To enable flexible yet precise multi-subject control, we introduce GraphVid, a graph-conditioned image-to-video generation model that enables interactive control through structured interaction graphs. We further curate GraphVid-Bench, a large-scale interaction-centric video dataset with structured relational annotations to enable training of interaction-aware video generation models. Despite using substantially less training data and fewer trainable parameters than prior motion-control methods, GraphVid delivers strong controllability and video quality. Compared with Motion-I2V, GraphVid reduces FID by up to 39.9% and FVD by 37.6%, while improving PSNR (9.87→15.98) and SSIM (0.38→0.61). Our results highlight the potential of structured semantic interfaces as a powerful paradigm for controllable video generation.",
    "image": "/papers/graphvid.webp",
    "link": "https://plan-lab.github.io/projects/graphvid/",
    "paperLink": "https://arxiv.org/abs/2607.21580",
    "abstractSource": "https://arxiv.org/abs/2607.21580v2"
  },
  {
    "title": "From Tokens to Trajectories: Parameter-Efficient Continuous Adaptation of Unified Multimodal Models with FlowShift",
    "authors": "Gayatri Deshmukh, Onkar Susladkar, Adheesh Juvekar, Halil Kilicoglu, Ismini Lourentzou",
    "journal": "WACV 2027 · Accepted",
    "time": "2027"
  },
  {
    "title": "Best of Both Worlds: Multimodal Reasoning and Generation via Unified Discrete Flow Matching",
    "authors": "Onkar Susladkar, Tushar Prakash, Gayatri Deshmukh, Kiet A. Nguyen, Jiaxun Zhang, Adheesh Juvekar, Tianshu Bao, Lin Chai, Sparsh Mittal, Inderjit S Dhillon, Ismini Lourentzou",
    "journal": "ICML 2026",
    "time": "2026",
    "link": "https://plan-lab.github.io/projects/unidflow/",
    "abstract": "We propose UniDFlow, a unified discrete flow-matching framework for multimodal understanding, generation, and editing. It decouples understanding and generation via task-specific low-rank adapters, avoiding objective interference and representation entanglement, while a novel reference-based multimodal preference alignment optimizes relative outcomes under identical conditioning, improving faithfulness and controllability without large-scale retraining. UniDFlow achieves SOTA performance across eight benchmarks and exhibits strong zero-shot generalization to tasks including inpainting, in-context image generation, reference-based editing, and compositional generation, despite no explicit task-specific training.",
    "image": "/papers/unidflow.webp",
    "paperLink": "https://arxiv.org/pdf/2602.12221",
    "abstractSource": "https://proceedings.mlr.press/v306/susladkar26a.html"
  },
  {
    "title": "PyraTok: Language-Aligned Pyramidal Tokenizer for Video Understanding and Generation",
    "authors": "Onkar Susladkar, Tushar Prakash, Adheesh Juvekar, Kiet A. Nguyen, Dong-Hwan Jang, Inderjit S Dhillon, Ismini Lourentzou",
    "journal": "CVPR 2026",
    "time": "2026",
    "link": "https://plan-lab.github.io/projects/pyratok/",
    "abstract": "Discrete video VAEs underpin modern text-to-video generation and video understanding systems, yet existing tokenizers typically learn visual codebooks at a single scale with limited vocabularies and shallow language supervision, leading to poor cross-modal alignment and zero-shot transfer. We introduce PyraTok, a language-aligned pyramidal tokenizer that learns semantically structured discrete latents across multiple spatial-temporal resolutions. PyraTok builds on a pretrained video VAE and a novel Language aligned Pyramidal Quantization (LaPQ) module that discretizes encoder features at several depths using a shared large binary codebook, yielding compact yet expressive video token sequences. To tightly couple visual tokens with language, PyraTok jointly optimizes multi-scale text-guided quantization and a global autoregressive objective over the token hierarchy. Across ten benchmarks, PyraTok delivers state-of-the-art (SOTA) video reconstruction, consistently improves text-to-video quality, and sets new SOTA zero-shot performance on video instance segmentation, temporal action localization, and video understanding, scaling robustly to up to 4K/8K resolutions.",
    "image": "/papers/pyratok.webp",
    "paperLink": "https://arxiv.org/pdf/2601.16210",
    "codeLink": "https://github.com/PLAN-Lab/PyraTok",
    "abstractSource": "https://openaccess.thecvf.com/content/CVPR2026/html/Susladkar_PyraTok_Language-Aligned_Pyramidal_Tokenizer_for_Video_Understanding_and_Generation_CVPR_2026_paper.html"
  },
  {
    "title": "Counterfactual Segmentation Reasoning: Diagnosing and Mitigating Pixel-Grounding Hallucination",
    "authors": "Xinzhuo Li*, Adheesh Juvekar*, Jiaxun Zhang, Xingyou Liu, Muntasir Wahed, Kiet A. Nguyen, Yifan Shen, Tianjiao Yu, Ismini Lourentzou",
    "journal": "CVPRF 2026",
    "time": "2026",
    "link": "https://plan-lab.github.io/projects/hallusegbench/",
    "abstract": "Segmentation Vision-Language Models (VLMs) have significantly advanced grounded visual understanding, yet they remain prone to pixel-grounding hallucinations, producing masks for incorrect objects or for objects that are entirely absent. Existing evaluations rely almost entirely on text- or label-based perturbations, which check only whether the predicted mask matches the queried label. Such evaluations overlook the spatial footprint and severity of hallucination and therefore fail to reveal vision-driven hallucinations, which are more challenging and more prevalent. To address this gap, we formalize the task of Counterfactual Segmentation Reasoning (CSR), where a model must segment the referenced object in the factual image and abstain in its counterfactual counterpart. To support this task, we curate HalluSegBench, the first large-scale benchmark to diagnose referring and reasoning expression segmentation hallucinations using controlled visual counterfactuals, alongside new evaluation metrics that measure hallucination severity and disentangle vision- and language-driven failure modes. We further introduce RobustSeg, a segmentation VLM trained with counterfactual fine-tuning (CFT) to learn when to segment and when to abstain. Experimental results confirm RobustSeg reduces hallucinations by 30%, while improving segmentation performance on FP-RefCOCO(+/g).",
    "image": "/papers/hallusegbench.webp",
    "paperLink": "https://arxiv.org/pdf/2506.21546.pdf",
    "notes": "* Equal contribution",
    "abstractSource": "https://openaccess.thecvf.com/content/CVPR2026F/html/Li_Counterfactual_Segmentation_Reasoning_Diagnosing_and_Mitigating_Pixel-Grounding_Hallucination_CVPRF_2026_paper.html"
  },
  {
    "title": "RewardFlow: Generate Images by Optimizing What You Reward",
    "authors": "Onkar Susladkar, Dong-Hwan Jang, Tushar Prakash, Adheesh Juvekar, Vedant Shah, Ayush Barik, Nabeel Bashir, Muntasir Wahed, Ritish Shrirao, Ismini Lourentzou",
    "journal": "CVPR 2026",
    "time": "2026",
    "abstract": "RewardFlow is a zero-shot, training-free framework for text-guided image editing and generation based on reward-guided Langevin dynamics. We steer pretrained diffusion and flow-matching models at inference time using a diverse set of differentiable rewards, and control their influence with a prompt-aware adaptive policy that parses the text instruction, infers edit intent, and dynamically adjusts update steps. Our design includes a differentiable VQA-based reward for fine-grained semantic supervision and a SAM-guided reward for precise, localized edits with minimal leakage. Across standard image editing and compositional generation benchmarks, RewardFlow achieves state-of-the-art zero-shot edit fidelity and compositional alignment.",
    "link": "https://plan-lab.github.io/projects/rewardflow/",
    "image": "/papers/rewardflow.webp",
    "paperLink": "https://arxiv.org/pdf/2604.08536",
    "abstractSource": "https://openaccess.thecvf.com/content/CVPR2026/html/Susladkar_RewardFlow_Generate_Images_by_Optimizing_What_You_Reward_CVPR_2026_paper.html"
  },
  {
    "title": "CALICO: Part-Focused Semantic Co-Segmentation with Large Vision-Language Models",
    "authors": "Kiet A. Nguyen, Adheesh Juvekar, Tianjiao Yu, Muntasir Wahed, Ismini Lourentzou",
    "journal": "CVPR 2025",
    "time": "2025",
    "link": "https://plan-lab.github.io/projects/calico/",
    "abstract": "Recent advances in Large Vision-Language Models (LVLMs) have enabled general-purpose vision tasks through visual instruction tuning. While existing LVLMs can generate segmentation masks from text prompts for single images, they struggle with segmentation-grounded reasoning across images, especially at finer granularities such as object parts. In this paper, we introduce the new task of part-focused semantic co-segmentation, which involves identifying and segmenting common objects and their constituent common and unique parts across images. To address this task, we present CALICO, the first LVLM designed for multi-image part-level reasoning segmentation. CALICO features two key components, a novel Correspondence Extraction Module that identifies semantic part-level correspondences, and Correspondence Adaptation Modules that embed this information into the LVLM to facilitate multi-image understanding in a parameter-efficient manner. To support training and evaluation, we curate MixedParts, a large-scale multi-image segmentation dataset containing 2.4M samples across 44K images spanning diverse object and part categories. Experimental results demonstrate that CALICO, with just 0.3% of its parameters finetuned, achieves strong performance on this challenging task.",
    "image": "/papers/calico.webp",
    "paperLink": "https://openaccess.thecvf.com/content/CVPR2025/papers/Nguyen_CALICO_Part-Focused_Semantic_Co-Segmentation_with_Large_Vision-Language_Models_CVPR_2025_paper.pdf",
    "abstractSource": "https://openaccess.thecvf.com/content/CVPR2025/html/Nguyen_CALICO_Part-Focused_Semantic_Co-Segmentation_with_Large_Vision-Language_Models_CVPR_2025_paper.html"
  },
  {
    "title": "Uncertainty in Action: Confidence Elicitation in Embodied Agents",
    "authors": "Tianjiao Yu, Vedant Shah, Muntasir Wahed, Kiet A. Nguyen, Adheesh Juvekar, Tal August, Ismini Lourentzou",
    "journal": "arXiv preprint",
    "time": "2025",
    "link": "https://plan-lab.github.io/projects/ece/",
    "abstract": "Expressing confidence is challenging for embodied agents navigating dynamic multimodal environments, where uncertainty arises from both perception and decision-making processes. We present the first work investigating embodied confidence elicitation in open-ended multimodal environments. We introduce Elicitation Policies, which structure confidence assessment across inductive, deductive, and abductive reasoning, along with Execution Policies, which enhance confidence calibration through scenario reinterpretation, action sampling, and hypothetical reasoning. Evaluating agents in calibration and failure prediction tasks within the Minecraft environment, we show that structured reasoning approaches, such as Chain-of-Thoughts, improve confidence calibration. However, our findings also reveal persistent challenges in distinguishing uncertainty, particularly under abductive settings, underscoring the need for more sophisticated embodied confidence elicitation methods.",
    "image": "/papers/ece.webp",
    "paperLink": "https://arxiv.org/pdf/2503.10628",
    "abstractSource": "https://arxiv.org/abs/2503.10628v1"
  },
  {
    "title": "PRIMA: Multi-Image Vision-Language Models for Reasoning Segmentation",
    "authors": "Muntasir Wahed*, Kiet A. Nguyen*, Adheesh Juvekar, Xinzhuo Li, Xiaona Zhou, Vedant Shah, Tianjiao Yu, Pinar Yanardag, Ismini Lourentzou",
    "journal": "WACV 2027 · Accepted",
    "time": "2027",
    "link": "https://plan-lab.github.io/projects/prima/",
    "abstract": "Despite significant advancements in Large Vision-Language Models (LVLMs)' capabilities, existing pixel-grounding models operate in single-image settings, limiting their ability to perform detailed, fine-grained comparisons across multiple images. Conversely, current multi-image understanding models lack pixel-level grounding. Our work addresses this gap by introducing the task of multi-image pixel-grounded reasoning alongside PRIMA, an LVLM that integrates pixel-level grounding with robust multi-image reasoning to produce contextually rich, pixel-grounded explanations. Central to PRIMA is SQuARE, a vision module that injects cross-image relational context into compact query-based visual tokens before fusing them with the language backbone. To support training and evaluation, we curate M4SEG, a new multi-image reasoning segmentation benchmark consisting of ~744K question-answer pairs that require fine-grained visual understanding across multiple images. PRIMA outperforms state-of-the-art baselines with 7.83% and 11.25% improvements in Recall and S-IoU, respectively. Ablation studies further demonstrate the effectiveness of the proposed SQuARE module in capturing cross-image relationships.",
    "image": "/papers/prima.webp",
    "paperLink": "https://arxiv.org/pdf/2412.15209",
    "notes": "* Equal contribution",
    "abstractSource": "https://arxiv.org/abs/2412.15209v2"
  },
  {
    "title": "MetaCompare 2.0: Differential ranking of ecological and human health resistome risks",
    "authors": "Monjura Afrin Rumi, Min Oh, Benjamin C Davis, Connor L Brown, Adheesh Juvekar, Peter J Vikesland, Amy Pruden, Liqing Zhang",
    "journal": "FEMS Microbiology Ecology",
    "time": "2024",
    "link": "https://academic.oup.com/femsec/article/100/12/fiae155/7888989",
    "abstract": "While numerous environmental factors contribute to the spread of antibiotic resistance genes (ARGs), quantifying their relative contributions remains a fundamental challenge. Similarly, it is important to differentiate acute human health risks from environmental exposure, versus broader ecological risk of ARG evolution and spread across microbial taxa. Recent studies have proposed various methods for achieving such aims. Here, we introduce MetaCompare 2.0, which improves upon original MetaCompare pipeline by differentiating indicators of human health resistome risk (potential for human pathogens of acute resistance concern to acquire ARGs) from ecological resistome risk (overall mobility of ARGs and potential for pathogen acquisition). The updated pipeline's sensitivity was demonstrated by analyzing diverse publicly-available metagenomes from wastewater, surface water, soil, sediment, human gut, and synthetic microbial communities. MetaCompare 2.0 provided distinct rankings of the metagenomes according to both human health resistome risk and ecological resistome risk, with both scores trending higher when influenced by anthropogenic impact or other stress. We evaluated the robustness of the pipeline to sequence assembly methods, sequencing depth, contig count, and metagenomic library coverage bias. The risk scores were remarkably consistent despite variations in these technological aspects. We packaged the improved pipeline into a publicly-available web service ( http://metacompare.cs.vt.edu/ ) that provides an easy-to-use interface for computing resistome risk scores and visualizing results.",
    "image": "/papers/metacompare.jpg",
    "abstractSource": "https://academic.oup.com/femsec/article/100/12/fiae155/7888989"
  }
];
