import { SwatchBook, LayoutGrid, AppWindow, Sparkles } from "lucide-react";

const categories = [
  { label: "All Projects", icon: <LayoutGrid size={20} /> },
  {
    label: "Graphic Design",
    icon: <SwatchBook size={20} />,
  },
  {
    label: "Software Solution",
    icon: <AppWindow size={20} />,
  },
  { label: "Full Package", icon: <Sparkles size={20} /> },
];

export default categories;
