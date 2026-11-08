import { ArrowUpRight, Briefcase, Download, ExternalLink, GraduationCap, Mail, MapPin, Menu, Moon, Phone, Sparkles, Sun, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const personal = {
  name: 'Siham Ouiazzane',
  title: 'Final-Year Software Engineering & AI Student | Full-Stack Developer',
  objective:
    'Seeking a Projet de Fin d’Études (PFE) internship in software engineering and artificial intelligence, combining full-stack development with machine learning and deep learning.',
  email: 'ouiazzanesiham04@gmail.com',
  phone: '0696700559',
  location: 'Errachidia, Morocco',
  github: 'https://github.com/ouiazzane/',
  linkedin: 'https://www.linkedin.com/in/siham-ouiazzane-4409a3263?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  cvUrl: '/CV_Siham_Ouiazzane.pdf',
};

const skillsByCategory = [
  {
    title: 'Artificial Intelligence & Data',
    items: ['Machine Learning', 'Deep Learning', 'LLMs', 'RAG', 'Computer Vision', 'GNNs', 'Data Analysis', 'PyTorch', 'TensorFlow', 'PyTorch Geometric', 'MONAI', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Frontend Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Angular'],
  },
  {
    title: 'Backend Development',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'Java EE (JEE)', 'PHP'],
  },
  {
    title: 'Mobile Development',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Programming Languages',
    items: ['C', 'Java', 'JavaScript', 'TypeScript', 'Python', 'PHP'],
  },
  {
    title: 'Databases & Query Languages',
    items: ['MySQL', 'SQLite', 'MongoDB', 'SQL'],
  },
  {
    title: 'Software Engineering & Modeling',
    items: ['UML', 'OCL', '2TUP', 'Scrum'],
  },
  {
    title: 'Other Technologies & Domains',
    items: ['Docker', 'CI/CD', 'Cloud Computing', 'XML', 'Internet of Things (IoT)'],
  },
  {
    title: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'Figma'],
  },
  {
    title: 'UI / UX',
    items: ['UI/UX Design', 'Figma'],
  },
];

const projects = [
  {
    category: 'AI',
    name: 'Credit Scoring Model',
    description: 'Educational credit-risk application that estimates a client’s probability of serious delinquency within two years using the Give Me Some Credit dataset and a trained Random Forest model.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'React', 'Vite', 'Streamlit'],
    features: ['Data cleaning and feature engineering pipeline', 'FastAPI prediction service with React dashboard and Streamlit alternative', 'Class-imbalance handling and validation-based threshold selection'],
    repo: 'https://github.com/ouiazzane/credit-scoring-model',
    demo: '',
  },
  {
    category: 'AI',
    name: 'Beyond Glioma Segmentation',
    description: 'Brain-tumor segmentation on multimodal MRI scans with uncertainty estimation to flag out-of-distribution cases and support three-level confidence triage.',
    stack: ['Python', 'PyTorch', 'MONAI', '3D U-Net', 'NiBabel', 'SimpleITK', 'BraTS-Africa'],
    features: ['Segmentation across T1, T1CE, T2, and FLAIR modalities', 'Uncertainty estimation with softmax entropy, test-time augmentation, and Monte Carlo dropout', 'Out-of-distribution detection with confidence-based triage'],
    repo: '',
    demo: '',
  },
  {
    category: 'AI',
    name: 'Network Intrusion Detection with GNNs',
    description: 'Academic project classifying network traffic as normal or malicious on KDD Cup 99 using graph neural networks.',
    stack: ['Python', 'PyTorch', 'PyTorch Geometric', 'Scikit-learn', 'GAT', 'GraphSAGE'],
    features: ['Traffic preprocessing and graph construction', 'Classification with GAT and GraphSAGE', 'Evaluation using accuracy, confusion matrix, and ROC-AUC'],
    repo: '',
    demo: '',
  },
  {
    category: 'AI',
    name: 'Autonomous Cleaning Robot',
    description: 'Interactive 2D robot-cleaner simulator that plans an optimal route around obstacles using the A* search algorithm.',
    stack: ['Python', 'Pygame', 'A*', 'heapq'],
    features: ['Manhattan-distance heuristic and priority queue', 'Interactive obstacle placement', 'Path visualization and animation'],
    repo: '',
    demo: '',
  },
  {
    category: 'Development',
    name: 'JuriLink',
    description: 'Mobile application for managing a lawyer’s office, designed to support case tracking and document organization.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'Express'],
    features: ['Case management workflow', 'Document handling support', 'Legal-office operations'],
    repo: 'https://github.com/ouiazzane/Charge-Suivi',
    demo: '',
  },
  {
    category: 'Development',
    name: 'TaskMe',
    description: 'Task management platform for organizing work, tracking progress, and supporting productivity in a structured workflow.',
    stack: ['React', 'Vite', 'Express', 'MongoDB', 'JWT'],
    features: ['Task tracking', 'User authentication', 'Productivity-oriented dashboard'],
    repo: 'https://github.com/ouiazzane/TaskMe',
    demo: '',
  },
  {
    category: 'Development',
    name: 'TaskFlow',
    description: 'Collaborative project management platform for organizing projects and tasks, managing team members, and tracking progress.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Express', 'MongoDB', 'JWT', 'Zod'],
    features: ['Project and task boards with status assignment', 'Team roles, comments, and notifications', 'Project invitations with shareable links'],
    repo: 'https://github.com/ouiazzane/TaskFlow',
    demo: '',
  },
  {
    category: 'Development',
    name: 'Boutique E-Commerce',
    description: 'Full-stack online store with a product catalogue, shopping cart, order management, and delivery support in Morocco.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'MongoDB', 'JWT', 'Zod'],
    features: ['Product catalogue and shopping cart', 'Order and delivery management', 'Administration area'],
    repo: 'https://github.com/ouiazzane/BOUTIQUE-E-COMMERCE',
    demo: '',
  },
  {
    category: 'Development',
    name: 'SHIFA',
    description: 'Healthcare-oriented web application centered on pediatric care support and streamlined service access.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    features: ['Healthcare platform flow', 'Service-oriented frontend', 'Backend APIs'],
    repo: 'https://github.com/ouiazzane/SHIFA',
    demo: '',
  },
  {
    category: 'Development',
    name: 'Django Chat',
    description: 'Educational communication platform where students and teachers can discover users, exchange private messages, and share learning resources.',
    stack: ['Python', 'Django', 'Django REST Framework', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    features: ['User profiles and search', 'Private conversations', 'Courses and practical assignments with PDF resources'],
    repo: 'https://github.com/ouiazzane/DJANGO-CHAT',
    demo: '',
  },
  {
    category: 'Development',
    name: 'IMANOS E-Learning',
    description: 'E-learning platform prototype for students and teachers to access and manage online learning content.',
    stack: ['PHP', 'SQLite', 'PDO', 'HTML', 'CSS', 'JavaScript'],
    features: ['Course and PDF viewing', 'Quizzes with scoring', 'Educational video management'],
    repo: 'https://github.com/ouiazzane/E-LEARNING',
    demo: '',
  },
  {
    category: 'Development',
    name: 'Blockchain dApp',
    description: 'Blockchain learning project implementing smart contract-based exercises and a DApp interface for Solidity-focused coursework.',
    stack: ['React', 'JavaScript', 'Solidity', 'Truffle'],
    features: ['Smart contract exercises', 'DApp interface', 'Blockchain coursework implementation'],
    repo: 'https://github.com/ouiazzane/blockchain-tp-dapp-',
    demo: '',
  },
];

const experience = [
  {
    title: 'Software Developer Intern',
    company: 'LOGICALHO, Casablanca',
    period: 'July–August 2026',
    description: 'Developed JuriLink, a mobile application for law-firm case tracking and document organization using React Native, TypeScript, Node.js, and Express.',
  },
  {
    title: 'Frontend Development Intern — GestCom',
    company: 'GM Soft, Béni Mellal',
    period: 'July–August 2025',
    description: 'Built web interfaces with Angular, TypeScript, HTML, SCSS, and PrimeNG; integrated REST APIs and used GitHub branches and pull requests alongside Trello.',
  },
  {
    title: 'Software Developer Intern',
    company: 'Engineering Valley, Agadir',
    period: 'April–June 2024',
    description: 'Developed Django Chat, an educational messaging platform using Python, Django, Django REST Framework, and SQLite.',
  },
  {
    title: 'Web Developer & UI/UX Design Intern',
    company: 'LOGICALHO, Casablanca',
    period: 'July–August 2023',
    description: 'Created a website for a cosmetics shop and designed an e-commerce user experience in Figma.',
  },
  {
    title: 'Supervisor',
    company: 'Tabant Aït Bouguemaz Boarding School',
    period: 'September 2021–July 2022',
    description: 'Provided daily supervision and support to students.',
  },
];

const education = [
  {
    title: 'Baccalauréat in Physical Sciences BIOF',
    institution: 'Lycée Qualifiant Aït Bouguemaz',
    period: '2021–2022',
  },
  {
    title: 'DUT in Computer Engineering',
    institution: 'École Supérieure de Technologie de Guelmim',
    period: '2022–2024',
  },
  {
    title: 'Engineering cycle in Software Engineering and Artificial Intelligence',
    institution: 'FST Errachidia',
    period: '2024–present',
  },
];

const languages = [
  'Tamazight — Native',
  'Arabic — Fluent',
  'French — Fluent',
  'English — Upper-intermediate',
  'German — Intermediate',
];
const softSkills = ['Communication', 'Teamwork', 'Project management', 'Problem-solving', 'Rigor and diligence'];
const projectGroups = [
  { category: 'AI', title: 'Artificial Intelligence Projects' },
  { category: 'Development', title: 'Software Development Projects' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = useMemo(
    () => ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'],
    [],
  );

  useEffect(() => {
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
    document.body.style.backgroundColor = isDarkMode ? '#08111f' : '#f8fafc';
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white dark:bg-violet-500">SO</span>
              <span>Siham Ouiazzane</span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => setIsDarkMode((current) => !current)}
                className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href={personal.cvUrl} download className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-violet-500 dark:hover:bg-violet-400">
                <Download size={16} /> Download CV
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsDarkMode((current) => !current)}
                className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="border-t border-slate-200 bg-slate-50 p-4 lg:hidden dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-lg px-2 py-2 text-base font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a href={personal.cvUrl} download className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white dark:bg-violet-500">
                  <Download size={16} /> Download CV
                </a>
              </div>
            </div>
          )}
        </header>

        <main>
          <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-radial" aria-hidden="true" />
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700 dark:border-violet-500/40 dark:bg-violet-500/10 dark:text-violet-200">
                  <Sparkles size={14} /> Available for PFE
                </div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Software engineering & AI student</p>
                <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                  Building thoughtful digital experiences through clean, maintainable software.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  I am a final-year Software Engineering and Artificial Intelligence student at FST Errachidia, with experience across web and mobile development, machine learning, and deep learning. I am looking for a PFE internship in software engineering and AI.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-violet-500 dark:hover:bg-violet-400">
                    Explore My Projects <ArrowUpRight size={18} />
                  </a>
                  <a href={personal.cvUrl} download className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-medium text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
                    <Download size={18} /> Download My CV
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <a href={personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
                    GitHub <ExternalLink size={14} />
                  </a>
                  <a href={personal.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
                    LinkedIn <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center">
                <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Profile</p>
                      <h2 className="mt-2 text-2xl font-semibold">Siham</h2>
                    </div>
                    <img
                      src="/siham-ouiazzane.png"
                      alt="Portrait of Siham Ouiazzane"
                      width={768}
                      height={910}
                      fetchPriority="high"
                      className="h-36 w-32 shrink-0 rounded-2xl object-cover object-center ring-2 ring-violet-100 dark:ring-violet-400/30"
                    />
                  </div>

                  <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                      <Phone size={18} className="text-violet-600" />
                      <span>{personal.title}</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                      <GraduationCap size={18} className="text-violet-600" />
                      <span>Ingénierie Logicielle et Intelligence Artificielle</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                      <MapPin size={18} className="text-violet-600" />
                      <span>{personal.location}</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                      <Mail size={18} className="text-violet-600" />
                      <a href={`mailto:${personal.email}`} className="transition hover:text-slate-900 dark:hover:text-white">{personal.email}</a>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                      <Briefcase size={18} className="text-violet-600" />
                      <a href={`tel:${personal.phone}`} className="transition hover:text-slate-900 dark:hover:text-white">{personal.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-600">About me</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Self-driven, practical, and focused on building useful software.</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                  I am Siham Ouiazzane, a final-year engineering student in Software Engineering and Artificial Intelligence at FST Errachidia, with a DUT in Computer Engineering from ESTG. My four software-development internships and academic projects have given me experience in web and mobile development as well as AI, including medical-image segmentation and graph neural networks.
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                  I enjoy building maintainable, user-centered applications and applying machine learning and deep learning to practical problems. I am seeking a PFE internship where I can contribute to software engineering and artificial-intelligence projects.
                </p>
              </div>
              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-8 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <p className="text-sm uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Current focus</p>
                <ul className="mt-5 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-200">
                  <li>• Full-stack and mobile development</li>
                  <li>• Machine learning, deep learning, and computer vision</li>
                  <li>• Medical-image segmentation and graph neural networks</li>
                  <li>• Seeking a PFE internship in software engineering and AI</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="skills" className="bg-slate-100 py-20 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 max-w-2xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Skills</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technologies and strengths built through study and practice.</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {skillsByCategory.map((category) => (
                  <div key={category.title} className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/80">
                    <h3 className="mb-4 break-words text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span key={item} className="max-w-full break-words rounded-full border border-slate-300 bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-600">Projects</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected work and practical application.</h2>
              </div>
            </div>

            <div className="space-y-12">
              {projectGroups.map((group) => (
                <section key={group.category} aria-labelledby={`projects-${group.category.toLowerCase()}`}>
                  <h3 id={`projects-${group.category.toLowerCase()}`} className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {projects.filter((project) => project.category === group.category).map((project) => (
                      <article key={project.name} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900">
                        <div className="mb-5 flex items-center justify-between gap-3">
                          <h4 className="text-2xl font-semibold">{project.name}</h4>
                          {project.repo && (
                            <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.name} repository`} className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((tag) => (
                            <span key={tag} className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-200">{tag}</span>
                          ))}
                        </div>

                        <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="mt-1.5 h-2 w-2 rounded-full bg-violet-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {(project.repo || project.demo) && (
                          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-700">
                            {project.repo ? (
                              <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                                View repository <ArrowUpRight size={16} />
                              </a>
                            ) : <span />}
                            {project.demo ? (
                              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600">Live demo</a>
                            ) : null}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section id="experience" className="bg-slate-100 py-20 dark:bg-slate-900/80">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 max-w-2xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-600">Experience</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional exposure and early career experience.</h2>
              </div>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={`${item.company}-${item.period}-${index}`} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">{item.period}</p>
                        <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                        <p className="mt-1 text-slate-600 dark:text-slate-300">{item.company}</p>
                      </div>
                      <div className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-200">{item.company}</div>
                    </div>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-600">Education</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Academic background and ongoing studies.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {education.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">{item.period}</p>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{item.institution}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="languages" className="bg-slate-100 py-20 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Languages</p>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang) => (
                      <span key={lang} className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">{lang}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Soft skills</p>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill) => (
                      <span key={skill} className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-900 shadow-soft dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:p-12">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Contact</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Interested in a PFE internship in software engineering or AI?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I am actively seeking a PFE internship in software engineering and artificial intelligence, where I can contribute across full-stack development and AI.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <a href={`mailto:${personal.email}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-violet-400 hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="mt-2 font-medium text-slate-900 dark:text-white">{personal.email}</p>
                </a>
                <a href={`tel:${personal.phone}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-violet-400 hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="mt-2 font-medium text-slate-900 dark:text-white">{personal.phone}</p>
                </a>
                <a href={personal.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-violet-400 hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                  <p className="mt-2 font-medium text-slate-900 dark:text-white">ouiazzane</p>
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-violet-400 hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <p className="mt-2 font-medium text-slate-900 dark:text-white">Siham Ouiazzane</p>
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent('PFE internship opportunity')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400"
                >
                  <Mail size={18} /> Contact me
                </a>
                <a href={personal.cvUrl} download className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-5 py-3 font-medium text-slate-800 transition hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                  <Download size={18} /> Download CV
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-600 sm:px-6 md:flex-row lg:px-8 dark:text-slate-300">
            <p>© 2026 Siham Ouiazzane</p>
            <div className="flex items-center gap-4">
              <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
