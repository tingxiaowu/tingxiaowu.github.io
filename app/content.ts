export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  status: string;
  venue: string;
  year: string;
  authors: string;
  summary: string;
  abstract: string;
  topics: string[];
  contributions: string[];
  imageLabels: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "super-resolution-e-skin",
    title: "Super-Resolution Tactile Sensing through Geometric Encoding in Liquid-Metal Microchannels",
    shortTitle: "Soft Super-Resolution E-Skin",
    status: "Manuscript under review",
    venue: "npj Flexible Electronics",
    year: "2026",
    authors: "Shaoyu Cai†, Jun Feng†, Tingxiao Wu†, Haotian Zheng, Xiang Cheng, Kai Zhu, Benjamin C. K. Tee",
    summary: "A four-channel soft tactile skin that uses microchannel geometry and data-driven decoding to resolve touch position and normal force.",
    abstract: "This work investigates how geometric encoding in liquid-metal microchannels can increase the information carried by a small number of sensing channels. The system combines a large-area soft sensor, position-dependent resistance responses, and data-driven decoding to estimate touch location and normal force. The public page intentionally presents only a high-level account while the manuscript remains under review.",
    topics: ["Soft sensing", "Liquid metal", "Machine learning", "Tactile interfaces"],
    contributions: [
      "Geometric encoding of spatial touch information in four liquid-metal channels.",
      "A soft sensing architecture for simultaneous position and force estimation.",
      "Experimental characterization and interactive demonstrations across a large sensing area.",
    ],
    imageLabels: ["Sensor prototype", "System overview", "Evaluation setup"],
  },
  {
    slug: "dualshade",
    title: "DualShade: A Fail-Safe Dual-Layer Adaptive Eyewear for Real-Time Glare and Luminance Control",
    shortTitle: "DualShade",
    status: "Under evaluation",
    venue: "ACM SIGGRAPH Asia 2026 Emerging Technologies",
    year: "2026",
    authors: "Tingxiao Wu, Yuxuan Tao, Shaoyu Cai",
    summary: "Adaptive eyewear combining global tint control with localized transparent-display masking to reduce glare while preserving road cues.",
    abstract: "DualShade explores a two-layer strategy for driving-related glare management. A global adaptive tint responds to ambient luminance, while a segmented transparent display selectively attenuates localized glare. The interaction is designed around readability, fail-safe behavior, and preservation of critical road information rather than maximum occlusion.",
    topics: ["Wearable interfaces", "Adaptive optics", "Driving safety", "Embedded systems"],
    contributions: [
      "A dual-layer architecture separating global luminance adaptation from local glare control.",
      "A readability-first interaction strategy for preserving safety-critical visual cues.",
      "Functional eyewear prototypes and controlled technical and user evaluations.",
    ],
    imageLabels: ["Eyewear prototype", "Dual-layer architecture", "Evaluation scenario"],
  },
  {
    slug: "pneustep",
    title: "PneuStep: A Soft Pneumatic-Based Foot Haptic Device for Walking Experience on Different Terrains in VR",
    shortTitle: "PneuStep",
    status: "Under evaluation",
    venue: "ACM SIGGRAPH Asia 2026 Emerging Technologies",
    year: "2026",
    authors: "Haoran Kang, Ziyi Li, Tingxiao Wu, Yuxuan Tao, Qian Gan, Tian Lin, Kyungtae Moon, Shaoyu Cai",
    summary: "A soft pneumatic foot-haptic device that renders terrain-related sensations during walking experiences in virtual reality.",
    abstract: "PneuStep examines how compact pneumatic structures beneath the foot can enrich virtual walking experiences. The prototype coordinates soft actuation with immersive scenes to communicate differences between terrain conditions while retaining wearability and physical safety.",
    topics: ["Haptics", "Virtual reality", "Soft robotics", "Embodied interaction"],
    contributions: [
      "A wearable soft-pneumatic architecture for underfoot feedback.",
      "Terrain-oriented haptic patterns coordinated with virtual walking scenes.",
      "A working demonstration designed for repeatable public interaction.",
    ],
    imageLabels: ["Foot-haptic prototype", "Pneumatic module", "VR demonstration"],
  },
  {
    slug: "breatho",
    title: "Breatho: Real-Time Respiratory Guidance System for Amateur Runners",
    shortTitle: "Breatho",
    status: "Under evaluation",
    venue: "ACM SIGGRAPH Asia 2026 Emerging Technologies",
    year: "2026",
    authors: "Yuxuan Tao, Tingxiao Wu, Shaoyu Cai",
    summary: "A real-time embodied guidance system that supports amateur runners in perceiving and regulating their breathing patterns.",
    abstract: "Breatho explores respiratory guidance as an embodied interaction problem. The system senses and communicates breathing information during running, aiming to provide timely, understandable feedback without demanding sustained visual attention from the user.",
    topics: ["Biofeedback", "Wearable interaction", "Sports HCI", "Real-time guidance"],
    contributions: [
      "A wearable concept for respiratory guidance during physical activity.",
      "Real-time feedback designed for low-attention use while running.",
      "An integrated prototype connecting sensing, guidance, and embodied experience.",
    ],
    imageLabels: ["Wearable system", "Guidance interface", "Running scenario"],
  },
  {
    slug: "refthermovr",
    title: "RefThermoVR: Inducing Facial Thermal Referral through Vibratory-Thermal Cues in Virtual Reality",
    shortTitle: "RefThermoVR",
    status: "Under evaluation",
    venue: "ACM SIGGRAPH Asia 2026 Emerging Technologies",
    year: "2026",
    authors: "Shaoyu Cai, Yuxuan Tao, Tingxiao Wu, Bowen Wang, Ming Jing",
    summary: "A VR interaction technique investigating how combined vibration and thermal cues can induce referred facial thermal sensations.",
    abstract: "RefThermoVR studies multisensory referral as a way to create facial thermal experiences without placing thermal hardware at every perceived location. The prototype combines spatially arranged vibratory and thermal cues with virtual content to investigate how users interpret referred sensation in immersive environments.",
    topics: ["Thermal haptics", "Virtual reality", "Multisensory interaction", "Perception"],
    contributions: [
      "A compact cueing approach for referred facial thermal sensation.",
      "Coordination of vibratory, thermal, and visual stimuli in VR.",
      "A demonstration platform for studying multisensory spatial perception.",
    ],
    imageLabels: ["VR apparatus", "Cue configuration", "User demonstration"],
  },
  {
    slug: "architone",
    title: "ArchiTone: A LEGO-Inspired Gamified System for Visualized Music Education",
    shortTitle: "ArchiTone",
    status: "Preprint",
    venue: "arXiv:2410.15273",
    year: "2024",
    authors: "Jiawen Yu, Tianyu Zhang, Shichang Wu, Xiang Wu, Tingxiao Wu, Yutong Chen, Kang Zhang",
    summary: "A tangible and gamified learning system that uses construction-inspired interaction to make musical structure visible and approachable.",
    abstract: "ArchiTone is a visualized music education system inspired by LEGO-like construction and game-based learning. It translates musical concepts into manipulable visual structures, supporting learners as they explore relationships between components and develop an intuitive understanding of music.",
    topics: ["Tangible interaction", "Music education", "Gamification", "Learning technology"],
    contributions: [
      "A construction-inspired interaction metaphor for visualizing musical structure.",
      "Integration of tangible exploration and game-based learning activities.",
      "A working educational prototype evaluated through learner interaction.",
    ],
    imageLabels: ["Learning interface", "Tangible components", "User study"],
    link: "https://doi.org/10.48550/arXiv.2410.15273",
  },
];

export const publications = [
  projects[0],
  {
    ...projects[1],
    title: "Four Emerging Technologies submissions: DualShade, Breatho, PneuStep, and RefThermoVR",
    shortTitle: "SIGGRAPH Asia 2026 Emerging Technologies submissions",
    authors: "Tingxiao Wu with collaborators at the NUS Immersive Reality Lab",
  },
  projects[5],
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export const courseProjects = [
  {
    title: "[Project Title] — 8th “筱祥杯” Landscape Architecture Design Competition",
    context: "Undergraduate Category · Team Lead · Third Prize",
    year: "2023",
    summary: "Led the team through field investigation, background research, concept sketches, iterative design development, and final submission. The project received Third Prize in the undergraduate category of the 8th “筱祥杯” Zhejiang Provincial Landscape Architecture Student Design Competition. [Site, design theme, team members, and project images to be added.]",
    topics: ["Landscape architecture", "Research through design", "Team leadership"],
  },
  {
    title: "Individual PM2.5 Exposure and Equity Analysis",
    context: "Zhejiang University Student Research Training Program · Project Lead",
    year: "2023–2024",
    summary: "Analysed large-scale mobile signalling data with Python and SPSS to compare pollution exposure across population groups and communicate inequalities through data visualization.",
    topics: ["Data analysis", "Visualization", "Environmental equity"],
  },
];
