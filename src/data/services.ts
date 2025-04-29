export interface Service {
  type: string;
  values: string[];
}

const services: Service[] = [
  {
    type: "Graphic Design",
    values: [
      "Logo/Brand Identity",
      "UI/UX Design",
      "Animations",
      "Video Montages",
      "Advertisement Material",
      "Motion Graphics",
    ],
  },
  {
    type: "Software Solution",
    values: [
      "Web Development",
      "Mobile Development",
      "API Development",
      "E-commerce Solutions",
      "Maintenance & Support",
      "SEO Optimization",
      "AI Solutions",
    ],
  },
  {
    type: "Full Package",
    values: ["Full Package"],
  },
];

export default services;
