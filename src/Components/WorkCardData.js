// src/Components/WorkCardData.js

// ===== FEATURED + NEW PROJECT IMAGES =====
import tbbCover from "../assets/projects/tbb-home.webp";
import luxeCover from "../assets/projects/luxe-hero.webp";
import hostelCover from "../assets/projects/hostel-hero.webp";
import axonCover from "../assets/projects/axon-forge-1-hero.png";
import complaintCover from "../assets/projects/student-complaint-1-hero.png";
import fingerprintCover from "../assets/projects/fingerprint-attendance-1-hero.png";
import financeaiCover from "../assets/projects/financeai-1-hero.png";
import aiVisibilityCover from "../assets/projects/ai-visibility-1-hero.png";
import sufrahCover from "../assets/projects/sufrah-1-hero.png";   // ← single import
import jobBoardImage from "../assets/jobboard-1-homepage.png";

// ===== EXISTING PROJECT IMAGES =====
import QuizGame from "../assets/QuizGame.JPG";
import FlaskCICDDemo from "../assets/FlaskCICDDemo.JPG";
import p6PersonalityPredictionSystem from "../assets/p6PersonalityPredictionSystem.gif";
import p7RubustMultipleChoisequiz from "../assets/p7RubustMultipleChoisequiz.gif";
import p12DocumentPlagiarismDetector from "../assets/p12DocumentPlagiarismDetector.gif";
import p8HangmanAdventureDjango from "../assets/p8HangmanAdventureDjango.gif";
import p9WorldBankPopulationData from "../assets/p9WorldBankPopulationData.JPG";
import p2ecommerce from "../assets/p2ecommerce.png";
import p3studyhub from "../assets/p3studyhub.PNG";
import p14python_scripting_amazon_scraping from "../assets/p14python_scripting_amazon_scraping.gif";
import p10TitanicDatasetAnalysisReportimages from "../assets/p10TitanicDatasetAnalysisReportimages.jpg";
import p13VoiceAssistan from "../assets/p13VoiceAssistan.PNG";
import yycPage1 from "../assets/projects/yesyoucount-page-1.png";
import yycPage2 from "../assets/projects/yesyoucount-page-2.png";
import yycPage3 from "../assets/projects/yesyoucount-page-3.png";
import yycPage4 from "../assets/projects/yesyoucount-page-4.png";

const ProjectCardData = [
  {
    imgsrc: tbbCover,
    title: "True Blue Bio — Lab Supplies Store",
    text: "A B2B laboratory supplies store with account-specific pricing, bulk quote requests, Stripe and Net-30 checkout, and an operations admin for orders, invoices and vendors.",
    view: "/work/true-blue-bio",
    source: "https://github.com/engrmumtazali0112/true-blue-bio",
    featured: true,
    category: "Full-Stack · B2B SaaS",
    categories: ["web"],
    year: "2026",
    duration: "10 Months",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Microsoft Teams"],
  },
  {
    imgsrc: axonCover,
    title: "Axon Forge — Agency Platform",
    text: "A full-stack SaaS-style platform for a remote-first software development agency, showcasing service offerings, project portfolio, and client engagement workflows with a FastAPI backend and a React + Vite frontend.",
    view: "/work/axon-forge",
    source: "https://github.com/engrmumtazali0112/next-tech-solutions",
    category: "Agency Platform",
    categories: ["web"],
    year: "2026",
    duration: "8 Months",
    stack: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "Vite", "Docker"],
  },
  {
  imgsrc: sufrahCover,
  title: "Sufrah — Subscription Manager Pro",
  text: "A 9-app restaurant & meal-subscription platform serving Islamabad & Rawalpindi — public site, customer portal, admin, floor, cashier, kitchen, rider, sales, and manager apps. Menu, orders, subscriptions, deliveries and payments all live in one system.",
  view: "/work/sufrah",
  source: "https://github.com/engrmumtazali0112/sufrah",
  category: "Restaurant SaaS",
  categories: ["web", "mobile"],
  year: "2026",
  duration: "7 Months",
  stack: ["React", "Node.js", "MongoDB", "Stripe", "Expo"],
},
  {
    imgsrc: complaintCover,
    title: "Student Complaint Management System",
    text: "A production-ready, multi-portal complaint platform for universities with 10 role-based portals, real-time status tracking, automatic escalation, and a 5-star admin rating system.",
    view: "/work/student-complaint-system",
    source: "https://github.com/engrmumtazali0112/Student-Complaint-Management-System",
    category: "University Platform",
    categories: ["web", "mobile"],
    year: "2025",
    duration: "6 Months",
    stack: ["Flutter", "Django", "PostgreSQL", "DRF"],
  },
  {
    imgsrc: yycPage1,
    gallery: [yycPage1, yycPage2, yycPage3, yycPage4],
    title: "Yes You Count - Healthcare Staffing Platform",
    text: "A comprehensive multi-portal platform connecting facilities with verified care professionals. Features role-based access, shift lifecycle management, compliance workflows, and automated ACH billing via Stripe.",
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "Stripe API", "Railway"],
    view: "/work/yes-you-count",
    source: "https://github.com/engrmumtazali0112",
    category: "Healthcare SaaS",
    categories: ["web"],
    year: "2026",
    duration: "4 Months",
},
  
  {
    imgsrc: luxeCover,
    title: "Luxe Jewelry — E-Commerce Store",
    text: "A full e-commerce flow for fine jewelry: collections with filters, product gallery with size selector, cart, three-step checkout, order confirmation and an admin panel.",
    view: "/work/luxe-jewelry-store",
    source: "https://github.com/engrmumtazali0112/Jewelry-Shop---Django-E-commerce",
    category: "E-Commerce",
    categories: ["web"],
    year: "2024",
    duration: "6 Months",
    stack: ["Django", "PostgreSQL", "Bootstrap", "Stripe", "Django admin"],
  },
  {
    imgsrc: jobBoardImage,
    title: "JobBoard — Job Posting & Aggregation Platform",
    text: "A production-style job portal for Pakistan with three user roles. Aggregates jobs on a schedule from Arbeitnow, We Work Remotely and Jooble. Includes Glassdoor-style company pages, resume-based AI skill matching, an ATS-style candidate pipeline, and an admin console.",
    view: "/work/jobboard",
    source: "#", // TODO: GitHub repo URL
    category: "Full Stack Platform",
    categories: ["web", "ai-ml"],
    year: "2026",
    duration: "6 Months",
    stack: ["React", "FastAPI", "PostgreSQL", "APScheduler"],
  },
  {
    imgsrc: hostelCover,
    title: "University Administration Management System",
    text: "A role-based hostel and campus system covering room allocation, fee payments, mess, visitors, complaints and biometric attendance for admins and students.",
    view: "/work/university-administration-system",
    source: "https://github.com/engrmumtazali0112/SmartHostelManagmentSystem_FYP",
    category: "University Platform",
    categories: ["web", "mobile"],
    year: "2025",
    duration: "12 Months",
    stack: ["Django", "Bootstrap", "PostgreSQL", "Stripe", "Biometric API"],
  },

{
  imgsrc: fingerprintCover,
  title: "Fingerprint Attendance System",
  text: "A biometric attendance platform for universities with multi-finger enrollment, per-meal attendance (Breakfast/Lunch/Dinner), duplicate prevention, admin dashboards, and CSV/print-ready reporting.",
  view: "/work/fingerprint-attendance-system",
  source: "https://github.com/engrmumtazali0112/fingerprint_attendance_system",
  category: "Biometric · University",
  categories: ["web", "mobile"],
  year: "2025",
  duration: "2 Months",
  stack: ["Django", "SQLite", "Bootstrap 5", "Digital Persona SDK"],
},
{
  imgsrc: financeaiCover,
  title: "FinanceAI — Personal Finance Assistant",
  text: "An AI-driven, multi-user financial companion with natural-language Q&A over spending data, receipt OCR via Claude vision, intent-based routing between Haiku and Sonnet for 5× cost savings, and Supabase row-level security.",
  view: "/work/financeai",
  source: "https://github.com/engrmumtazali0112/finance-assistant",
  category: "AI · Fintech",
  categories: ["web", "ai-ml"],
  year: "2025",
  duration: "3 Months",
  stack: ["Next.js 14", "TypeScript", "Supabase", "Claude API", "Recharts"],
},
{
  imgsrc: aiVisibilityCover,
  title: "AI Visibility & Search Intelligence",
  text: "A platform that tracks whether a business is mentioned when buyers ask ChatGPT, Claude, or Perplexity. Uses a 3-agent Claude pipeline (discovery, scoring, recommendation) with a documented multi-factor opportunity score.",
  view: "/work/ai-visibility",
  source: "https://github.com/engrmumtazali0112/AI-Visibility-Search-Intelligence-Platform",
  category: "AI SaaS Platform",
  categories: ["web", "ai-ml", "data"],
  year: "2025",
  duration: "3 Months",
  stack: ["Flask", "React", "Claude API", "PostgreSQL", "Vite"],
},
  {
    imgsrc: QuizGame,
    title: "Interactive Quiz Game",
    text: "An engaging quiz game with PostgreSQL integration for storing multiple-choice questions across various categories.",
    view: "https://github.com/engrmumtazali0112/Robust-Multiple-Choice-Quiz-Game",
    source: "https://github.com/engrmumtazali0112/Robust-Multiple-Choice-Quiz-Game",
    category: "Web App",
    categories: ["web"],
    year: "2024",
    duration: "1 Month",
    stack: ["Django", "PostgreSQL", "Bootstrap"],
  },
  {
    imgsrc: p14python_scripting_amazon_scraping,
    title: "Amazon Scraper",
    text: "A Python project that scrapes Amazon product data such as titles, prices, reviews, and images. Utilizes Flask for backend and BeautifulSoup for scraping.",
    view: "https://amazon-scraper-m2h2defbh-engrmumtazali0112s-projects.vercel.app",
    source: "https://github.com/engrmumtazali0112/python-script-amazon-scraper",
    category: "Automation · Scraping",
    categories: ["web", "data"],
    year: "2024",
    duration: "2 Months",
    stack: ["Python", "Flask", "BeautifulSoup", "Scrapy"],
  },
  {
    imgsrc: FlaskCICDDemo,
    title: "Flask CI/CD Demo",
    text: "A production-ready Flask web app with CI/CD pipeline using GitHub Actions and Docker, showcasing automated testing and deployment.",
    view: "https://github.com/engrmumtazali0112/Flask-CI-CD-Demo-Application",
    source: "https://github.com/engrmumtazali0112/Flask-CI-CD-Demo-Application",
    category: "DevOps",
    categories: ["web"],
    year: "2024",
    duration: "2 Weeks",
    stack: ["Flask", "Docker", "GitHub Actions", "pytest"],
  },

  {
    imgsrc: p6PersonalityPredictionSystem,
    title: "Personality Prediction via CV",
    text: "An AI-based system analyzing CVs to predict personality traits using NLP and Machine Learning techniques.",
    view: "https://github.com/engrmumtazali0112/Code_Clause_Internship_Artificial_Intelligence",
    source: "https://github.com/engrmumtazali0112/Code_Clause_Internship_Artificial_Intelligence",
    category: "AI · NLP",
    categories: ["ai-ml"],
    year: "2024",
    duration: "1 Month",
    stack: ["Python", "NLP", "Scikit-learn", "spaCy"],
  },
  {
    imgsrc: p7RubustMultipleChoisequiz,
    title: "Robust Multiple-Choice Quiz",
    text: "An interactive multiple-choice quiz game with real-time feedback and a robust backend for dynamic question handling.",
    view: "https://github.com/engrmumtazali0112/EcodeCamp_Internships",
    source: "https://github.com/engrmumtazali0112/EcodeCamp_Internships",
    category: "Web App · Game",
    categories: ["web"],
    year: "2024",
    duration: "1 Month",
    stack: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    imgsrc: p8HangmanAdventureDjango,
    title: "Hangman Adventure Django",
    text: "A Django-based Hangman game developed during an internship, showcasing skills in responsive design and game logic.",
    view: "https://github.com/engrmumtazali0112/code_alpha_hangman_game",
    source: "https://github.com/engrmumtazali0112/code_alpha_hangman_game",
    category: "Web App · Game",
    categories: ["web"],
    year: "2024",
    duration: "3 Weeks",
    stack: ["Django", "Bootstrap", "JavaScript"],
  },
  {
    imgsrc: p9WorldBankPopulationData,
    title: "Distribution Visualization",
    text: "A data analysis project visualizing global population distribution using the World Bank population dataset and bar charts.",
    view: "https://github.com/engrmumtazali0112/data-analysis-projects",
    source: "https://github.com/engrmumtazali0112/data-analysis-projects",
    category: "Data Analysis",
    categories: ["data"],
    year: "2023",
    duration: "2 Weeks",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    imgsrc: p10TitanicDatasetAnalysisReportimages,
    title: "Titanic Survival Prediction",
    text: "Predicting passenger survival from the Titanic dataset using logistic regression and analyzing key features.",
    view: "https://github.com/engrmumtazali0112/data-analysis-projects",
    source: "https://github.com/engrmumtazali0112/data-analysis-projects",
    category: "Machine Learning",
    categories: ["data", "ai-ml"],
    year: "2023",
    duration: "2 Weeks",
    stack: ["Python", "Pandas", "Scikit-learn", "Seaborn"],
  },
  {
    imgsrc: p2ecommerce,
    title: "Watch World - E-Commerce",
    text: "An E-commerce platform where customers can explore and purchase premium watches with free citywide delivery.",
    view: "https://github.com/engrmumtazali0112/E-Commerce-Website-using-MERN-Stack",
    source: "https://github.com/engrmumtazali0112/E-Commerce-Website-using-MERN-Stack",
    category: "E-Commerce",
    categories: ["web"],
    year: "2024",
    duration: "3 Months",
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    imgsrc: p3studyhub,
    title: "StudyBud — Learning Platform",
    text: "A Django-based interactive learning platform for managing study rooms and facilitating real-time collaboration.",
    view: "https://github.com/engrmumtazali0112/Digital_Empowerment_Pakistan_Internships",
    source: "https://github.com/engrmumtazali0112/Digital_Empowerment_Pakistan_Internships",
    category: "EdTech · Real-time",
    categories: ["web"],
    year: "2024",
    duration: "6 Weeks",
    stack: ["Django", "PostgreSQL", "WebSockets", "Bootstrap"],
  },
  {
    imgsrc: p12DocumentPlagiarismDetector,
    title: "Document Plagiarism Detector",
    text: "A Flask-based web application that detects plagiarism and AI-generated content in PDF and DOCX documents using NLP techniques.",
    view: "https://github.com/engrmumtazali0112/Codex-Cue_Internship",
    source: "https://github.com/engrmumtazali0112/Codex-Cue_Internship",
    category: "AI · NLP",
    categories: ["ai-ml"],
    year: "2024",
    duration: "1 Month",
    stack: ["Python", "Flask", "NLP", "spaCy"],
  },
  {
    imgsrc: p13VoiceAssistan,
    title: "Voice Assistant",
    text: "A Python-based voice-controlled personal assistant using Speech Recognition and gTTS for voice interaction.",
    view: "https://github.com/engrmumtazali0112/Codex-Cue_Internship",
    source: "https://github.com/engrmumtazali0112/Codex-Cue_Internship",
    category: "AI · Automation",
    categories: ["ai-ml"],
    year: "2024",
    duration: "3 Weeks",
    stack: ["Python", "SpeechRecognition", "gTTS", "pyttsx3"],
  },
  
];

export default ProjectCardData;
