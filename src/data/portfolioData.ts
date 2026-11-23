import { WorkshopItem, ProjectItem, TeachingPillar, GalleryImage } from '../types';

export const PERSONAL_INFO = {
  name: "G. Nageswara Rao",
  role: "AI Engineer & Technology Trainer",
  specialization: "AI Engineer | Technology Trainer | GenAI & Agentic AI",
  organization: "BRAIN O VISION – EdTech",
  experienceStart: "May 2026",
  experienceDuration: "~6 Months (as of Nov 2026)",
  headline: "Turning Complex Technologies Into Practical Skills.",
  description: "Passionate about Artificial Intelligence, software development, and empowering the next generation of technology professionals through practical, hands-on learning.",
  background: "B.Tech in Computer Science and Engineering (Cyber Security)",
  keyMilestone: "10 Colleges | Independent Workshop Delivery",
  collegesCount: 10,
  linkedin: "https://www.linkedin.com/in/nageswara-rao-g-060a972b7",
  github: "https://github.com/NageswaraRao47",
  emailPlaceholder: "contact.nageswararao@example.com"
};

export const ABOUT_DETAILS = {
  heading: "Beyond Code. Into Innovation.",
  subheading: "Bridging the gap between cutting-edge AI research and student engineering skills.",
  bioParagraphs: [
    "I am an AI Engineer and Technology Trainer currently at BRAIN O VISION, dedicated to demystifying modern artificial intelligence and computer science for aspiring engineers.",
    "With a foundational degree in Computer Science & Engineering (Cyber Security), my passion centers on emerging AI architectures—specifically Generative AI, Large Language Models, and Agentic Workflows. I specialize in taking theoretical constructs and converting them into tangible, interactive demonstrations.",
    "Having independently conducted technical workshops across approximately 10 engineering colleges, my mission is to inspire students to move beyond passive theory into proactive building: coding live, constructing autonomous workflows, and solving practical engineering problems."
  ],
  pillars: [
    {
      title: "Emerging AI Focus",
      desc: "Deep engagement with Generative AI, Agentic workflows, and LLM orchestration."
    },
    {
      title: "Independent Workshop Leadership",
      desc: "Demonstrated ability to independently spearhead multi-hour technical sessions across 10 colleges."
    },
    {
      title: "Theory + Live Demos",
      desc: "Every theoretical paradigm is immediately backed by live code and architectural execution."
    },
    {
      title: "EdTech Impact",
      desc: "Driving high-engagement training through BRAIN O VISION's university outreach initiatives."
    }
  ]
};

export const JOURNEY_DETAILS = {
  heading: "My Teaching Journey",
  role: "AI Engineer & Technology Trainer",
  company: "BRAIN O VISION",
  period: "May 2026 – Present",
  duration: "~6 Months (as of November 2026)",
  milestoneBadge: "10 Colleges | Independent Workshop Delivery",
  responsibilities: [
    "Conducting AI and technology workshops at engineering colleges.",
    "Independently delivering hands-on technical sessions across academic institutions.",
    "Teaching Generative AI and Agentic AI concepts with modern tooling and architecture.",
    "Conducting structured Python programming sessions and computational problem solving.",
    "Organizing and participating in technical bootcamps and hackathons.",
    "Demonstrating practical, real-world applications of emerging technologies to undergraduate engineers."
  ]
};

export const TECHNICAL_EXPERTISE = {
  heading: "Technologies I Work With & Teach",
  subheading: "Curated technical competencies and training domains covering AI paradigms, foundational programming, backend development, and agent frameworks.",
  categories: [
    {
      id: "ai",
      title: "Artificial Intelligence",
      tagline: "GenAI, LLMs & Autonomous Workflows",
      accent: "purple",
      icon: "Sparkles",
      items: [
        { name: "Generative AI", level: "Core Teaching Area", description: "Foundational GenAI principles, diffusion & autoregressive paradigms" },
        { name: "Agentic AI", level: "Specialized Area", description: "Multi-agent systems, autonomous reasoning & goal decomposition" },
        { name: "Large Language Models (LLMs)", level: "Architecture & Integration", description: "Model capabilities, context windows, tokenization & API inference" },
        { name: "Prompt Engineering", level: "Technique & Design", description: "Chain-of-thought, few-shot conditioning, structured JSON outputs" },
        { name: "AI Agents and Workflows", level: "Implementation", description: "Stateful agents, human-in-the-loop cycles & execution loops" }
      ]
    },
    {
      id: "programming",
      title: "Programming",
      tagline: "Foundations, Logic & Problem Solving",
      accent: "blue",
      icon: "Code2",
      items: [
        { name: "Python", level: "Primary Language", description: "Idiomatic Python, clean scripts, automation & package ecosystem" },
        { name: "Java", level: "Core Object-Oriented", description: "OOP principles, modular architecture & class structures" },
        { name: "Data Structures & Algorithms", level: "Core Knowledge", description: "Algorithmic thinking, complexity analysis & problem solving" },
        { name: "Arrays, Strings, HashMaps", level: "Essential Data Structures", description: "Memory layout, collision resolution, frequency maps & lookup patterns" },
        { name: "Stacks, Queues, Linked Lists", level: "Linear Structures", description: "LIFO/FIFO behaviors, pointer traversal, recursion & buffer designs" }
      ]
    },
    {
      id: "development",
      title: "Development",
      tagline: "Backends, Architecture & Data Persistence",
      accent: "cyan",
      icon: "Layers",
      items: [
        { name: "Python Full Stack Development", level: "Architecture", description: "End-to-end integration combining responsive frontends with robust backends" },
        { name: "APIs", level: "RESTful & Services", description: "Endpoint design, request routing, authentication & payload schemas" },
        { name: "Backend Development", level: "Server Logic", description: "Controller layers, business validation, error handling & execution pipelines" },
        { name: "SQL", level: "Database Querying", description: "Relational schema design, normalization, joins & transaction queries" }
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Tools",
      tagline: "Agent Orchestration & Workflow Automation",
      accent: "purple",
      icon: "Cpu",
      items: [
        { name: "LangChain", level: "Framework", description: "Chaining prompts, document loaders, vector retrievers & tool wrappers" },
        { name: "LangGraph", level: "Stateful Graph Control", description: "Cyclic computational graphs, persistent state & multi-agent branching" },
        { name: "CrewAI", level: "Multi-Agent Collaboration", description: "Role-playing agents, task delegation, tool assignment & sequential/hierarchical flows" },
        { name: "n8n", level: "Workflow Automation", description: "Visual node-based integration connecting webhooks, APIs & AI reasoning units" }
      ]
    }
  ]
};

export const WORKSHOPS: WorkshopItem[] = [
  {
    id: "genai",
    title: "Generative AI Workshops",
    subtitle: "Understanding Modern LLM Architecture & Application",
    description: "Deep dive into foundation models, creative generation, and practical enterprise use-cases for students.",
    bullets: [
      "Introduction to Generative AI architectures and transformer principles.",
      "Understanding LLMs, tokenization, context windows, and prompt engineering.",
      "Exploring practical AI applications, creative generation, and API integrations."
    ],
    icon: "BrainCircuit",
    tag: "Core AI",
    accent: "purple"
  },
  {
    id: "agentic",
    title: "Agentic AI Workshops",
    subtitle: "From Chatbots to Autonomous Decision Engines",
    description: "Hands-on masterclasses where students build goal-directed agents capable of reasoning and using external tools.",
    bullets: [
      "Understanding AI agents, autonomy, memory, and cognitive architectures.",
      "Agent architecture and reasoning: ReAct loops, planning, and goal decomposition.",
      "Tool calling and workflow automation with real-world API bridges.",
      "Building practical agent-based applications using LangGraph and CrewAI patterns."
    ],
    icon: "Bot",
    tag: "Emerging Tech",
    accent: "cyan"
  },
  {
    id: "python",
    title: "Python Programming Workshops",
    subtitle: "Mastering Clean Code & Foundational Computation",
    description: "Interactive coding bootcamps guiding students from computational basics to building structured software.",
    bullets: [
      "Python fundamentals: syntax, data structures, and idiomatic conventions.",
      "Core programming concepts, algorithmic logic, and functions.",
      "Practical coding exercises solving real-world challenges live on screen.",
      "Hands-on projects bridging code into tangible utilities."
    ],
    icon: "FileCode",
    tag: "Programming",
    accent: "blue"
  },
  {
    id: "bootcamps",
    title: "Technical Bootcamps",
    subtitle: "Intensive Hands-on Skill Acceleration",
    description: "Multi-session experiential programs designed for immersive engineering problem solving.",
    bullets: [
      "Interactive technical learning environments with active participant Q&A.",
      "Practical demonstrations of modern developer workflows and toolchains.",
      "Guided coding sessions where every student builds along with the trainer."
    ],
    icon: "Rocket",
    tag: "Intensive",
    accent: "purple"
  },
  {
    id: "hackathons",
    title: "Hackathons",
    subtitle: "Fostering Student Innovation Under Pressure",
    description: "Facilitating ideation, rapid prototyping, and architectural guidance during college hackathon challenges.",
    bullets: [
      "Participation in technical hackathon mentorship and jury activities.",
      "Supporting innovation and hands-on problem solving from concept to prototype.",
      "Assisting student teams with AI API integrations and debugging roadblocks."
    ],
    icon: "Trophy",
    tag: "Innovation",
    accent: "cyan"
  }
];

export const COLLEGE_OUTREACH = {
  heading: "Taking Technology Beyond Classrooms.",
  subheading: "Impacting engineering campuses through live technical workshops, hands-on programming labs, and interactive demonstrations.",
  milestoneCount: "10",
  milestoneUnit: "Colleges",
  milestoneSubtext: "Independently conducted technical workshops across ~10 engineering institutions.",
  metrics: [
    { label: "Colleges Reached", value: "10", note: "Approx. 10 engineering institutions visited" },
    { label: "Delivery Format", value: "Independent", note: "Solo session leadership & live coding" },
    { label: "Core Topics", value: "GenAI & Python", note: "Autonomous agents, LLMs, and programming" },
    { label: "Student Focus", value: "Hands-on", note: "Live demonstration over pure theory" }
  ],
  gallery: [
    {
      id: "workshop-1",
      title: "Teaching in Classrooms",
      collegeCategory: "Academic Lecture Hall",
      description: "Demystifying complex neural network concepts and Generative AI fundamentals on the main stage.",
      placeholderText: "Classroom Teaching Session",
      aspect: "landscape",
      gradient: "from-purple-900/40 via-dark-850 to-dark-900",
      icon: "Presentation"
    },
    {
      id: "workshop-2",
      title: "College Workshops",
      collegeCategory: "Engineering Campus Outreach",
      description: "Leading an immersive full-day workshop covering modern Agentic AI workflows with enthusiastic students.",
      placeholderText: "College Campus Workshop",
      aspect: "portrait",
      gradient: "from-blue-900/40 via-dark-850 to-dark-900",
      icon: "School"
    },
    {
      id: "workshop-3",
      title: "Live Coding Sessions",
      collegeCategory: "Interactive Laboratory",
      description: "Demonstrating tool-calling mechanisms and Python data structures live in front of the audience.",
      placeholderText: "Live Coding on Screen",
      aspect: "landscape",
      gradient: "from-cyan-900/40 via-dark-850 to-dark-900",
      icon: "Terminal"
    },
    {
      id: "workshop-4",
      title: "Student Interactions",
      collegeCategory: "Mentorship & Discussions",
      description: "Engaging in 1-on-1 Q&A sessions, resolving debugging hurdles, and guiding student project ideas.",
      placeholderText: "Student Interactive Q&A",
      aspect: "portrait",
      gradient: "from-purple-900/40 via-dark-850 to-dark-900",
      icon: "Users"
    },
    {
      id: "workshop-5",
      title: "Technical Events & Hackathons",
      collegeCategory: "Innovation Arena",
      description: "Supporting hackathon participants in prototyping GenAI pipelines and evaluating rapid implementations.",
      placeholderText: "Hackathon & Tech Event",
      aspect: "landscape",
      gradient: "from-blue-900/40 via-dark-850 to-dark-900",
      icon: "Trophy"
    }
  ] as GalleryImage[]
};

export const TEACHING_PHILOSOPHY: TeachingPillar[] = [
  {
    number: "01",
    title: "Learn by Doing",
    description: "Practical, hands-on learning rather than just theoretical explanations. Students retain concepts when their fingers are on the keyboard.",
    icon: "Laptop",
    example: "Instead of slides on tokenization, we inspect tokenizer outputs dynamically and measure prompt latency."
  },
  {
    number: "02",
    title: "Real-World Demonstrations",
    description: "Connecting technical concepts with actual applications. Showing how modern AI translates directly to industry software solutions.",
    icon: "Radio",
    example: "Demonstrating an active multi-agent workflow fetching real web data and orchestrating automated emails live."
  },
  {
    number: "03",
    title: "Simplifying Complexity",
    description: "Explaining complex AI and programming concepts through intuitive, simple analogies and progressive disclosure.",
    icon: "Lightbulb",
    example: "Explaining Agentic Tool Calling using the analogy of a chef asking specialized kitchen assistants for ingredients."
  },
  {
    number: "04",
    title: "Interactive Learning",
    description: "Live coding, discussions, demonstrations, and active student participation that transform spectators into creators.",
    icon: "MessageSquareCode",
    example: "Inviting audience prompts and edge cases into live code to demonstrate real-time debugging and resilience."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "multi-agent-assistant",
    title: "Multi-Agent AI Assistant",
    category: "Autonomous Systems & Agentic AI",
    description: "An AI orchestration project involving specialized autonomous agents cooperating to execute complex multi-step workflows with real-world task automation.",
    architectureHighlights: [
      "Mail Agent: Formulates and drafts contextual communications with semantic parsing.",
      "Calendar Agent: Schedules appointments, analyzes availability, and manages conflict resolution.",
      "Web Search Agent: Gathers real-time web intelligence and synthesizes findings for user decision-making.",
      "Master Orchestrator: Decomposes natural language queries and coordinates agent handoffs."
    ],
    techStack: ["Agentic AI", "Python", "Tool Calling", "Multi-Agent Workflows", "LLM APIs"],
    hasInteractiveDemo: true
  },
  {
    id: "email-spam-detection",
    title: "Email Spam Detection",
    category: "Machine Learning & Natural Language Processing",
    description: "A Machine Learning project that classifies incoming emails as spam or legitimate using robust text-based feature extraction and classification techniques.",
    architectureHighlights: [
      "Text pre-processing pipeline including tokenization, stop-word removal, and lemmatization.",
      "Feature vectorization leveraging TF-IDF and bag-of-words representations.",
      "Statistical classification model evaluated across precision, recall, and F1-score.",
      "Designed for low-latency batch and real-time message validation."
    ],
    techStack: ["Machine Learning", "Python", "NLP", "Scikit-Learn", "Text Classification"]
  },
  {
    id: "telegram-chatbot",
    title: "Real-Time Telegram Chatbot",
    category: "Full Stack & Academic Final Year Project",
    description: "An automated real-time Telegram chatbot developed as part of final-year academic work, delivering interactive responses and service triggers through Telegram Bot API.",
    architectureHighlights: [
      "Asynchronous webhook and polling architecture for rapid messaging throughput.",
      "Contextual command routing for dynamic user interactions.",
      "Integrated backend endpoints for automated alerts and query dispatching.",
      "Built and presented as a capstone academic project in Computer Science & Cyber Security."
    ],
    techStack: ["Python", "Telegram Bot API", "Asynchronous Backend", "APIs", "Cyber Security"]
  }
];

