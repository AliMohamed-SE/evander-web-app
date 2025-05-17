export const getProjectById = async (id: number) => {
  return (await projects.find((project) => project.id === id)) || null;
};

export interface Project {
  id: number;
  name: string;
  services: string[];
  description: string;
  date: string;
  thumbnail: string;
  audience?: string;
  site?: string;
  sections: Section[];
}

export interface Section {
  images?: string[];
  subTitle?: string;
  title?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "EFG Hermes Stock Exchange",
    services: ["Web Development", "API Development", "Maintenance & Support"],
    description:
      "The Stock Exchange App. is an interactive and educational stock market simulation application developed specifically for children visiting KidZania. The primary objective of the app is to introduce kids, to the basics of investing, trading, and financial literacy through gamified learning in a safe and engaging environment. The app allows young users to explore how the stock market works by simulating real-world concepts like buying and selling stocks, monitoring market trends, understanding supply and demand, and tracking performance over time. The application uses KidZania-branded companies to create a fun and relatable market environment.",
    date: "November 2024",
    thumbnail: "/images/projects/efg-stock/efg_thumbnail.png",
    site: "https://efgstockmarket.replit.app/login",
    audience: "Children aged 5-12.",
    sections: [
      {
        images: ["/images/projects/efg-stock/efg_banner.png"],
      },
    ],
  },
  {
    id: 2,
    name: "Mirage Perfumes",
    services: [
      "Logo/Brand Identity",
      "UI/UX Design",
      "Web Development",
      "Full Package",
    ],
    description:
      "Mirage was born from the desire to redefine modern masculinity through the art of fragrance. Conceived as a luxury perfume line tailored exclusively for men, the brand set out to capture the essence of strength, elegance, and quiet confidence. The name 'Mirage' evokes a sense of mystery and allure—something just out of reach, yet unforgettable. From its inception, the brand sought to stand apart by combining timeless craftsmanship with a contemporary edge. Drawing inspiration from the world of high fashion, fine materials, and refined taste, Mirage is more than just a scent—it's an experience.",
    date: "February 2024",
    thumbnail: "/images/projects/mirage/mirage_thumbnail.png",
    site: "https://main.dfcx022kewd99.amplifyapp.com/",
    audience:
      "It’s designed for the modern man who appreciates depth, detail, and presence, making every moment feel like a lasting impression.",
    sections: [
      {
        images: [
          "/images/projects/mirage/mirage_1-1.png",
          "/images/projects/mirage/mirage_1-2.png",
          "/images/projects/mirage/mirage_1-3.png",
          "/images/projects/mirage/mirage_1-4.png",
        ],
        subTitle: "Design Concept",
        title:
          "At the heart of Mirage lies the concept of illusion and elegance—the ability to command attention without force, to be noticed without speaking. The brand’s identity was crafted around this idea, with visuals that feel both powerful and restrained. The design system reflects the core personality of the fragrance: bold yet sophisticated, minimal yet rich. The layout and structure aim to create a sense of balance between masculinity and refinement, avoiding excess while still conveying luxury. Mirage invites its audience into a world where scent becomes a silent language—a reflection of character, style, and timeless appeal. Every detail, from the bottle design to the brand tone, was developed to evoke desire, trust, and admiration.",
      },
      {
        images: [
          "/images/projects/mirage/mirage_2-1.png",
          "/images/projects/mirage/mirage_2-2.png",
        ],
        subTitle: "Type & Color",
        title:
          "To visually translate the brand’s personality, a pairing of elegant and modern typefaces was chosen. The serif display type brings an air of sophistication and heritage, while the rounded sans-serif body font balances it with a fresh, clean tone. Together, they represent the harmony between classic masculinity and modern refinement. The color palette was curated to echo this same sentiment. A warm golden bronze serves as the hero color, symbolizing luxury and richness without being overly ostentatious. Deep charcoal grounds the design, providing contrast and weight, while soft light gray adds balance and understated elegance. These tones work in concert to create an atmosphere of quiet opulence and trustworthiness, perfectly suited to the Mirage brand.",
      },
      {
        images: [
          "/images/projects/mirage/mirage_3-1.png",
          "/images/projects/mirage/mirage_3-2.png",
          "/images/projects/mirage/mirage_3-3.png",
          "/images/projects/mirage/mirage_3-4.png",
        ],
        subTitle: "Finalizing",
        title:
          "As the Mirage identity neared completion, the focus shifted to perfecting the finer details and ensuring cohesion across all brand elements. The logo, packaging, and digital presence were refined to maintain consistency in tone, proportion, and feeling. Each visual component was tested for scalability, ensuring the design held its impact whether on a perfume bottle or a luxury campaign poster. Presentation materials, mockups, and style guides were created to help communicate the brand’s visual story across platforms. The result is a complete, high-end identity system that captures the sensual elegance and bold subtlety of Mirage. With its polished visuals and thoughtful foundation, Mirage is positioned to stand tall in the luxury fragrance market, leaving a lasting impression with every scent.",
      },
    ],
  },
  {
    id: 3,
    name: "Kairos Software Solutions",
    services: ["Logo/Brand Identity", "UI/UX Design"],
    description:
      "Kairos emerged from the vision of creating software solutions that not only function efficiently but also resonate with purpose and precision. Founded by a team of passionate developers, the brand was born out of a desire to bring meaningful change through technology—prioritizing strategic timing, thoughtful development, and growth-focused innovation. The name 'Kairos' itself, derived from the Greek word meaning 'the right or opportune moment,' encapsulates the essence of the brand: delivering solutions that are not just functional, but timely, impactful, and aligned with the unique needs of each client. From early brainstorming sessions to the first line of code, Kairos has been committed to blending creative vision with technical excellence.",
    date: "March 2025",
    thumbnail: "/images/projects/kairos/kairos_thumbnail.png",
    audience:
      "Visionary businesses and organizations seeking purpose-driven, timely, and innovative software solutions tailored to their strategic goals.",
    sections: [
      {
        images: [
          "/images/projects/kairos/kairos_1-1.png",
          "/images/projects/kairos/kairos_1-2.png",
        ],
        subTitle: "Design Concept",
        title:
          "The visual identity of Kairos is rooted in three symbolic elements, each representing a core pillar of the brand. An upward-facing chevron was designed to signify growth and forward momentum—reflecting Kairos's commitment to elevating businesses through scalable, smart solutions. Complementing this is a side-facing chevron, subtly referencing the classic 'play' or 'code' symbol, which captures the brand's development-first mindset and the continuous drive for innovation. Finally, the hourglass was introduced as a metaphor for efficiency and precision in time management, reinforcing the brand's promise to deliver on-time and within scope. These three elements come together to form a balanced, thoughtful logo that tells a story before a single word is read.",
      },
      {
        images: [
          "/images/projects/kairos/kairos_2-1.png",
          "/images/projects/kairos/kairos_2-2.png",
        ],
        subTitle: "Type & Color",
        title:
          "In choosing the visual tone for Kairos, the pairing of typefaces and colors was intentionally minimal yet expressive. The geometric and futuristic style of Orbitron was selected for headings and display type, reflecting the brand’s technological core and modern approach to problem-solving. To balance this, Raleway was used for body copy—elegant and highly legible, offering a clean and accessible reading experience across devices and screen sizes. The color palette supports the identity without overwhelming it: a confident yellow acts as the primary color, injecting energy and visibility; a rich charcoal gray anchors the visuals with strength and clarity; and a soft light gray provides balance and subtle contrast. Together, these choices support the logo’s story and ensure consistency across digital and print applications.",
      },
      {
        images: [
          "/images/projects/kairos/kairos_3-1.png",
          "/images/projects/kairos/kairos_3-2.png",
          "/images/projects/kairos/kairos_3-3.png",
          "/images/projects/kairos/kairos_3-4.png",
        ],
        subTitle: "Finalizing",
        title:
          "As the brand identity came together, the final phase focused on refinement and application. The symbol was fine-tuned for scalability and legibility, ensuring it performs equally well on large-format signage and small-screen interfaces. The full visual system—including typography, color, and logo usage guidelines—was documented to provide a clear roadmap for consistent brand implementation. Mockups of real-world applications, from landing pages to software UI screens, helped visualize the identity in context and validate its effectiveness. The result is a cohesive, modern identity that embodies Kairos's mission: to deliver smart, timely, and high-quality software solutions. With the foundation now firmly in place, Kairos is positioned to grow as a brand that makes every moment count.",
      },
    ],
  },
  {
    id: 4,
    name: "Dyar Hajer",
    services: ["Web Development", "API Development", "Maintenance & Support"],
    description:
      "The Dyar Hajer website is a modern, visually compelling web application designed to showcase the architecture and interior design services of Dyar Hajer, a creative studio based in the Middle East. The website serves as a digital portfolio and business hub, reflecting the studio's elegant aesthetic, culturally inspired designs, and attention to detail. It highlights completed projects, design philosophies, service offerings, and client testimonials. The platform is built for seamless performance across devices, emphasizing high-resolution visuals, minimalistic navigation, and a luxurious user experience.",
    date: "September 2024",
    thumbnail: "/images/projects/dyar-hajer/dyar-hajer_thumbnail.png",
    site: "https://dyarhajer.com/",
    audience:
      "individuals and families looking to build, renovate, or decorate homes and private residences",
    sections: [
      {
        images: ["/images/projects/dyar-hajer/dyar-hajer_banner.png"],
      },
    ],
  },
  {
    id: 5,
    name: "Collin Candy",
    services: ["Logo/Brand Identity", "UI/UX Design"],
    description:
      "Collin Candy is a vibrant and joyful candy and ice cream shop that brings a splash of color and a sense of fun to every visit. The brand is all about creating delightful experiences, with a playful and friendly atmosphere that appeals to both children and adults. At the heart of Collin Candy is our charming cartoon mascot, Colin, who embodies the spirit of joy and excitement that we aim to deliver. From the eye-catching packaging to our whimsical in-store displays, every aspect of Collin Candy is designed to make you smile. With a wide variety of delectable candies and creamy ice creams, we offer a sweet escape that is as memorable as it is delicious.",
    date: "August 2023",
    thumbnail: "/images/projects/collin-candy/collin-candy_thumbnail.png",
    audience:
      "Children aged 5-12 and their parents, Teenagers and young adults who enjoy candy and ice cream.",
    sections: [
      {
        images: [
          "/images/projects/collin-candy/collin-candy_1-1.jpeg",
          "/images/projects/collin-candy/collin-candy_1-2.jpeg",
          "/images/projects/collin-candy/collin-candy_1-3.jpeg",
          "/images/projects/collin-candy/collin-candy_1-4.jpeg",
        ],
        subTitle: "Design Concept",
        title:
          "The primary objective of the Collin Candy brand design is to create a vibrant, friendly, and memorable identity that resonates with both children and adults. Our aim is to encapsulate the joy and excitement of a candy and ice cream shop through a cohesive visual language that includes a colorful palette, playful typography, and a charming cartoon mascot. The design should evoke a sense of nostalgia while maintaining a modern appeal, ensuring that every element—from packaging to in-store displays—contributes to a fun and inviting atmosphere. By establishing a strong, recognizable brand identity, Collin Candy seeks to stand out in the market, attract a loyal customer base, and provide a delightful experience that keeps customers coming back for more.",
      },
      {
        images: ["/images/projects/collin-candy/collin-candy_2-1.jpeg"],
        subTitle: "Type & Color",
        title:
          "The font 'Super Funky' was chosen for the Collin Candy brand to reflect its playful and energetic personality. This font's bold and whimsical style perfectly captures the fun and friendly atmosphere we aim to create in our candy and ice cream shop. Its unique and eye-catching design ensures that the brand stands out and is easily recognizable, appealing to both children and adults alike. The Vibrant Blue represents trust and dependability while adding a lively and cheerful element to the brand,  The playful pink adds a touch of whimsy and charm, aligning perfectly with the friendly and joyful nature of Collin Candy. It creates a warm and welcoming atmosphere that appeals to our young audience and evokes feelings of happiness and delight.",
      },
      {
        images: [
          "/images/projects/collin-candy/collin-candy_3-1.jpeg",
          "/images/projects/collin-candy/collin-candy_3-2.jpeg",
          "/images/projects/collin-candy/collin-candy_3-3.jpeg",
          "/images/projects/collin-candy/collin-candy_3-4.jpeg",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Trip Global",
    services: ["Logo/Brand Identity", "UI/UX Design"],
    description:
      "Trip Global is a specialized brand offering high-quality fly fishing gear and outdoor apparel crafted for dedicated anglers and nature lovers. The project aimed to develop a brand identity that reflects the ruggedness and authenticity of the outdoors while appealing to an adventurous, discerning audience. The identity needed to communicate trust, durability, and a deep connection with nature.",
    date: "November 2023",
    thumbnail: "/images/projects/trip-global/trip-global_thumbnail.png",
    audience:
      "Primarily adults aged 25 to 55 — mature enough to have disposable income for quality gear but still active and adventurous. Mostly male, as fly fishing traditionally attracts more men, but inclusive of female anglers and outdoor enthusiasts as well.",
    sections: [
      {
        images: [
          "/images/projects/trip-global/trip-global_1-1.png",
          "/images/projects/trip-global/trip-global_1-2.png",
          "/images/projects/trip-global/trip-global_1-3.png",
          "/images/projects/trip-global/trip-global_1-4.png",
        ],
        subTitle: "Design Concept",
        title:
          "The design concept captures the harmony between the calmness of nature and the thrill of the fishing experience. It draws inspiration from organic shapes and natural textures, creating a visual narrative that is both grounded and dynamic. The branding balances a handcrafted feel with modern simplicity, emphasizing precision and expertise without sacrificing approachability.",
      },
      {
        images: [
          "/images/projects/trip-global/trip-global_2-1.png",
          "/images/projects/trip-global/trip-global_2-2.png",
        ],
        subTitle: "Type & Color",
        title:
          "The typography and color choices work together to evoke a sense of reliability and warmth while maintaining a clean, contemporary look. The typography combines strength with readability, ensuring the brand feels both professional and accessible. The color palette is inspired by natural environments, using muted, earthy tones that convey stability, warmth, and balance—creating an inviting yet sophisticated atmosphere.",
      },
      {
        images: [
          "/images/projects/trip-global/trip-global_3-1.png",
          "/images/projects/trip-global/trip-global_3-2.png",
          "/images/projects/trip-global/trip-global_3-3.png",
          "/images/projects/trip-global/trip-global_3-4.png",
        ],
        subTitle: "Finalization",
        title:
          "The final brand identity includes a versatile logo adaptable across various applications, a harmonious color system that ensures consistency, and carefully crafted patterns and visual elements that reinforce the brand’s connection to nature and craftsmanship. Mockups demonstrate the identity applied to products, packaging, and digital platforms, showcasing the brand’s readiness to engage its audience authentically and effectively.",
      },
    ],
  },
];

export default projects;
