export interface ProjectDetails {
  area?: string;
  architect?: string;
  rccWork?: string;
  bbmWork?: string;
  plasterWork?: string;
  turnkey?: boolean;
  completionYear?: string;
  highlights?: string[];
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  type: 'residential' | 'commercial';
  status: 'completed' | 'ongoing';
  image: string;
  description: string;
  longDescription: string;
  details: ProjectDetails;
}

export const projectsData: Project[] = [
  {
    slug: "32-pinewood-drive",
    name: "32 Pinewood Drive",
    location: "Hinjewadi",
    type: "residential",
    status: "completed",
    image: "/images/projects/32 Pinewood Drive.png",
    description: "A premium high-rise residential complex located in the heart of Pune's IT hub, Hinjewadi.",
    longDescription: "32 Pinewood Drive stands as a testament to VS Group's engineering excellence and structural integrity. Designed for the modern IT professional, this residential landmark blends premium aesthetic design with durable structural engineering. The high-rise structure utilizes advanced formwork technologies and premium RCC work to ensure structural resilience and sophisticated design aesthetics that redefine high-density urban living.",
    details: {
      area: "3.5 Lakh Sq. Ft.",
      architect: "Vikas Achalkar & Associates",
      rccWork: "VS Group (Advanced M40 Grade Concrete)",
      bbmWork: "Fly Ash BBM Construction",
      plasterWork: "Gypsum Finish Internal, Sand-faced Double Coat External",
      turnkey: true,
      completionYear: "2021",
      highlights: ["Strategic IT Hub Location", "Earthquake Resistant Structure", "Premium Clubhouse and Amenities", "Advanced Security Systems"]
    }
  },
  {
    slug: "7-plumeria-drive",
    name: "7 Plumeria Drive",
    location: "Tathawade",
    type: "residential",
    status: "completed",
    image: "/images/projects/7 Plumeria Drive.jpg",
    description: "An elegant, expansive residential community featuring spacious luxury apartments and world-class landscaping.",
    longDescription: "Spanning across acres of lush landscape, 7 Plumeria Drive is an architectural marvel built by Bhandari Associates in partnership with VS Group. The project is characterized by extensive open spaces, smart ventilation, and state-of-the-art construction techniques. Our scope covered comprehensive RCC work and high-quality masonry, setting a new benchmark for upscale residential lifestyle in Pune's western corridor.",
    details: {
      area: "5.2 Lakh Sq. Ft.",
      architect: "DSP Design Associates",
      rccWork: "VS Group (Premium High-Strength RCC)",
      bbmWork: "Lightweight Autoclaved Aerated BBM",
      plasterWork: "Neeru Finish Internal, Texture finish External",
      turnkey: false,
      completionYear: "2022",
      highlights: ["Extensive Landscaped Podiums", "Energy Efficient BBM Work", "Semi-Olympic Swimming Pool", "Advanced Rainwater Harvesting"]
    }
  },
  {
    slug: "ba-swadesha",
    name: "BA Swadesha",
    location: "Moshi",
    type: "residential",
    status: "completed",
    image: "/images/projects/BA Swadesha.jpg",
    description: "A heritage-inspired modern residential space focusing on community living and sustainable design.",
    longDescription: "BA Swadesha, situated in the rapidly developing area of Moshi, combines traditional cultural motifs with contemporary structural planning. Built with robust RCC framing and high-quality BBM partition walls, this community-oriented project offers maximum carpet area efficiency. VS Group was responsible for the core civil framework, plastering, and external waterproofing, delivering a long-lasting and low-maintenance structure.",
    details: {
      area: "2.1 Lakh Sq. Ft.",
      architect: "Space Designers Pune",
      rccWork: "VS Group (M35 Grade Concrete)",
      bbmWork: "Red Clay BBM Masonry",
      plasterWork: "Internal Gypsum, External Water-repellent Sand-faced Plaster",
      turnkey: true,
      completionYear: "2020",
      highlights: ["Traditional Archways & Modern Layouts", "Zero-waste Water Management", "Eco-friendly Clay Block BBM Work", "Kids Play Parks"]
    }
  },
  {
    slug: "krishna-amarillo",
    name: "Krishna Amarillo",
    location: "Hinjewadi",
    type: "residential",
    status: "completed",
    image: "/images/projects/Krishna Amarillo.jpg",
    description: "Premium contemporary residences designed for seamless work-life integration in Pune's premier IT zone.",
    longDescription: "Krishna Amarillo redefines modern urban luxury. Strategically situated in Hinjewadi, this project features complex geometric slabs and transfer girders engineered by VS Group. The residential layout prioritizes wide spans, natural sunlight pathing, and superior acoustic isolation between apartments, utilizing high-density block work and premium structural finishes.",
    details: {
      area: "2.8 Lakh Sq. Ft.",
      architect: "Axis Architects",
      rccWork: "VS Group (High-Performance Shear Wall Design)",
      bbmWork: "Autoclaved Block BBM Work",
      plasterWork: "Internal Pop/Gypsum Finish, External Structural Glazing & Texture",
      turnkey: true,
      completionYear: "2023",
      highlights: ["Smart Home Automation Integrated", "Sky Lounge & Reading Zones", "Seismic Zone III Compliant RCC", "EV Charging Stations Ready"]
    }
  },
  {
    slug: "krishna-fairmont",
    name: "Krishna Fairmont",
    location: "Wakad",
    type: "residential",
    status: "completed",
    image: "/images/projects/Krishna Fairmont.jpg",
    description: "A towering luxury condominium structure offering panoramic views and premium lifestyle details.",
    longDescription: "Krishna Fairmont stands as a landmark of luxury in Wakad. Developed using premium materials and state-of-the-art aluminum formwork (Mivan equivalent) for the concrete structure, this project shows how precision engineering creates unmatched aesthetic value. Every flat features flawless gypsum walls, monolithic columns, and superior joint details that minimize structural cracks.",
    details: {
      area: "4.1 Lakh Sq. Ft.",
      architect: "Metaphors Design Studio",
      rccWork: "VS Group (Monolithic Concrete Wall System)",
      bbmWork: "Precision Cut BBM Partitioning",
      plasterWork: "Smooth Gypsum Plastering, External Acrylic Texture Paint",
      turnkey: true,
      completionYear: "2024",
      highlights: ["Mivan Monolithic Concrete Tech", "Infinity Rooftop Pool", "High-speed Elevators", "Zero Dampness Wall Systems"]
    }
  },
  {
    slug: "mangalam-life-park",
    name: "Mangalam Life Park",
    location: "Moshi",
    type: "residential",
    status: "completed",
    image: "/images/projects/Mangalam Life Park.jpg",
    description: "An eco-friendly, family-oriented township featuring expansive green spaces and premium amenities.",
    longDescription: "Mangalam Life Park is designed as a sanctuary within the urban environment of Moshi. Utilizing energy-efficient design principles, the buildings are structured to maximize natural draft cooling. VS Group engineered the complex basement parking levels and high-load podium slabs, implementing specialized waterproofing compounds that ensure long-term concrete protection against water ingress.",
    details: {
      area: "6.3 Lakh Sq. Ft.",
      architect: "In-house Mangalam Design Team",
      rccWork: "VS Group (Heavy Duty Podium & Column RCC)",
      bbmWork: "Eco-friendly Fly Ash Blocks",
      plasterWork: "Smooth Internal Gypsum, External Double Coat Waterproof Plaster",
      turnkey: false,
      completionYear: "2022",
      highlights: ["1.5 Acre Central Landscaped Park", "Basement Parking for 800+ Cars", "Solar Integrated Grid System", "Certified IGBC Green Building"]
    }
  },
  {
    slug: "mangalam-breeze",
    name: "Mangalam Breeze",
    location: "Alandi",
    type: "residential",
    status: "completed",
    image: "/images/projects/Mangalam Breeze.jpg",
    description: "Charming suburban residences that prioritize affordability, spacious layouts, and clean living.",
    longDescription: "Mangalam Breeze offers modern architectural comfort in the spiritual and historical hub of Alandi. Built with an optimized structural footprint, VS Group successfully delivered high-volume, cost-efficient housing blocks without compromising on material quality. The project highlights excellent brickwork execution and flat plastering techniques, providing a robust finish ready for the sub-tropical climate.",
    details: {
      area: "1.9 Lakh Sq. Ft.",
      architect: "Niranjan Sahu Architects",
      rccWork: "VS Group (Standard Frame RCC)",
      bbmWork: "Red Brick BBM Masonry",
      plasterWork: "Neeru Finish Internal, Sand-faced External",
      turnkey: true,
      completionYear: "2019",
      highlights: ["Walkways by Indrayani River", "Seismic Code Compliant Structure", "Rainwater Harvesting Pitches", "Spacious Cross-Ventilated Units"]
    }
  },
  {
    slug: "shaligram-sky",
    name: "Shaligram SKY",
    location: "Kiwale",
    type: "residential",
    status: "ongoing",
    image: "/images/projects/Shaligram SKY.jpg",
    description: "An ongoing modern architectural statement redefining Kiwale's skyline with sky-decks and luxury details.",
    longDescription: "Shaligram SKY is a soaring testimony to future-ready construction. Currently under development in Kiwale, this high-rise features massive cantilevered balconies and sky-bridges. VS Group is utilizing high-strength self-compacting concrete (SCC) to cast dense rebars, ensuring maximum safety, earthquake resilience, and unmatched durability for decades to come.",
    details: {
      area: "3.9 Lakh Sq. Ft.",
      architect: "Aakar Design Group",
      rccWork: "VS Group (Self-Compacting Concrete Frame)",
      bbmWork: "AAC Blockwork Masonry",
      plasterWork: "Internal Gypsum, External Texture and Cladding Slabs",
      turnkey: true,
      completionYear: "2027 (Ongoing)",
      highlights: ["Double Height Sky Lounge", "Underground Dual-core Sump", "Cantilevered Sky Gym", "High Rebar Density Framing"]
    }
  },
  {
    slug: "shaligram-pavillia",
    name: "Shaligram Pavillia",
    location: "Gahunje",
    type: "residential",
    status: "ongoing",
    image: "/images/projects/Shaligram Pavillia.jpg",
    description: "Premium golf-view luxury residences neighboring the MCA International Cricket Stadium in Gahunje.",
    longDescription: "Overlooking the lush green sweeps of Gahunje, Shaligram Pavillia features super-premium residential layouts designed for elite lifestyles. Our structural engineers at VS Group designed wide-span beams and thin-slab profiles to maximize interior roominess and clear ceiling heights. The ongoing work adheres to the highest global safety standards, combining premium RCC systems with robust masonry.",
    details: {
      area: "4.8 Lakh Sq. Ft.",
      architect: "Karan Grover & Associates",
      rccWork: "VS Group (Post-Tensioned Slab Tech)",
      bbmWork: "Precision Autoclaved BBM",
      plasterWork: "Premium Gypsum Finish, External Structural Cladding & Weatherproof Coat",
      turnkey: true,
      completionYear: "2028 (Ongoing)",
      highlights: ["Breathtaking Golf Course Views", "Post-Tensioned Slabs for Sleek Beams", "Spacious 3 & 4 BHK Layouts", "State of the art Sports Lounge"]
    }
  },
  {
    slug: "krishna-amorapolis",
    name: "Krishna Amorapolis",
    location: "Dhanori",
    type: "residential",
    status: "completed",
    image: "/images/projects/Krishna Amorapolis.jpg",
    description: "Modern, secure and beautifully detailed residential towers in Dhanori, built for comfortable living.",
    longDescription: "Krishna Amorapolis is a premium residential development that emphasizes comfort, reliability, and security. VS Group was commissioned to handle the entire concrete skeleton and masonry envelope. Through highly organized supply chain planning and casting schedules, we finished the 12-story structures ahead of schedule, setting a record for timely delivery without any compromise on testing or structural standards.",
    details: {
      area: "3.2 Lakh Sq. Ft.",
      architect: "Abhay Bhide Associates",
      rccWork: "VS Group (Robust RCC Frame)",
      bbmWork: "Lightweight High-Thermal-Insulation Blocks",
      plasterWork: "Internal Gypsum Render, External Double Layer Plaster",
      turnkey: false,
      completionYear: "2023",
      highlights: ["Ahead of Schedule Delivery", "High-efficiency Thermal BBM Insulation", "Multi-tier Fire Sprinkler System", "Dedicated Recreational Zones"]
    }
  },
  {
    slug: "manav-la-moda",
    name: "Manav La Moda",
    location: "Balewadi",
    type: "residential",
    status: "completed",
    image: "/images/projects/Manav La Moda.jpg",
    description: "High-end luxury apartments boasting designer interiors, Italian styling cues, and premium locations.",
    longDescription: "Manav La Moda brings European design sensibilities to Balewadi. Built as a luxury boutique condominium, VS Group implemented high-spec materials and finishes. We achieved perfectly flat ceilings and precise 90-degree internal plaster corners, providing a clean canvas for high-end Italian marble flooring and premium designer fit-outs.",
    details: {
      area: "1.5 Lakh Sq. Ft.",
      architect: "Studio D'Idea (Milan/Pune)",
      rccWork: "VS Group (High Spec Foundation & Columns)",
      bbmWork: "High Grade Hollow Concrete Blocks",
      plasterWork: "Premium Grade Gypsum Plastering, External Silicon-based Finish",
      turnkey: true,
      completionYear: "2022",
      highlights: ["Ultra-Premium Italian Marble Integration", "Boutique Multi-tier Security", "Designer Rooftop Cabanas", "Acoustic-insulated Fenestrations"]
    }
  },
  {
    slug: "manav-la-centra",
    name: "Manav La Centra",
    location: "Tathawade",
    type: "residential",
    status: "completed",
    image: "/images/projects/Manav La Centra.jpg",
    description: "Perfectly placed transit-oriented residential hub offering smart homes and high-quality construction.",
    longDescription: "Manav La Centra is a modern transit-oriented development designed for young families and commuters. The building features reinforced shear walls and high-quality masonry that withstand high wind pressure. VS Group delivered this residential project under strict lock-and-key terms, managing all aspects of structural development, internal finishes, and final utility handovers.",
    details: {
      area: "2.4 Lakh Sq. Ft.",
      architect: "Veritas Architects",
      rccWork: "VS Group (Shear-Wall & Frame RCC)",
      bbmWork: "Autoclaved Concrete Block BBM",
      plasterWork: "Internal Gypsum Finish, External Weathercoat Silicon Paint",
      turnkey: true,
      completionYear: "2024",
      highlights: ["Direct Expressway Connectivity", "Smart Home Automation Enabled", "High Efficiency Slabs", "Rooftop Clubhouse & Jogging Track"]
    }
  },
  {
    slug: "krisala-41-zillenia",
    name: "Krisala 41 Zillenia",
    location: "Punawale",
    type: "residential",
    status: "completed",
    image: "/images/projects/Krisala 41 Zillenia.jpg",
    description: "Smartly sized urban apartments with multiple lifestyle options, crafted for next-gen home buyers.",
    longDescription: "Krisala 41 Zillenia in Punawale is designed to make optimal use of every square inch. Working closely with Krisala Developers, VS Group executed the high-speed concrete castings and brick masonry layout. Our strict quality control systems ensured that piping, electrical conduits, and masonry joints aligned perfectly to eliminate future repair needs.",
    details: {
      area: "3.7 Lakh Sq. Ft.",
      architect: "Pinnacle Design Studio",
      rccWork: "VS Group (High Grade RCC Frame)",
      bbmWork: "Autoclaved Aerated Blocks",
      plasterWork: "Gypsum Plaster finish, External Sand Faced plaster",
      turnkey: false,
      completionYear: "2025",
      highlights: ["Smart Space-Saving Layouts", "Zero Plumbing Leaks System", "Comprehensive Club Area", "Rooftop Infinity Deck"]
    }
  },
  {
    slug: "the-4th-axis-by-lifecraft",
    name: "The 4th Axis by Lifecraft",
    location: "Punawale",
    type: "commercial",
    status: "completed",
    image: "/images/projects/The 4th Axis by Lifecraft.jpg",
    description: "A state-of-the-art commercial and retail hub offering premium workspaces, high-street retail, and architectural grandeur.",
    longDescription: "The 4th Axis stands as a flagship commercial landmark in Punawale. Designed by Lifecraft Realty and constructed by VS Group, this project features massive clear-span commercial floors, custom structural steel framework integrations, and a grand multi-level atrium. Our engineering team successfully resolved complex post-tensioning requirements to deliver open-plan corporate workspaces that host premium brands and retail giants.",
    details: {
      area: "2.5 Lakh Sq. Ft.",
      architect: "V-Architects",
      rccWork: "VS Group (Heavy Commercial post-tensioned RCC)",
      bbmWork: "Heavy-duty Solid Concrete BBM",
      plasterWork: "Internal Sand faced plaster with putty, External Structural Glass Curtain Walls",
      turnkey: true,
      completionYear: "2024",
      highlights: ["Massive Clear-span Floor Plates", "Double-glazed Low-E Glass Facade", "Multi-level Automated Parking", "Dedicated Retail and Dining Zones"]
    }
  },
  {
    slug: "namrata-vasudha",
    name: "Namrata Vasudha",
    location: "Talegaon Dabhade",
    type: "residential",
    status: "completed",
    image: "/images/projects/Namrata Vasudha.jpg",
    description: "Serene low-rise hillside residential community celebrating nature, wellness and peaceful living.",
    longDescription: "Namrata Vasudha is a premium low-rise township nestled against the beautiful backdrop of Talegaon. The hilly terrain posed complex grading and foundation engineering challenges. VS Group designed step-foundations and retaining walls that conform to the natural contours of the land, preserving local ecology while ensuring absolute structural security and landslide prevention.",
    details: {
      area: "4.5 Lakh Sq. Ft.",
      architect: "Green Arch Architects",
      rccWork: "VS Group (Step-Foundation & Retaining Walls)",
      bbmWork: "Fly Ash eco-BBM work",
      plasterWork: "Internal Pop finish, External Damp-proof Sand-faced texture",
      turnkey: true,
      completionYear: "2023",
      highlights: ["Hillside Step-Foundation Design", "High-spec Retaining Wall Drainage", "Damp-proof External Coatings", "Wellness & Yoga Gardens"]
    }
  },
  {
    slug: "amberwood",
    name: "Amberwood",
    location: "Kokane Chowk",
    type: "residential",
    status: "completed",
    image: "/images/projects/Amberwood.jpg",
    description: "Highly sought-after, ultra-spacious luxury residential units in Kokane Chowk, built with elite craftsmanship.",
    longDescription: "Amberwood is a boutique residential development catering to Pune's discerning elite. Located at Kokane Chowk, Pimple Saudagar, this project is defined by its wide double-height balconies and premium timber paneling interfaces. VS Group executed the high-strength concrete works and precision internal masonry, ensuring that the heavy cantilevers are fully supported with double-reinforced tension zones.",
    details: {
      area: "1.2 Lakh Sq. Ft.",
      architect: "Form and Function Architects",
      rccWork: "VS Group (Double-reinforced Tension Cantilevers)",
      bbmWork: "Premium Red-clay Hollow BBM",
      plasterWork: "Super-smooth Gypsum Plastering, External Slate Stone Cladding",
      turnkey: true,
      completionYear: "2022",
      highlights: ["Double-Height Cantilever Slabs", "Premium Stone Cladding Accents", "Private Elevators Lobby", "Elite Kokane Chowk Landmark"]
    }
  },
  {
    slug: "unnati",
    name: "Unnati",
    location: "Hinjewadi",
    type: "commercial",
    status: "ongoing",
    image: "/images/projects/Unnati.jpg",
    description: "An ongoing premium office complex engineered with massive floor plates and green building tech.",
    longDescription: "Unnati is a commercial office complex under construction in Hinjewadi's business phase. Engineered to achieve gold-level green building certifications, this structure incorporates a composite steel-concrete floor deck, low carbon concrete mixes, and advanced foundation systems. VS Group is implementing state-of-the-art building management and civil construction techniques.",
    details: {
      area: "3.1 Lakh Sq. Ft.",
      architect: "Genesis Architects Studio",
      rccWork: "VS Group (Low Carbon Composite RCC)",
      bbmWork: "Thermostone Heat-insulating BBM",
      plasterWork: "Internal Putty finish, External ACP Sheet & Glazing",
      turnkey: true,
      completionYear: "2026 (Ongoing)",
      highlights: ["Gold-level Green Building Target", "Composite Steel-Concrete Floor Decks", "Thermostone BBM for Heat Insulation", "Dedicated Helipad Structuring"]
    }
  }
];
