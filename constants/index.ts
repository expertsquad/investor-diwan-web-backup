import { UrlObject } from "url";

//About page demo data
export const yourSuccessDemoData = [
  {
    id: 1,
    title: "Swipe & Invest",
    description:
      "Invest effortlessly with the swipe of your card, seamlessly integrating investing into your daily transactions.",
  },
  {
    id: 2,
    title: "Saving as You Shop",
    description:
    "Enjoy effortless savings as you shop, making financial growth a natural byproduct of your everyday spending habits."
  },
  {
    id: 3,
    title: "Early Returns, Intant Gratification",
    description:
    "Get returns on your savings even before making significant investments, ensuring your money works for you from the start."
  },
  {
    id: 4,
    title: "Interactive Investment Education",
    description:
    "Stay informed with our short, fun, and interactive informational videos, demystifying investment concepts for an engaging learning experience."
  },
  {
    id: 5,
    title: "Daily Investment News Alerts",
    description:
"Stay updated on market trends with daily investment news tailored to your favorite securities, empowering you to make informed decisions."
  },
  {
    id: 6,
    title: "Invest With Spare Change",
    description:
    "Start investing with your spare change now, breaking the misconception that you need to wait until a certain age. As a student or at any stage of life, build a substantial portfolio for financial freedom by the time you reach 40."
  },
];

// service page data
export const serviceData = [
  {
    id: 1,
    title: "Swipe & Invest",
    description:
    "Invest effortlessly with the swipe of your card, seamlessly integrating investing into your daily transactions."
  },
  {
    id: 2,
    title: "Savings As You Shop",
    description:
    "Enjoy effortless savings as you shop, making financial growth a natural byproduct of your everyday spending habits."
  },
  {
    id: 3,
    title: "Early Returns, Intant Gratification",
    description:
    "Get returns on your savings even before making significant investments, ensuring your money works for you from the start."
  },
];

interface footerLinks {
  title: string;
  links: { title: string; url: string | object }[];
}

// Footer links
export const footerLinks = [
  // About
  {
    title: "About",
    links: [
      { title: "About Us", url: "/about" },
      { title: "Our Services", url: "/services" },
      { title: "How It Works", url: "/" },
      { title: "Become a Partner", url: "/" },
    ],
  },
  // Community
  {
    title: "Community",
    links: [
      { title: "Token", url: "/" },
      { title: "Discussion", url: "/" },
      { title: "Voting", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Help Center", url: "/" },
    ],
  },
];

// interface IFooterLinks {
//   title: string;
//   links: {
//     title: string;
//     url: UrlObject;
//   }[];
// }[];

// //footer links
// export const footerLinks: IFooterLinks = [
//   //about
//   {
//     title: "About",
//     links: [
//       { title: "About Us", url: "/" },
//       { title: "Our Services", url: "/" },
//       { title: "How It Works", url: "/" },
//       { title: "Become a Partner ", url: "/" },
//     ],
//   },
//   //Community
//   {
//     title: "Community",
//     links: [
//       { title: "Token", url: "/" },
//       { title: "Discussion", url: "/" },
//       { title: "Voting", url: "/" },
//       { title: "Blog", url: "/" },
//       { title: "Help Center", url: "/" },
//     ],
//   },
// ];
interface IMenuItems {
  label: string;
  link: string;
  key: string;
}

export const menuItems: IMenuItems[] = [
  {
    label: "Home",
    link: "/",
    key: "home",
  },
  {
    label: "About",
    link: "/about",
    key: "about",
  },
  {
    label: "Services",
    link: "/services",
    key: "services",
  },
];
