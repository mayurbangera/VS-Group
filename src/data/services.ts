export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  iconName: string; // Used to map to Lucide icons dynamically
  features: string[];
}

export const servicesData: Service[] = [
  {
    slug: "commercial-construction",
    name: "Commercial Construction",
    shortDescription: "Engineering-driven construction of state-of-the-art offices, business hubs, and premium retail complexes.",
    description: "We build modern commercial spaces that facilitate business growth, productivity, and architectural prominence. Our commercial capability spans grade-A office buildings, modern retail high-streets, and heavy-duty mixed-use structures. We focus on wide-span configurations, column-free designs, dynamic glass envelopes, and energy-efficient building automation compatibility.",
    iconName: "Building2",
    features: [
      "Wide-span structural grids",
      "Composite steel-concrete floor plates",
      "Advanced glass curtain wall structures",
      "Integrated building management system civil layouts"
    ]
  },
  {
    slug: "residential-construction",
    name: "Residential Construction",
    shortDescription: "Premium high-rises and residential townships prioritizing premium lifestyles, comfort, and safety.",
    description: "Our residential structures combine security, aesthetic luxury, and thermal comfort. We construct high-rise complexes and modern townships utilizing top-tier concrete mixes, soundproofing blockwork systems, and advanced waterproofing. Every residential block is seismic-load compliant and engineered for centuries of structural life.",
    iconName: "Home",
    features: [
      "Monolithic concrete wall system compatibility",
      "Seismic-load resistant designs (Zone III compliant)",
      "High thermal and acoustic block partitions",
      "Advanced wet-area waterproofing detailing"
    ]
  },
  {
    slug: "rcc-work",
    name: "RCC Work",
    shortDescription: "High-spec reinforced cement concrete framing, foundations, and heavy structural post-tensioning.",
    description: "The core skeleton of any premium building is its RCC framework. VS Group specializes in high-tolerance concrete engineering. We offer specialized foundation designs (raft, steps, retaining walls), high-strength columns (up to M50 grade concrete), and post-tensioned slabs that minimize structural beam depths while permitting massive open spans.",
    iconName: "Hammer",
    features: [
      "High-grade concrete (up to M50 SCC)",
      "Post-Tensioned (PT) slab engineering",
      "Heavy duty retaining walls & step-foundations",
      "Precision steel rebar alignment and placement"
    ]
  },
  {
    slug: "bbm-work",
    name: "BBM Work (Brick & Block Masonry)",
    shortDescription: "Precision brick and block masonry utilizing eco-friendly AAC blocks and high-density clay bricks.",
    description: "Our BBM (Brick & Block Masonry) team focuses on absolute geometric accuracy, mortar bonding, and thermal properties. We utilize modern Autoclaved Aerated Concrete (AAC) blocks, eco-friendly fly-ash blocks, and traditional red-clay bricks. Our walls are flat, structurally secure, and pre-engineered with concrete bands to resist settlement cracks.",
    iconName: "Layers",
    features: [
      "AAC & fly-ash block construction",
      "Seismic bond beam integrations",
      "Precision horizontal and vertical alignment",
      "Optimal thermal and soundproofing qualities"
    ]
  },
  {
    slug: "plaster-work",
    name: "Plaster Work",
    shortDescription: "Perfect 90-degree internal gypsum plastering and double-coat waterproof external sand-faced finishes.",
    description: "The surface finishing defines the aesthetic quality of premium properties. VS Group is renowned for its plastering precision. We deliver flat gypsum internal walls ready for premium paint, pop moldings, and sand-faced double-coat external cement plasters that form a weather-resistant envelope against extreme monsoon conditions.",
    iconName: "Paintbrush",
    features: [
      "Perfect right-angle corner trims",
      "Super-smooth internal gypsum finish",
      "Sand-faced double-coat external plaster",
      "Waterproofing additive integration"
    ]
  },
  {
    slug: "lock-and-key-projects",
    name: "Lock and Key Projects",
    shortDescription: "End-to-end turnkey development from design and architectural planning to final delivery.",
    description: "For select premium clients, we deliver full lock-and-key turnkey solutions. We manage the entire lifecycle: architectural blueprints, regulatory approvals, structural RCC framing, masonry, MEP (Mechanical, Electrical, Plumbing) installations, premium finishes, and final utility handovers. We take the stress out of building, delivering on-time and within budget.",
    iconName: "Key",
    features: [
      "Single-point developer responsibility",
      "Integrated architectural and engineering planning",
      "Strict schedule and budget controls",
      "Premium finish handovers and compliance checkouts"
    ]
  }
];
