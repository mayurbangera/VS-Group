export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials?: string[];
  imagePosition?: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Vasudev Achmeti",
    role: "Co-Founder & Executive Chairman",
    image: "/images/founders/Suresh.jpeg",
    imagePosition: "center 25%",
    bio: "With over 25 years of civil engineering and real estate experience, Vasudev co-founded VS Group in 2015 to redefine contracting standards in Pune. He leads our strategic board, guiding structural quality control and long-term land development acquisitions.",
    credentials: ["B.E. Civil Engineering", "MIE (Member of Institution of Engineers)", "25+ Years Experience"]
  },
  {
    name: "Suresh Achmeti",
    role: "Co-Founder & Director of Operations",
    image: "/images/founders/Vasudev.jpeg",
    imagePosition: "center 30%",
    bio: "Suresh oversees the day-to-day on-site executions and heavy machinery operations. Under his leadership, VS Group has mobilized over 15 major civil projects concurrently. He is committed to site safety, modern scaffolding technology, and on-schedule handovers.",
    credentials: ["Diploma in Construction Technology", "Operations specialist", "20+ Years Experience"]
  },
  {
    name: "Avdhut Chakradhar",
    role: "Technical Head",
    image: "/images/founders/Avdhut Chakradhar.jpeg",
    imagePosition: "center 20%",
    bio: "Avdhut leads technical operations, structural engineering reviews, execution protocols, and quality control across all active sites. He bridges architectural visions and site engineering, ensuring VS Group delivers structural excellence for prominent developers.",
    credentials: ["B.Tech Civil (IIT equivalent)", "Technical Operations Head", "15+ Years Construction Engineering"]
  }
];
