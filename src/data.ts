export interface SchoolInfo {
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  location: string;
  phone1: string;
  phone2: string;
  email: string;
  whatsapp: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  established: string;
}

export interface Announcement {
  id: string;
  text: string;
  type: 'urgent' | 'info' | 'success';
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

export interface StaffMember {
  name: string;
  role: string;
  qualification: string;
  description: string;
  image: string;
  department: 'Administration' | 'Sciences' | 'Arts & Humanities' | 'Commercials' | 'Support';
}

export interface AcademicProgram {
  title: string;
  subtitle: string;
  description: string;
  subjects: string[];
  keyFocus: string[];
}

export interface Facility {
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'academics' | 'sports' | 'events' | 'cultural';
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  category: string;
}

export const schoolInfo: SchoolInfo = {
  name: "NEW LIFE COMPREHENSIVE COLLEGE",
  shortName: "NLCC",
  tagline: "Building Excellence, Character and Future Leaders",
  address: "NEW LIFE CAMP GROUND, OLOOLA, SOKA AREA, IBADAN, NIGERIA",
  location: "Soka, Ibadan, Oyo State, Nigeria",
  phone1: "+234 803 456 7890",
  phone2: "+234 812 345 6789",
  email: "info@newlifecollege.edu.ng",
  whatsapp: "+2348034567890", // Standard format for whatsapp click-to-chat
  facebook: "https://facebook.com/newlifecomprehensivecollege",
  twitter: "https://twitter.com/newlife_college",
  instagram: "https://instagram.com/newlifecomprehensivecollege",
  youtube: "https://youtube.com/newlifecollege",
  established: "2008"
};

export const announcements: Announcement[] = [
  {
    id: "1",
    text: "Admission open for the 2026/2027 Academic Session! Secure your child's future today.",
    type: "urgent",
    date: "2026-06-15"
  },
  {
    id: "2",
    text: "Summer Enrichment and Skill Acquisition Program starts July 20, 2026.",
    type: "info",
    date: "2026-06-25"
  },
  {
    id: "3",
    text: "NLCC emerges 1st in the Ibadan Inter-School Science Olympiad Competition!",
    type: "success",
    date: "2026-06-20"
  }
];

export const faqs: FAQ[] = [
  {
    category: "Admissions",
    question: "What is the age requirement for admission into JSS1?",
    answer: "Students seeking admission into Junior Secondary School 1 (JSS1) must have completed primary education and should ideally be at least 10-11 years of age by September of the admission year."
  },
  {
    category: "Admissions",
    question: "How do I purchase and submit the admission application form?",
    answer: "You can click on 'Apply Now' to fill out the online admission application form, or download the PDF version from the Admissions Page. Physical forms can also be purchased directly at the School Administration Office, New Life Camp Ground, Soka, Ibadan."
  },
  {
    category: "Academics",
    question: "What examination bodies does the school prepare students for?",
    answer: "We fully prepare our students for National and International Examinations including: BECE (Basic Education Certificate Examination - NECO & Oyo State), WAEC (WASSCE), NECO (SSCE), and JAMB (UTME)."
  },
  {
    category: "Academics",
    question: "Are practical laboratory sessions conducted regularly?",
    answer: "Yes. Practical sessions in Chemistry, Physics, Biology, Agricultural Science, and Computer Studies are standard components of our weekly curriculum, conducted in our fully-equipped, modern laboratories."
  },
  {
    category: "General",
    question: "Does the school provide boarding facilities?",
    answer: "Currently, New Life Comprehensive College operates as a premium Day school. We focus on providing highly intensive instructional hours and enriching extracurricular programs during normal school hours."
  },
  {
    category: "General",
    question: "What is the security system of the school like?",
    answer: "The safety of our students is paramount. Our campus at New Life Camp Ground is fully fenced, securely gated, and monitored by professional, 24-hour physical security guards. All visitors are strictly audited at the entry gate."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Mrs. Adebayo",
    role: "Parent of NLCC Alumnus (now at University of Ibadan)",
    text: "The combination of moral discipline and academic intensity at New Life Comprehensive College is exceptional. My daughter graduated with 7 A1s in her WAEC and is currently doing amazingly well in Medical School. I recommend NLCC to every discerning parent.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Mr. Chukwuma Okafor",
    role: "Parent of JSS3 and SS2 Students",
    text: "What impresses me most is the individual attention teachers pay to children. When my son was struggling with Mathematics, the school's free remedial classes helped him catch up. Now he loves Maths and is preparing for his SS3 with high confidence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Oluwaseun Balogun",
    role: "Valedictorian, Class of 2024",
    text: "NLCC didn't just teach me formulas; the teachers taught me how to think, create, and lead. The computer programming clubs and the debate societies shaped my public speaking and logical reasoning. I am proud to be a product of this great institution.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

export const staffMembers: StaffMember[] = [
  {
    name: "Deacon Isaiah O. Oladele",
    role: "Principal / Proprietor",
    qualification: "M.Ed. Educational Administration (University of Ibadan), B.Sc. Mathematics",
    description: "A visionary educational leader with over 25 years of classroom and administrative experience. He is deeply committed to nurturing children in an environment that fuses rigorous academic pursuits with robust moral character.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    department: "Administration"
  },
  {
    name: "Mrs. Esther A. Oyedele",
    role: "Vice Principal (Academics)",
    qualification: "B.A. Ed. English Language (OAU, Ife)",
    description: "Drives academic curriculum design and teacher training programs. Mrs. Oyedele works meticulously to ensure that teaching standards align with international best practices and latest educational tech integration.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    department: "Administration"
  },
  {
    name: "Mr. Samuel T. Babatunde",
    role: "Head of Science Department",
    qualification: "B.Sc. Physics (UI), PGDE",
    description: "Passionate about experimental learning. Mr. Babatunde oversees our Physics, Chemistry, Biology, and Agricultural labs, prompting hands-on experiments over simple rote memorization.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    department: "Sciences"
  },
  {
    name: "Mrs. Funmilayo S. Adeyemi",
    role: "Head of Arts & Humanities",
    qualification: "M.A. Literature in English, B.A. Ed.",
    description: "Fosters creative expression, writing, and speaking skills. She coordinates the Drama and Literary/Debating society, training students to become articulate, critical, and expressive thinkers.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    department: "Arts & Humanities"
  },
  {
    name: "Mr. Chinedu J. Nwachukwu",
    role: "Lead Mathematics Instructor",
    qualification: "B.Sc. Industrial Mathematics (UNN)",
    description: "Demystifies mathematics through logic puzzles, visual proofs, and personalized mentorship. His remedial coaching classes have achieved a 98% WAEC credit success rate.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300",
    department: "Sciences"
  },
  {
    name: "Miss Abisola R. Salami",
    role: "Head of Commercial Studies",
    qualification: "B.Sc. Accounting, ACA (In View)",
    description: "Teaches Financial Accounting, Commerce, and Economics. She instills early financial literacy, entrepreneurial thinking, and business ethics in students.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300",
    department: "Commercials"
  }
];

export const academicPrograms: AcademicProgram[] = [
  {
    title: "Junior Secondary School (JSS 1 - 3)",
    subtitle: "The Foundation of Critical Thinking",
    description: "Our Junior Secondary curriculum provides an intensive, broad-based foundation. It prepares students for the Basic Education Certificate Examination (BECE) while identifying their distinct talents in sciences, humanities, or business.",
    subjects: [
      "Mathematics",
      "English Studies",
      "Basic Science",
      "Basic Technology",
      "National Values (Civic, Social Studies)",
      "Cultural & Creative Arts",
      "Christian Religious Studies (CRS)",
      "Computer Studies / ICT",
      "Agricultural Science",
      "Yoruba Language",
      "Home Economics",
      "Business Studies"
    ],
    keyFocus: [
      "Foundational analytical skills",
      "Robust comprehension and expressive writing",
      "Hands-on introductory computer programming",
      "Core values, character formation, and civic responsibility"
    ]
  },
  {
    title: "Senior Secondary School - Science Division",
    subtitle: "Nurturing Future Innovators & Researchers",
    description: "Designed for students aiming for careers in Medicine, Engineering, Pharmacy, Computer Science, and Agricultural research. We focus on deep theoretical comprehension and intensive laboratory practice.",
    subjects: [
      "Mathematics",
      "English Language",
      "Physics",
      "Chemistry",
      "Biology",
      "Further Mathematics",
      "Agricultural Science",
      "Computer Studies / ICT",
      "Civic Education",
      "Marketing / Data Processing"
    ],
    keyFocus: [
      "Advanced laboratory experiments",
      "Analytical problem-solving and logic development",
      "Olympiad preparation and scientific projects",
      "Rigorous preparation for WAEC, NECO, and JAMB"
    ]
  },
  {
    title: "Senior Secondary School - Arts & Humanities Division",
    subtitle: "Developing Eloquent, Insightful Leaders",
    description: "Aimed at future Lawyers, Journalists, Diplomats, Writers, and Sociologists. We encourage deep reading, critical analysis of historical and current events, and eloquent self-expression.",
    subjects: [
      "Mathematics",
      "English Language",
      "Literature in English",
      "Government",
      "History",
      "Christian Religious Studies (CRS)",
      "Yoruba Language",
      "Civic Education",
      "Dyeing & Bleaching / Catering Craft"
    ],
    keyFocus: [
      "Public speaking, structured debating, and research essays",
      "Analysis of administrative systems and social values",
      "Creative writing, theatrical performances, and art exhibitions",
      "Deep literary interpretation and ethical analysis"
    ]
  },
  {
    title: "Senior Secondary School - Commercial Division",
    subtitle: "Empowering Next-Generation Entrepreneurs & Economists",
    description: "Tailored for future Accountants, Economists, Business Administrators, and Entrepreneurs. Students learn structural finance management, trade dynamics, and market principles.",
    subjects: [
      "Mathematics",
      "English Language",
      "Financial Accounting",
      "Commerce",
      "Economics",
      "Government",
      "Civic Education",
      "Office Practice / Data Processing"
    ],
    keyFocus: [
      "Double-entry bookkeeping and financial balance analysis",
      "Modern marketing principles and e-commerce models",
      "Case studies of successful local and global businesses",
      "Early investment principles and entrepreneurial projects"
    ]
  }
];

export const facilities: Facility[] = [
  {
    title: "Modern Science Laboratories",
    description: "Dedicated, safe, and fully supplied Physics, Chemistry, and Biology laboratories where theoretical lessons come alive in practical experiments.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "ICT & Digital Literacy Lab",
    description: "Equipped with modern desktop computer workstations, fast internet access, and interactive display screens to teach coding, design, and digital research.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Well-Stocked Library & Resource Center",
    description: "A serene space containing thousands of textbooks, reference guides, journals, literature novels, and quiet reading desks for self-directed study.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Creative Art & Craft Studio",
    description: "An inspiring space filled with easels, sculpting clays, dye batiks, and fabrics, allowing students to learn traditional and modern creative crafts.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Sports Field & Recreation Arena",
    description: "Expansive outdoor spaces at the camp ground designed for football, basketball, table tennis, athletics, and dynamic inter-house sports competitions.",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Multipurpose Assembly & Event Hall",
    description: "A fully ventilated, high-capacity hall used for daily morning assemblies, guest seminars, debate tournaments, dramas, and parent-teacher meetings.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600"
  }
];

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Students Conducting Physics Experiment",
    category: "academics",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "g2",
    title: "Our Main Gate at New Life Camp Ground",
    category: "campus",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "g3",
    title: "Inter-House Athletics Finals",
    category: "sports",
    image: "https://images.unsplash.com/photo-1508847154043-be12a26c4125?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "g4",
    title: "Annual Cultural Day Celebrations",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "g5",
    title: "Valedictory Service Group Photo",
    category: "events",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "g6",
    title: "Hands-on Practical Computer Coding Session",
    category: "academics",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "g7",
    title: "Basketball Team Practice Session",
    category: "sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "g8",
    title: "Debating Society Preparing for Finals",
    category: "events",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
  }
];

export const calendarEvents: EventItem[] = [
  {
    id: "e1",
    title: "2026/2027 Admission Entrance Examination (Batch A)",
    date: "July 11, 2026",
    time: "9:00 AM - 1:00 PM",
    location: "NLCC Main Examination Hall",
    category: "Admissions",
    description: "Entrance examination for candidates seeking admission into JSS1, JSS2, and SS1 classes. Please bring basic writing materials and proof of registration."
  },
  {
    id: "e2",
    title: "Summer Boot Camp: Creative Coding & Art",
    date: "July 20 - August 14, 2026",
    time: "9:00 AM - 2:00 PM (Mon-Fri)",
    location: "NLCC ICT Center & Art Studio",
    category: "Extracurricular",
    description: "A 4-week practical camp open to all school and external students. Learn Scratch, Python programming, Batik printing, and Graphic design."
  },
  {
    id: "e3",
    title: "Parent-Teacher Association (PTA) Meeting",
    date: "September 12, 2026",
    time: "10:00 AM - 12:30 PM",
    location: "NLCC Event Auditorium",
    category: "Administrative",
    description: "Important meeting for parents of both new and returning students to discuss school policies, academic calendar, development plans, and welfare."
  }
];

export const newsAnnouncements: NewsItem[] = [
  {
    id: "n1",
    title: "NLCC Celebrates 98% Success Rate in 2025 WAEC Examinations",
    date: "June 10, 2026",
    summary: "Our graduating class achieved outstanding results, with 98% securing credits in Mathematics, English, and their primary science/art/commercial subjects.",
    content: "The management and staff of New Life Comprehensive College are overjoyed to announce the official release of the 2025 WASSCE results. Our students have once again kept our flag of academic excellence flying high. Out of 84 candidates who sat the examination, 82 secured credits in 5 or more subjects, including English Language and Mathematics. Special mention goes to Oluwaseun Balogun, who achieved straight A1s in all 9 of his subjects. We congratulate our parents for their continuous trust and support, and applaud our exceptional teachers for their unrelenting effort.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600",
    category: "Academic Achievement"
  },
  {
    id: "n2",
    title: "NLCC Emerges Champion in Oyo State Inter-School Debate Series",
    date: "May 24, 2026",
    summary: "Our debate team defeated top secondary schools in Ibadan to secure the grand trophy in the Oyo State Literary and Debate Championship.",
    content: "Our exceptional speakers from the Literary and Debating Society have done it again! Following a rigorous 4-stage knock-out tournament hosted in Ibadan, New Life Comprehensive College emerged overall winner of the Oyo State Inter-School Debate competition. Debating on the topic 'The Impact of Artificial Intelligence on the Future of African Youth,' our lead debater, Chinonso Obinna (SS2), won the Best Speaker Award, with praise from the state panel of judges for his structure, delivery, and critical analysis.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    category: "Extracurricular"
  },
  {
    id: "n3",
    title: "New Advanced Robotics Equipment Unveiled in ICT Laboratories",
    date: "April 18, 2026",
    summary: "In a bid to expand our STEM curriculum, the school has acquired advanced educational robotics kits and 3D printing equipment for student workshops.",
    content: "At NLCC, we believe in keeping our students ahead of the technological curve. Today, the School Principal unveiled our newly acquired STEM learning kits, including LEGO Mindstorms EV3, Arduino microcontrollers, and a modern dual-extruder 3D printer. Starting next term, students in JSS and SSS will engage in hands-on robotics design and logic programming. This aligns with our core educational philosophy of integrating creativity and future-readiness into our standard science curriculum.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
    category: "STEM Innovation"
  }
];
