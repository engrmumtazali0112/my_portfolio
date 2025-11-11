import p1blogwebsite from "../assets/p1blogwebsite.PNG";
import p4handgesture from "../assets/p4handgesture.gif";
import p5objdetection from "../assets/p5objdetection.gif";

import HostelManagementSystem from "../assets/HostelManagementSystem.JPG";
import QuizGame from "../assets/QuizGame.JPG";
import FlaskCICDDemo from "../assets/FlaskCICDDemo.JPG";
import FingerprintAttendance from "../assets/FingerprintAttendance.JPG";
import CloudBookStore from "../assets/CloudBookStore4.JPG";

import p6PersonalityPredictionSystem from "../assets/p6PersonalityPredictionSystem.gif";
import p7RubustMultipleChoisequiz from "../assets/p7RubustMultipleChoisequiz.gif";
import p11ModernMusicPlayer from "../assets/p11ModernMusicPlayer.gif";
import p12DocumentPlagiarismDetector from "../assets/p12DocumentPlagiarismDetector.gif";
import p8HangmanAdventureDjango from "../assets/p8HangmanAdventureDjango.gif";
import p9WorldBankPopulationData from "../assets/p9WorldBankPopulationData.JPG";
import p2ecommerce from "../assets/p2ecommerce.png";
import p3studyhub from "../assets/p3studyhub.PNG";
import p14python_scripting_amazon_scraping from "../assets/p14python_scripting_amazon_scraping.gif";
import p10TitanicDatasetAnalysisReportimages from "../assets/p10TitanicDatasetAnalysisReportimages.jpg";
import p13VoiceAssistan from "../assets/p13VoiceAssistan.PNG";
import p14JewelryShopStore from "../assets/p14JewelryShopStore.gif";

const ProjectCardData = [
    {
        imgsrc: p14JewelryShopStore,
        title: "Jewelry Shop Management System",
        text: "A comprehensive web-based application for managing a jewelry shop's operations including inventory, order processing, customer management, and sales tracking. Built with Django.",
        view: "https://github.com/engrmumtazali0112/Jewelry-Shop---Django-E-commerce",
        source: "https://github.com/engrmumtazali0112/Jewelry-Shop---Django-E-commerce"
    },
    {
        imgsrc: CloudBookStore,
        title: "Cloud BookStore with AWS",
        text: "A powerful dual-database bookstore management system built with Django REST Framework, featuring both PostgreSQL and MongoDB Atlas. Includes RESTful API with CRUD operations, real-time statistics, advanced filtering, signal-based updates, and polyglot persistence architecture. Demonstrates modern cloud-native application development with AWS integration.",
        view: "https://github.com/engrmumtazali0112/CloudBookStoreWithAWS/tree/master",
        source: "https://github.com/engrmumtazali0112/CloudBookStoreWithAWS/tree/master"
    },
    {
        imgsrc: QuizGame,
        title: "Interactive Quiz Game",
        text: "An engaging quiz game with PostgreSQL integration for storing multiple-choice questions across various categories. It provides data persistence and analytics.",
        view: "https://github.com/engrmumtazali0112/Robust-Multiple-Choice-Quiz-Game",
        source: "https://github.com/engrmumtazali0112/Robust-Multiple-Choice-Quiz-Game"
    },
    {
        imgsrc: p14python_scripting_amazon_scraping,
        title: "Amazon Scraper",
        text: "A Python project that scrapes Amazon product data such as titles, prices, reviews, and images. Utilizes Flask for backend and BeautifulSoup for scraping.",
        view: "https://amazon-scraper-m2h2defbh-engrmumtazali0112s-projects.vercel.app",
        source: "https://github.com/engrmumtazali0112/python-script-amazon-scraper"
    },
    {
        imgsrc: FlaskCICDDemo,
        title: "Flask CI/CD Demo Application",
        text: "A production-ready Flask web app with CI/CD pipeline using GitHub Actions and Docker, showcasing automated testing and deployment with pytest and Docker integration.",
        view: "https://github.com/engrmumtazali0112/Flask-CI-CD-Demo-Application",
        source: "https://github.com/engrmumtazali0112/Flask-CI-CD-Demo-Application"
    },
    {
        imgsrc: FingerprintAttendance,
        title: "Fingerprint Attendance System",
        text: "A secure biometric attendance system using Django, with multi-finger support, real-time tracking, and reporting features including CSV export and an intuitive admin panel.",
        view: "https://github.com/engrmumtazali0112/fingerprint_attendance_system",
        source: "https://github.com/engrmumtazali0112/fingerprint_attendance_system"
    },
    {
        imgsrc: p4handgesture,
        title: "Hand Gesture Recognition",
        text: "A Python project using OpenCV and Mediapipe for real-time hand gesture tracking and drawing applications. Enables interaction via webcam for drawing.",
        view: "https://github.com/engrmumtazali0112/Code_Clause_Internship_Artificial_Intelligence/tree/main/Gesture%20Recognition%20System%20%7C%20AI-Powered%20Hand%20Gesture%20Detection%20with%20CNN%20and%20OpenCV",
        source: "https://github.com/engrmumtazali0112/Code_Clause_Internship_Artificial_Intelligence/tree/main/Gesture%20Recognition%20System%20%7C%20AI-Powered%20Hand%20Gesture%20Detection%20with%20CNN%20and%20OpenCV"
    },
    {
        imgsrc: p5objdetection,
        title: "Real-Time Object Detection",
        text: "A real-time object detection system utilizing Python and OpenCV with a pre-trained SSD MobileNet model for recognizing up to 80 object classes.",
        view: "https://github.com/engrmumtazali0112/Code_Clause_Internship_Artificial_Intelligence/tree/main/simple-real-time-object-detection",
        source: "https://github.com/engrmumtazali0112/Code_Clause_Internship_Artificial_Intelligence/tree/main/simple-real-time-object-detection"
    },
    {
        imgsrc: p6PersonalityPredictionSystem,
        title: "Personality Prediction System via CV Analysis",
        text: "An AI-based system analyzing CVs to predict personality traits using Natural Language Processing (NLP) and Machine Learning techniques.",
        view: "https://github.com/engrmumtazali0112/Code_Clause_Internship_Artificial_Intelligence/tree/main/Personality-Prediction-System-via-CV-Analysis",
        source: "https://github.com/engrmumtazali0112/Code_Clause_Internship_Artificial_Intelligence/tree/main/Personality-Prediction-System-via-CV-Analysis"
    },
    {
        imgsrc: HostelManagementSystem,
        title: "Smart Hostel Management System",
        text: "A full-stack system for hostel management, covering room allocation, payments, complaints, biometric attendance, and more, built using Django and Bootstrap.",
        view: "https://github.com/engrmumtazali0112/SmartHostelManagmentSystem_FYP",
        source: "https://github.com/engrmumtazali0112/SmartHostelManagmentSystem_FYP"
    },
    {
        imgsrc: p1blogwebsite,
        title: "Modern Blog Website",
        text: "A dynamic blog website built with Node.js, Express, and MongoDB. Features include user authentication, CRUD operations, image upload, and an admin dashboard.",
        view: "https://github.com/engrmumtazali0112/Digital_Empowerment_Pakistan_Internships/tree/main/blog-website-node.js-express-mongodb",
        source: "https://github.com/engrmumtazali0112/Digital_Empowerment_Pakistan_Internships/tree/main/blog-website-node.js-express-mongodb"
    },
    {
        imgsrc: p7RubustMultipleChoisequiz, 
        title: "Robust Multiple-Choice Quiz Game",
        text: "An interactive multiple-choice quiz game with real-time feedback and a robust backend for dynamic question handling.",
        view: "https://github.com/engrmumtazali0112/EcodeCamp_Internships/tree/main/Robust-Multiple-Choice-Quiz-Game",
        source: "https://github.com/engrmumtazali0112/EcodeCamp_Internships/tree/main/Robust-Multiple-Choice-Quiz-Game"
    },
    {
        imgsrc: p8HangmanAdventureDjango,
        title: "Hangman Adventure Django",
        text: "A Django-based Hangman game developed during an internship, showcasing skills in responsive design and game logic.",
        view: "https://github.com/engrmumtazali0112/code_alpha_hangman_game",
        source: "https://github.com/engrmumtazali0112/code_alpha_hangman_game"
    },
    {
        imgsrc: p9WorldBankPopulationData,
        title: "Distribution Visualization Project",
        text: "A data analysis project visualizing global population distribution using the World Bank population dataset and bar charts.",
        view: "https://github.com/engrmumtazali0112/data-analysis-projects/tree/main/Distribution-Visualization",
        source: "https://github.com/engrmumtazali0112/data-analysis-projects/tree/main/Distribution-Visualization"
    },
    {
        imgsrc: p10TitanicDatasetAnalysisReportimages,
        title: "Titanic Survival Prediction",
        text: "Predicting passenger survival from the Titanic dataset using logistic regression and analyzing key features like class, gender, and age.",
        view: "https://github.com/engrmumtazali0112/data-analysis-projects/tree/main/Titanic-Survival-Prediction",
        source: "https://github.com/engrmumtazali0112/data-analysis-projects/tree/main/Titanic-Survival-Prediction"
    },
    {
        imgsrc: p2ecommerce, 
        title: "Watch World - E-Commerce Website",
        text: "An E-commerce platform where customers can explore and purchase premium watches with free citywide delivery.",
        view: "https://github.com/engrmumtazali0112/E-Commerce-Website-using-MERN-Stack",
        source: "https://github.com/engrmumtazali0112/E-Commerce-Website-using-MERN-Stack"
    },
    {
        imgsrc: p3studyhub,
        title: "StudyBud: Interactive Learning Platform",
        text: "A Django-based interactive learning platform for managing study rooms and facilitating real-time collaboration among users.",
        view: "https://github.com/engrmumtazali0112/Digital_Empowerment_Pakistan_Internships/tree/main/real-time-chat",
        source: "https://github.com/engrmumtazali0112/Digital_Empowerment_Pakistan_Internships/tree/main/real-time-chat"
    },
    {
        imgsrc: p11ModernMusicPlayer,
        title: "Modern Music Player",
        text: "A modern music player built with Python and Tkinter for managing and enjoying your music collection with essential playback features.",
        view: "https://github.com/engrmumtazali0112/Codex-Cue_Internship/tree/main/Python-music-app",
        source: "https://github.com/engrmumtazali0112/Codex-Cue_Internship/tree/main/Python-music-app"
    },
    {
        imgsrc: p12DocumentPlagiarismDetector,
        title: "Document Plagiarism Detector",
        text: "A Flask-based web application that detects plagiarism and AI-generated content in PDF and DOCX documents using NLP techniques.",
        view: "https://github.com/engrmumtazali0112/Codex-Cue_Internship/tree/main/plagiarism-detection-python",
        source: "https://github.com/engrmumtazali0112/Codex-Cue_Internship/tree/main/plagiarism-detection-python"
    },
    {
        imgsrc: p13VoiceAssistan,
        title: "Voice Assistant",
        text: "A Python-based voice-controlled personal assistant using Speech Recognition and gTTS for voice interaction.",
        view: "https://github.com/engrmumtazali0112/Codex-Cue_Internship/tree/main/voice-chat-assistant",
        source: "https://github.com/engrmumtazali0112/Codex-Cue_Internship/tree/main/voice-chat-assistant"
    }
];

export default ProjectCardData;