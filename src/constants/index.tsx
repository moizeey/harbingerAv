import { AiOutlineMessage } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegObjectUngroup } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

export const navLinks = [
  { labe: "Home", href: "#" },
  { labe: "Services", href: "#" },
  { labe: "About", href: "#" },
  { labe: "Blog", href: "#" },
  { labe: "Contact", href: "#" },
];

export const solutions = [
  {
    icon: <AiOutlineMessage size={30} color="#3535DF" />,
    title: "Consulting",
    description: "Pretium accumsan in ipsum convallis pellentesque metus",
  },
  {
    icon: <FaRegPaperPlane size={30} color="#3535DF" />,
    title: "Marketing",
    description: "Pretium accumsan in ipsum convallis pellentesque metus",
  },
  {
    icon: <FaRegObjectUngroup size={30} color="#3535DF" />,
    title: "Design",
    description: "Pretium accumsan in ipsum convallis pellentesque metus",
  },
];

export const services = [
  {
    icon: <FaNetworkWired size={65} color="#3535DF" />,
    title: "Digital Strategy",
    description:
      "Ultrices dictum integer quam morbi adipiscing suspendisse neque vel egestas commodo sit felis consectetur integer vitae, at mattis turpis id",
  },
  {
    icon: <FaBullhorn size={65} color="#3535DF" />,
    title: "Advertising",
    description:
      "Ultrices dictum integer quam morbi adipiscing suspendisse neque vel egestas commodo sit felis consectetur integer vitae, at mattis turpis id",
  },
  {
    icon: <FaGlobe size={65} color="#3535DF" />,
    title: "Online Marketing",
    description:
      "Ultrices dictum integer quam morbi adipiscing suspendisse neque vel egestas commodo sit felis consectetur integer vitae, at mattis turpis id",
  },
  {
    icon: <FaChartLine size={65} color="#3535DF" />,
    title: "Search Engine Optimization",
    description:
      "Ultrices dictum integer quam morbi adipiscing suspendisse neque vel egestas commodo sit felis consectetur integer vitae, at mattis turpis id",
  },
];
