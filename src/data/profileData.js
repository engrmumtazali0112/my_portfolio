// src/data/profileData.js
// Single source of truth for portfolio content — sourced from the
// Full Stack AI/ML Developer master profile. Update here, not in components.

const profileData = {
  name: "Mumtaz Ali",
  title: "Full Stack AI/ML Developer",
  location: "Lahore, Pakistan",
  status: "available for work",
  email: "engrmumtazali01@gmail.com",
  phone: "+92 337 0690080",
  linkedin: "https://linkedin.com/in/mumtazali12",
  github: "https://github.com/engrmumtazali0112",

  terminalLines: [
    { cmd: "whoami", out: "Mumtaz Ali — Full Stack AI/ML Developer" },
    { cmd: "status", out: "available · Lahore, PK · remote-friendly" },
    { cmd: "uptime --prod", out: "99.9% · 500+ req/day in production" },
  ],

  heroTagline:
    "I build scalable web apps, production-grade APIs, and AI-powered systems — for local and international clients.",

  stats: [
    { value: "2+", label: "years experience" },
    { value: "20+", label: "projects shipped" },
    { value: "99.9%", label: "prod uptime" },
    { value: "4", label: "companies served" },
  ],

  about:
    "Results-driven Full Stack AI/ML Developer with 2+ years of hands-on experience delivering " +
    "high-performance web applications, production-grade RESTful APIs, and AI-powered systems for " +
    "local and international clients. Proficient in Python (Django, Flask, FastAPI) and JavaScript " +
    "(React.js, Next.js, Node.js), with strong command of PostgreSQL, MongoDB, and MySQL. Experienced " +
    "in building RAG pipelines, LLM integrations, and computer vision systems, alongside cloud " +
    "infrastructure (AWS), Docker, and CI/CD automation. Known for taking full ownership of projects " +
    "end-to-end and delivering on tight deadlines without sacrificing code quality.",

  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL"],
    },
    {
      category: "Backend",
      items: ["Django", "Django REST Framework", "Flask", "FastAPI", "Node.js", "Express.js"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      category: "AI / ML",
      items: ["PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "Hugging Face", "RAG pipelines"],
    },
    {
      category: "Vision & NLP",
      items: ["OpenCV", "YOLO v5/v8", "EasyOCR", "spaCy", "NLTK"],
    },
    {
      category: "Data & Vector DBs",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Pinecone", "FAISS", "Chroma"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "GitHub Actions", "AWS (EC2, S3, Lambda)", "GCP"],
    },
  ],

  experience: [
    {
      id: "a3f9c1",
      date: "May 2026 — Present",
      role: "Full Stack AI/ML Developer",
      company: "Wonder Crafts",
      place: "Lahore, Pakistan",
      points: [
        "Building scalable web applications and production-ready RESTful APIs using Django, FastAPI, and React.js.",
        "Collaborating cross-functionally to ship production-ready features on tight timelines.",
      ],
    },
    {
      id: "7e21bd",
      date: "Dec 2025 — Apr 2026",
      role: "Full Stack Developer",
      company: "Virevo S.r.l.",
      place: "Italy (Remote)",
      points: [
        "Delivered international client projects using Django, FastAPI, React.js, and Next.js with AWS + Docker.",
        "Collaborated with Italian and international stakeholders across time zones.",
      ],
    },
    {
      id: "51d0af",
      date: "Aug 2025 — Dec 2025",
      role: "Full Stack Developer Intern (MERN)",
      company: "Axaura Tech",
      place: "Pakistan",
      points: [
        "Built full-stack apps with React.js, Node.js, Express.js, and MongoDB end-to-end.",
        "Followed clean code practices and Git-based collaborative workflows.",
      ],
    },
    {
      id: "0c88f4",
      date: "Dec 2024 — Mar 2025",
      role: "Full Stack Developer",
      company: "Digital Empowerment Network",
      place: "Pakistan",
      points: [
        "Built and deployed end-to-end web solutions applying industry-standard backend practices.",
        "Delivered a community platform driving a 25% task-completion uplift across 1,000+ citizens.",
      ],
    },
  ],

  achievements: [
    "Reduced fire-hazard incident response time by ~3 hours per cycle via a real-time notification system serving 2,500+ residents.",
    "Optimized API infrastructure to process 500+ daily transactions at 99.9% uptime, saving ~$2,400/year in server retry costs.",
    "Awarded Certificate of Appreciation at Virevo S.r.l. (Italy) within 5 months of joining.",
    "Awarded Certificate of Appreciation at Wonder Crafts by CTO Bilal Saeed.",
  ],

  // NOTE: verified against official transcript (Reg. No. 21MDBCS124) — CGPA is 2.51/4.0.
  education: {
    degree: "BS Computer Science",
    school: "University of Engineering & Technology, Mardan",
    detail: "CGPA 2.51 / 4.0 · 2021 – 2025",
  },
  academicTimeline: [
    {
      id: "bscs25",
      tag: "Bachelor's",
      date: "2021 — 2025",
      title: "BS Computer Science",
      school: "University of Engineering & Technology, Mardan",
      detail: "CGPA 2.51 / 4.0 · 131 credit hours completed",
    },
    {
      id: "hssc21",
      tag: "HSSC",
      date: "2019 — 2021",
      title: "Intermediate (Pre-Engineering)",
      school: "Govt. Post Graduate College, Mardan",
      detail: "632 / 1100 marks (57.5%) · BISE Mardan",
    },
    {
      id: "ssc19",
      tag: "SSC",
      date: "2017 — 2019",
      title: "Matriculation (Science)",
      school: "Govt. Higher Secondary School, Mian Khan, Mardan",
      detail: "912 / 1100 marks (82.9%) · BISE Mardan",
    },
  ],

  certifications: [
    "Wonder Crafts — Certificate of Appreciation",
    "Virevo S.r.l. — Certificate of Appreciation",
    "Axaura Tech — Certificate of Achievement",
    "PythonWebDevPro — Flask, Django, HTML/CSS/Bootstrap",
    "DEN Coding Cup — Certificate ID: DENP1942",
  ],
};

export default profileData;