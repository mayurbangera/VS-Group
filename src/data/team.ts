export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials?: string[];
}

export const teamData: TeamMember[] = [
  {
    name: "Vasudev Achmeti",
    role: "Co-Founder & Executive Chairman",
    image: "/images/founders/vasudev.jpg",
    bio: "With over 25 years of civil engineering and real estate experience, Vasudev co-founded VS Group in 2015 to redefine contracting standards in Pune. He leads our strategic board, guiding structural quality control and long-term land development acquisitions.",
    credentials: ["B.E. Civil Engineering", "MIE (Member of Institution of Engineers)", "25+ Years Experience"]
  },
  {
    name: "Suresh Achmeti",
    role: "Co-Founder & Director of Operations",
    image: "/images/founders/suresh.jpg",
    bio: "Suresh oversees the day-to-day on-site executions and heavy machinery operations. Under his leadership, VS Group has mobilized over 15 major civil projects concurrently. He is committed to site safety, modern scaffolding technology, and on-schedule handovers.",
    credentials: ["Diploma in Construction Technology", "Operations specialist", "20+ Years Experience"]
  },
  {
    name: "Avdhut Chakradhar",
    role: "Managing Director",
    image: "/images/founders/Avdhut Chakradhar.jpeg",
    bio: "Avdhut manages corporate strategy, client partnerships, and procurement management. He bridges business objectives and architectural visions, ensuring that VS Group remains Pune's premium engineering partner for prominent builders.",
    credentials: ["B.Tech Civil (IIT equivalent)", "MBA - Infrastructure Management", "15+ Years Corporate Real Estate"]
  }
];
