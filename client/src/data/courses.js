// src/data/courses.js
export const instructors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    education: "PhD in Business Administration, MBA from Harvard",
    awards: ["Best Business Educator 2023", "Innovation Award 2022"],
    experience: "15 years in corporate strategy",
    courses: [1, 2, 3],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    education: "PhD in Entrepreneurship, MS from Stanford",
    awards: ["Entrepreneur of the Year 2021", "Teaching Excellence Award"],
    experience: "12 years as startup consultant",
    courses: [4, 5, 6],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    education: "PhD in Computer Science, BS from MIT",
    awards: ["AI Research Award 2024", "Outstanding Professor Award"],
    experience: "10 years in tech industry",
    courses: [7, 8, 9],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    name: "Prof. David Kim",
    education: "PhD in Mathematics, MS from Caltech",
    awards: ["Mathematics Excellence Award", "Research Innovation Prize"],
    experience: "18 years teaching mathematics",
    courses: [10, 11, 12],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
  }
];

export const courses = [
  // Business Solution Courses
  {
    id: 1,
    title: "Strategic Business Planning",
    category: "Business Solutions",
    instructor: 1,
    duration: "8 weeks",
    cost: 299,
    rating: 4.8,
    students: 1250,
    description: "Learn to create comprehensive business plans that drive success.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    syllabus: ["Market Analysis", "Financial Planning", "Risk Assessment", "Implementation Strategies"]
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    category: "Business Solutions",
    instructor: 1,
    duration: "6 weeks",
    cost: 249,
    rating: 4.7,
    students: 2100,
    description: "Master digital marketing strategies for modern businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    syllabus: ["SEO Fundamentals", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
  },
  {
    id: 3,
    title: "Financial Management for Businesses",
    category: "Business Solutions",
    instructor: 1,
    duration: "10 weeks",
    cost: 349,
    rating: 4.9,
    students: 890,
    description: "Comprehensive financial management skills for business leaders.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1411&q=80",
    syllabus: ["Budgeting", "Cash Flow Management", "Investment Strategies", "Financial Reporting"]
  },

  // Entrepreneurship Courses
  {
    id: 4,
    title: "Startup Launchpad",
    category: "Entrepreneurship",
    instructor: 2,
    duration: "12 weeks",
    cost: 399,
    rating: 4.8,
    students: 1800,
    description: "Everything you need to launch your first startup successfully.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    syllabus: ["Idea Validation", "Business Model Canvas", "Funding Strategies", "Team Building"]
  },
  {
    id: 5,
    title: "Innovation and Creativity",
    category: "Entrepreneurship",
    instructor: 2,
    duration: "8 weeks",
    cost: 299,
    rating: 4.6,
    students: 1450,
    description: "Develop innovative thinking and creative problem-solving skills.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    syllabus: ["Creative Thinking Techniques", "Design Thinking", "Innovation Frameworks", "Prototyping"]
  },
  {
    id: 6,
    title: "Scaling Your Business",
    category: "Entrepreneurship",
    instructor: 2,
    duration: "10 weeks",
    cost: 449,
    rating: 4.9,
    students: 720,
    description: "Learn strategies to scale your business from startup to enterprise.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    syllabus: ["Growth Strategies", "Operations Scaling", "Team Expansion", "Financial Scaling"]
  },

  // University Subject Courses
  {
    id: 7,
    title: "Advanced Web Development",
    category: "University Subjects",
    instructor: 3,
    duration: "16 weeks",
    cost: 499,
    rating: 4.7,
    students: 3200,
    description: "Master modern web development technologies and frameworks.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    syllabus: ["HTML5 & CSS3", "JavaScript ES6+", "React & Vue.js", "Node.js & APIs"]
  },
  {
    id: 8,
    title: "Data Structures & Algorithms",
    category: "University Subjects",
    instructor: 3,
    duration: "14 weeks",
    cost: 399,
    rating: 4.8,
    students: 2800,
    description: "Fundamental computer science concepts for efficient programming.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1228&q=80",
    syllabus: ["Arrays & Linked Lists", "Trees & Graphs", "Sorting Algorithms", "Dynamic Programming"]
  },
  {
    id: 9,
    title: "Machine Learning Fundamentals",
    category: "University Subjects",
    instructor: 3,
    duration: "18 weeks",
    cost: 599,
    rating: 4.9,
    students: 1950,
    description: "Introduction to machine learning algorithms and applications.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    syllabus: ["Linear Regression", "Neural Networks", "Deep Learning", "Model Evaluation"]
  },

  // Mathematics Courses
  {
    id: 10,
    title: "Calculus I",
    category: "University Subjects",
    instructor: 4,
    duration: "12 weeks",
    cost: 349,
    rating: 4.6,
    students: 1600,
    description: "Limits, derivatives, and integrals - foundation of calculus.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    syllabus: ["Limits & Continuity", "Derivatives", "Applications of Derivatives", "Integration"]
  },
  {
    id: 11,
    title: "Linear Algebra",
    category: "University Subjects",
    instructor: 4,
    duration: "10 weeks",
    cost: 299,
    rating: 4.7,
    students: 1300,
    description: "Vectors, matrices, and linear transformations.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    syllabus: ["Vector Spaces", "Matrix Operations", "Eigenvalues & Eigenvectors", "Linear Transformations"]
  },
  {
    id: 12,
    title: "Statistics & Probability",
    category: "University Subjects",
    instructor: 4,
    duration: "11 weeks",
    cost: 329,
    rating: 4.5,
    students: 1850,
    description: "Statistical methods and probability theory for data analysis.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    syllabus: ["Descriptive Statistics", "Probability Distributions", "Hypothesis Testing", "Regression Analysis"]
  }
];

export const categories = [
  {
    name: "Business Solutions",
    description: "Professional courses for business development and management",
    courses: [1, 2, 3],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
  },
  {
    name: "Entrepreneurship",
    description: "Launch and grow your entrepreneurial ventures",
    courses: [4, 5, 6],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
  },
  {
    name: "University Subjects",
    description: "Academic courses covering various university disciplines",
    courses: [7, 8, 9, 10, 11, 12],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  }
];