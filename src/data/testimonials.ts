export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  projectAssociated: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Rajesh Bhandari",
    role: "Chairman & Managing Director",
    company: "Bhandari Associates",
    quote: "VS Group has been our primary RCC and civil contracting partner for key developments like 7 Plumeria Drive. Their dedication to engineering precision, strict material testing, and meeting schedules is why they remain our first choice.",
    projectAssociated: "7 Plumeria Drive"
  },
  {
    name: "Sunil Nirman",
    role: "Founder Partner",
    company: "Nirman Greens",
    quote: "Working with VS Group of Companies is a seamless experience. Their on-site operations management, led by Suresh Achmeti, is exceptionally professional. They handle material logistics and high-volume concrete casting with elite discipline.",
    projectAssociated: "Nirman Greens Township"
  },
  {
    name: "Avinash Shaligram",
    role: "Chief Executive Officer",
    company: "Shaligram Buildcon",
    quote: "For our landmarks Shaligram SKY and Pavillia, we needed a civil developer that understood advanced structural codes and complex formwork. VS Group exceeded our expectations in safety protocols and monolithic concrete casting.",
    projectAssociated: "Shaligram SKY"
  },
  {
    name: "Vikram Manav",
    role: "Director of Projects",
    company: "Manav Group",
    quote: "We commissioned VS Group for the complete lock-and-key delivery of Manav La Centra. Their full-stack capabilities, spanning structural framing to fine interior plaster work, resulted in a flawless execution finished months before the deadline.",
    projectAssociated: "Manav La Centra"
  }
];
