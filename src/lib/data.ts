import { Code, Palette, Briefcase, BrainCircuit, Users, Star, Calendar, MessageSquare, Lightbulb, Link as LinkIcon, BookOpen, Video, CheckSquare, FileText, type LucideIcon, Rocket, GraduationCap, Target, Mic, PenSquare, HeartPulse, Shuffle, FlaskConical, Sparkles, HeartHandshake } from "lucide-react";
import images from './placeholder-images.json';

export type NavLink = {
  href: string;
  label: string;
  isDropdown?: boolean;
  dropdownLinks?: NavLink[];
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  {
    href: "#",
    label: "More",
    isDropdown: true,
    dropdownLinks: [
      { href: "/community", label: "Community" },
      { href: "/initiatives", label: "Initiatives" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

export const achievements = [
  { value: "+1600", label: "Students Reached", icon: Users },
  { value: "+500", label: "Opportunities Shared", icon: Calendar },
  { value: "8+", label: "Completed Courses", icon: Star },
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmed Khaled",
    role: "Computer Science Student",
    quote: "Upgrade was a turning point in my career. I learned Python for free with high quality, and the community helped me a lot.",
    avatar: images.testimonials.ahmed.src,
  },
  {
    id: 2,
    name: "Fatima Ali",
    role: "High School Student",
    quote: "The summaries and guidance sessions really helped me organize my time and apply for scholarships. Thank you, Upgrade!",
    avatar: images.testimonials.fatima.src,
  },
  {
    id: 3,
    name: "Omar Hassan",
    role: "Aspiring Graphic Designer",
    quote: "The graphic design course was a fantastic start for me in the field. The explanation was simple and the content was very valuable.",
    avatar: images.testimonials.omar.src,
  },
  {
    id: 4,
    name: "Laila Ibrahim",
    role: "Aspiring AI Developer",
    quote: "The AI workshops are brilliant! They demystify complex topics and make them accessible. I feel more confident in my learning journey.",
    avatar: images.testimonials.laila.src,
  },
  {
    id: 5,
    name: "Youssef Adel",
    role: "Freelance Writer",
    quote: "The creative writing course helped me find my voice. The community is incredibly supportive and the feedback is priceless. Highly recommended!",
    avatar: images.testimonials.youssef.src,
  },
  {
    id: 6,
    name: "Nour Saleh",
    role: "Business Student",
    quote: "The entrepreneurship section at Upgrade is a goldmine. I've connected with mentors and peers who have helped me refine my business idea.",
    avatar: images.testimonials.nour.src,
  },
];

export type Lesson = {
  title: string;
  content: string;
};

export type Course = {
  id: number;
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  lessons: Lesson[];
};

export const pastCourses: Course[] = [
  {
    id: 1,
    slug: "graphic-design-course",
    title: "Graphic Design Course",
    date: "Completed",
    location: "Online",
    description: "A comprehensive course on the fundamentals of graphic design using the latest tools and software.",
    imageUrl: images.courses.graphicDesign.src,
    lessons: [
        { title: "Introduction to Design Principles", content: "Learn about the core concepts of visual design, including balance, contrast, hierarchy, and repetition. Example: Analyze a website's layout to identify its visual hierarchy." },
        { title: "Mastering Adobe Photoshop", content: "A deep dive into Photoshop's essential tools for photo editing, retouching, and creating compositions. Example: Combine multiple images to create a surreal photo manipulation." },
        { title: "Vector Graphics with Adobe Illustrator", content: "Understand the power of vector graphics and create scalable logos and illustrations. Example: Design a modern, minimalist logo for a fictional tech startup." },
        { title: "Typography and Color Theory", content: "Explore how to use fonts and colors effectively to create compelling and readable visuals. Example: Create a color palette and select typography for a brand style guide." },
        { title: "Final Project: Brand Identity", content: "Apply all your skills to create a complete brand identity package, including a logo, business card, and social media banner." },
    ]
  },
  {
    id: 2,
    slug: "cs50-computer-science",
    title: "CS50 Computer Science Course",
    date: "Completed",
    location: "Online",
    description: "The community-supported and translated version of Harvard's most famous computer science course.",
    imageUrl: images.courses.cs50.src,
     lessons: [
        { title: "Introduction to C", content: "Learn the fundamentals of programming by starting with C, a powerful and foundational language. Example: Write a 'Hello, World!' program and compile it." },
        { title: "Arrays", content: "Understand how to store and manipulate collections of data using arrays. Example: Write a program that calculates the average of a list of numbers stored in an array." },
        { title: "Algorithms", content: "Explore sorting and searching algorithms to solve problems efficiently. Example: Implement a bubble sort algorithm to sort an array of integers." },
        { title: "Memory", content: "Dive into memory management, pointers, and dynamic memory allocation using malloc and free. Example: Create a simple program that demonstrates the use of pointers." },
        { title: "Data Structures", content: "Learn about linked lists, hash tables, and tries to store data in more complex ways. Example: Implement a basic linked list to store a sequence of names." },
    ]
  },
  {
    id: 3,
    slug: "psychology-sessions",
    title: "Psychology Sessions",
    date: "Completed",
    location: "Online",
    description: "A series of 5 important sessions for self-understanding and improving mental health for youth.",
    imageUrl: images.courses.psychology.src,
    lessons: [
        { title: "Understanding Cognitive Biases", content: "Explore common thinking errors that affect our judgment and decision-making. Example: Identify confirmation bias in your own recent decisions." },
        { title: "The Science of Happiness", content: "Learn about research-backed strategies to improve your well-being and life satisfaction. Example: Practice a gratitude journaling exercise for one week." },
        { title: "Managing Stress and Anxiety", content: "Discover practical techniques for coping with stress and reducing anxiety. Example: Try a 5-minute guided breathing exercise during a stressful moment." },
        { title: "Building Healthy Relationships", content: "Understand the principles of effective communication and building strong social connections. Example: Practice active listening in your next conversation with a friend." },
        { title: "Mindfulness and Meditation", content: "An introduction to mindfulness practices for a calmer, more focused mind. Example: Complete a 10-minute guided body scan meditation." },
    ]
  },
  {
    id: 4,
    slug: "english-language-courses",
    title: "English Language Courses",
    date: "Completed",
    location: "Online",
    description: "Two intensive courses to develop essential English language skills for beginners and advanced learners.",
    imageUrl: images.courses.english.src,
    lessons: [
        { title: "Conversational English Basics", content: "Build confidence in everyday conversations with essential vocabulary and phrases. Example: Practice introducing yourself and making small talk with a partner." },
        { title: "Grammar Essentials", content: "Master core grammar rules like verb tenses and sentence structure. Example: Write a short paragraph describing your daily routine using the present simple tense." },
        { title: "Advanced Vocabulary Building", content: "Expand your vocabulary with idiomatic expressions and advanced terms. Example: Learn and use five new idioms in sentences." },
        { title: "Business English", content: "Learn professional communication skills for emails, presentations, and meetings. Example: Write a professional email to a colleague requesting information." },
        { title: "Pronunciation and Accent Reduction", content: "Practice techniques to improve your pronunciation and sound more natural. Example: Record yourself reading a short text and compare your pronunciation to a native speaker." },
    ]
  },
  {
    id: 5,
    slug: "python-programming-course",
    title: "Python Programming Course",
    date: "Completed",
    location: "Online",
    description: "Successfully launched to teach the fundamentals of programming with Python.",
    imageUrl: images.courses.python.src,
    lessons: [
        { title: "Lesson 1: Introduction to Python", content: "What is Python and why is it so popular? We'll cover the basics of syntax, variables, and data types. Example: `name = 'User'` and `print(f'Hello, {name}!')`" },
        { title: "Lesson 2: Control Flow", content: "Learn how to make decisions in your code using if-else statements and for/while loops. Example: `for i in range(5): print(i)`" },
        { title: "Lesson 3: Functions and Modules", content: "Understand how to write reusable blocks of code with functions and organize them into modules. Example: `def greet(name): return f'Hello, {name}'`" },
        { title: "Lesson 4: Data Structures", content: "Explore Python's powerful built-in data structures like lists, tuples, and dictionaries. Example: `student = {'name': 'Ahmed', 'grade': 95}`" },
        { title: "Lesson 5: Introduction to Pandas", content: "Get a taste of data analysis with the Pandas library, learning how to read and manipulate data from a CSV file. Example: `import pandas as pd; df = pd.read_csv('data.csv')`" },
    ]
  },
  {
    id: 6,
    slug: "creative-writing-course",
    title: "Creative Writing Course",
    date: "Completed",
    location: "Online",
    description: "An innovative course to teach the arts of writing and expressing ideas and feelings.",
    imageUrl: images.courses.creativeWriting.src,
    lessons: [
        { title: "Finding Your Voice", content: "Explore different writing styles and exercises to discover your unique authorial voice. Example: Write a short paragraph on the same topic from two different perspectives." },
        { title: "Show, Don't Tell", content: "Master the art of descriptive writing to create vivid scenes and characters. Example: Describe a character's sadness without using the word 'sad'." },
        { title: "Crafting Compelling Characters", content: "Learn techniques for developing memorable and believable characters. Example: Create a character profile outlining their motivations, fears, and quirks." },
        { title: "Plot and Structure", content: "Understand the fundamentals of storytelling, including plot points, arcs, and pacing. Example: Outline a simple three-act story structure for a short story idea." },
        { title: "The Art of Revision", content: "Discover how to edit and polish your work to make it shine. Example: Take a piece of your writing and revise it to improve word choice and sentence flow." },
    ]
  },
];

export const blogPosts = [
  {
    slug: "getting-started-with-python",
    title: "Why You Should Start Learning Python Today",
    description: "Discover the importance of Python and how it can open doors for you in the world of technology and AI.",
    author: "Yehia Mohammed",
    date: "June 10, 2025",
    category: "Programming",
    content: "Python is more than just a programming language; it's a gateway to the future of technology. Its simple, readable syntax makes it the perfect starting point for beginners, while its powerful libraries and frameworks attract seasoned developers. This article explores its versatility in web development with Django and Flask, data analysis with Pandas and NumPy, and artificial intelligence with TensorFlow and PyTorch. We provide a comprehensive roadmap for beginners, including free courses, interactive platforms, and community forums to kickstart your journey. By the end, you'll understand why Python is a critical skill for any aspiring technologist."
  },
  {
    slug: "design-thinking-for-everyone",
    title: "Design Thinking: Not Just for Designers!",
    description: "Learn how to use the design thinking methodology to solve complex problems in your studies and life.",
    author: "Yehia Mohammed",
    date: "June 22, 2025",
    category: "Design",
    content: "Design Thinking is a powerful problem-solving framework that can be applied to any field, not just design. This post breaks down the five core stages: Empathize, Define, Ideate, Prototype, and Test. We'll explore how to deeply understand user needs, define problems with clarity, brainstorm innovative solutions, build low-cost prototypes to test ideas, and gather feedback for iteration. We'll share real-world examples of how students, entrepreneurs, and even community leaders have used this methodology to drive meaningful change. You will learn practical techniques to apply design thinking to your own challenges, fostering innovation and creativity."
  },
  {
    slug: "how-to-get-scholarships",
    title: "5 Steps to Secure a University Scholarship",
    description: "A practical guide to help you apply for scholarships and increase your chances of acceptance.",
    author: "Upgrade Team",
    date: "July 5, 2025",
    category: "Career Development",
    content: "Securing a scholarship can be life-changing, but the application process can seem daunting. This guide demystifies the process with five actionable steps. We cover everything from building a compelling personal profile and crafting a powerful personal statement to finding the right scholarships that match your skills and aspirations. You'll learn how to effectively request strong letters of recommendation and prepare for interviews with confidence. We also provide a checklist and timeline to keep you organized. These expert tips will significantly increase your chances of getting the financial support you need for your education."
  },
  {
    slug: "mastering-freelancing",
    title: "Mastering Freelancing: A Guide to Success",
    description: "Your roadmap to building a successful freelance career, from creating a standout profile to managing clients.",
    author: "Yehia Mohammed",
    date: "July 15, 2025",
    category: "Career Development",
    content: "Freelancing offers incredible freedom but requires a strategic approach. This comprehensive guide covers the essentials of starting and scaling your freelance business. We'll walk you through creating a compelling profile on platforms like Upwork and Fiverr, developing a portfolio that showcases your best work, and writing winning proposals that grab a client's attention. Learn how to set competitive pricing, manage client communication effectively, handle feedback professionally, and ensure timely project delivery. We'll also discuss the importance of building long-term client relationships for a sustainable and thriving freelance career."
  },
  {
    slug: "beginners-guide-to-ai",
    title: "The Beginner's Guide to Artificial Intelligence",
    description: "Demystifying AI, Machine Learning, and Deep Learning with simple explanations and real-world examples.",
    author: "Upgrade Team",
    date: "July 28, 2025",
    category: "Artificial Intelligence",
    content: "Artificial Intelligence is transforming our world. This beginner-friendly guide breaks down the core concepts without the complex jargon. We'll clarify the differences between AI, Machine Learning, and Deep Learning. You'll understand how recommendation algorithms on Netflix work, how virtual assistants like Siri process your commands, and how AI is being used in fields from healthcare to finance. We also introduce the ethical considerations surrounding AI and provide a list of free introductory courses and resources to continue your learning journey into this fascinating and rapidly evolving field."
  },
  {
    slug: "building-personal-brand",
    title: "Building Your Personal Brand as a Developer",
    description: "Learn why a personal brand is crucial and how to build one that opens doors to new opportunities.",
    author: "Yehia Mohammed",
    date: "August 5, 2025",
    category: "Career Development",
    content: "In a competitive tech market, your skills are only part of the equation. A strong personal brand can set you apart. This article explains what a personal brand is and why it matters for developers. We provide a step-by-step guide to defining your niche, crafting your story, and showcasing your expertise. Learn how to leverage platforms like GitHub, LinkedIn, and a personal blog or portfolio site to build your online presence. We'll also cover the benefits of contributing to open source, speaking at meetups, and networking effectively to build a reputation that attracts exciting career opportunities."
  },
  {
    slug: "effective-communication-in-tech",
    title: "Effective Communication: The Most Underrated Skill",
    description: "Improve your technical and non-technical communication to excel in team projects and interviews.",
    author: "Upgrade Team",
    date: "August 18, 2025",
    category: "Career Development",
    content: "You can be the most brilliant coder, but without strong communication skills, your career growth will be limited. This post highlights the importance of both technical and non-technical communication. Learn how to clearly explain complex technical concepts to non-technical stakeholders, write concise and useful documentation, and participate effectively in code reviews. We also cover essential soft skills like active listening, providing constructive feedback, and collaborating in a remote-first world. Mastering these skills will not only make you a better teammate but also help you ace interviews and advance into leadership roles."
  },
  {
    slug: "idea-to-mvp",
    title: "From Idea to MVP: A Roadmap for Entrepreneurs",
    description: "A practical guide to turning your business idea into a Minimum Viable Product to test your market.",
    author: "Upgrade Team",
    date: "September 2, 2025",
    category: "Entrepreneurship",
    content: "Every great product starts with an idea, but the journey from concept to reality is challenging. This roadmap guides aspiring entrepreneurs through the process of developing a Minimum Viable Product (MVP). Learn how to validate your idea, identify your core features, and choose the right technology stack without over-engineering. We'll cover agile development principles, the importance of user feedback loops, and how to define key metrics to measure your MVP's success. This guide will help you launch faster, learn from real users, and avoid common pitfalls on your path to building a successful business."
  },
  {
    slug: "ui-ux-fundamentals",
    title: "UI/UX Fundamentals for Aspiring Designers",
    description: "An introduction to the core principles of User Interface and User Experience design.",
    author: "Upgrade Team",
    date: "September 16, 2025",
    category: "Design",
    content: "Creating digital products that are both beautiful and easy to use requires a solid understanding of UI and UX design. This article serves as a primer for beginners. We'll differentiate between User Interface (the look and feel) and User Experience (the overall feeling and usability). Discover fundamental principles like visual hierarchy, consistency, feedback, and accessibility. We introduce you to the design process, from user research and wireframing to prototyping and usability testing. You'll also find a curated list of essential tools and resources to start your journey into the world of UI/UX design."
  },
  {
    slug: "staying-updated-in-tech",
    title: "How to Stay Updated in the Fast-Paced World of Tech",
    description: "Strategies and resources to keep your skills sharp and stay ahead of the curve in the tech industry.",
    author: "Yehia Mohammed",
    date: "September 30, 2025",
    category: "Programming",
    content: "The technology landscape changes at lightning speed. Continuous learning is not just an advantage; it's a necessity. This article presents effective strategies for staying current without feeling overwhelmed. We share a curated list of top newsletters, podcasts, and tech blogs to follow. Learn how to build a 'learning habit' by setting aside dedicated time, leveraging online course platforms, and engaging with developer communities on platforms like Twitter and Reddit. We'll also discuss the value of side projects for exploring new technologies and solidifying your knowledge. Stay relevant, stay curious, and keep growing."
  }
];

export const teamMembers = [
    { name: "Yehia Mohammed", role: "CEO & Founder", image: images.team.yehia.src },
];

export const upgradeGoals = [
    { title: "Breaking Educational Barriers", description: "Providing global educational opportunities for all.", icon: Rocket },
    { title: "Interactive & Applied Learning", description: "Turning education into a fun and practical experience.", icon: Users },
    { title: "Supporting Equal Opportunities", description: "Empowering students with the tools for success.", icon: GraduationCap },
    { title: "Empowerment for the Job Market", description: "Equipping youth with the skills needed to enter the workforce confidently.", icon: Target },
];

export type Initiative = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const currentInitiatives: Initiative[] = [
    { title: "Python Programming Course", description: "A comprehensive course to teach the fundamentals of Python.", icon: Code },
    { title: "Effective Study Methods Course", description: "A course offering tips and strategies for effective studying.", icon: BookOpen },
    { title: "Tech Talks Podcast", description: "Purposeful content discussing topics relevant to tech and youth.", icon: Mic },
    { title: "Creative Writing Course", description: "A space for creative expression and developing literary writing skills.", icon: PenSquare },
];

export const futureInitiatives: Initiative[] = [
  { title: "Community Solutions Challenge", description: "An interactive environment for developing practical solutions to community problems through competitions.", icon: Users },
  { title: "The Little Teacher", description: "Spreading the concept of peer education to empower students with explanation and communication skills.", icon: GraduationCap },
  { title: "First-Aid Fundamentals", description: "An awareness and practical program focusing on first aid basics.", icon: HeartPulse },
  { title: "Skill Swap", description: "A learning community where everyone teaches a skill and learns a new one.", icon: Shuffle },
  { title: "Upgrade Freelancing Academy", description: "Training youth on freelancing skills and earning money online.", icon: Briefcase },
  { title: "Mind Without Limits", description: "An educational community using AI to provide interactive content and practical simulations.", icon: BrainCircuit },
  { title: "Journey Through Majors", description: "A practical experience giving youth the chance to explore university and professional majors.", icon: FlaskConical },
];

export const socialLinks = [
  { name: 'Facebook', url: '#', icon: 'facebook' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
  { name: 'YouTube', url: '#', icon: 'youtube' },
];

export const communitySections: {id: string, title: string, description: string, icon: LucideIcon}[] = [
    { id: "programming", title: "Programming", description: "For everything related to code, algorithms, and the latest programming languages.", icon: Code },
    { id: "design", title: "Design", description: "A space for designers to discuss user experience, interfaces, and graphics.", icon: Palette },
    { id: "ai", title: "Artificial Intelligence", description: "Explore the future of machine learning, big data, and language models.", icon: BrainCircuit },
    { id: "business", title: "Entrepreneurship", description: "Develop your project, learn about marketing, management, and growth strategies.", icon: Briefcase },
    { id: "career-development", title: "Career Development", description: "Tips for building your CV, preparing for interviews, and growing in your career.", icon: Users },
];

export type Resource = {
  id: number;
  title: string;
  description: string;
  type: 'Template' | 'E-book' | 'Link' | 'Tool' | 'Checklist' | 'Recording';
  category: string;
  url: string;
};

export const resources: Resource[] = [];
