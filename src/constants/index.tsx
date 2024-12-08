import { AiOutlineMessage } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegObjectUngroup } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { TiDeviceTablet } from "react-icons/ti";

export const navLinks = [
  { labe: "Home", href: "/", isActive: true },
  { labe: "Services", href: "/services", isActive: false },
  { labe: "About", href: "/about", isActive: false },
  { labe: "Contact", href: "/contact", isActive: false },
];

export const solutions = [
  {
    icon: <AiOutlineMessage size={35} color="#3535DF" />,
    title: "Consulting",
    description: "Customized strategies to meet your unique goals.",
  },
  {
    icon: <FaRegPaperPlane size={35} color="#3535DF" />,
    title: "Marketing",
    description: "Boost your brand visibility and engagement.",
  },
  {
    icon: <FaRegObjectUngroup size={35} color="#3535DF" />,
    title: "Design",
    description: "Create stunning visuals and user experiences.",
  },
];

export const services = [
  {
    icon: <FaNetworkWired size={50} color="white" />,
    title: "Website Development",
    description:
      "Build modern, responsive, and visually appealing websites designed to attract and engage your target audience.",
  },
  {
    icon: <TiDeviceTablet size={50} color="white" />,
    title: "App Development",
    description:
      "Create cutting-edge mobile and web apps that enhance user experience and drive business growth.",
  },
  {
    icon: <FaGlobe size={50} color="white" />,
    title: "Game Development",
    description:
      "Bring your gaming concepts to life with immersive experiences designed for various platforms.",
  },
  {
    icon: <FaChartLine size={65} color="white" />,
    title: "Plugins/Extensions",
    description:
      "Develop custom plugins and extensions to improve functionality and meet your unique requirements.",
  },
  {
    icon: <FaGlobe size={50} color="white" />,
    title: "Automation Software",
    description:
      "Streamline operations and increase efficiency with our intelligent automation tools.",
  },
  {
    icon: <FaChartLine size={65} color="white" />,
    title: "Amazon Services",
    description:
      "Optimize and manage your Amazon business for increased sales and market reach.",
  },
];

export const footerAbout = [
  { lable: "About Us", href: "#" },
  { lable: "News & Blog", href: "#" },
  { lable: "Contact Us", href: "#" },
];
