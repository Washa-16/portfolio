import { ABOUT_PATH, CONTACT_PATH, NOTEBOOK_PATH, STACK_PATH } from "..";
import {
  book,
  bookshelf,
  charactor,
  chatGPT,
  chrome,
  discord,
  duolingo,
  expo,
  figma,
  frameMotion,
  githug,
  mobile,
  nexjs,
  Notebook,
  pocketCasts,
  rayCast,
  reactHookForm,
  ReactIcon,
  reactQuery,
  sanity,
  spark,
  spotify,
  storyookIcon,
  subbiIcon,
  tailwindcss,
  teckStack,
  terminal,
  typescript,
  vercel,
  vsCode,
  website,
  wrap,
  zod,
  zustand,
} from "../images/ImageConstants";

export const SELECTED_WORK = [
  {
    id: 1,
    title: "Subbi –– The free subscriptions manager",
    description:
      "Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
    leftImage: subbiIcon,
    rightImage: mobile,
    buttonText: "Download App",
    imageClass: "w-[300px] md:w-[400px]",
  },
  {
    id: 2,
    title: "React Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
    leftImage: ReactIcon,
    rightImage: website,
    buttonText: "Visit Site",
    imageClass:
      "w-[320px] md:w-[400px] translate-x-10 -translate-y-6 origin-top-right rotate-[-6deg] origin-top-left rotate-[0deg]",
  },
  {
    id: 3,
    title: "Storybook Documentation",
    description:
      "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
    leftImage: storyookIcon,
    rightImage: terminal,
    buttonText: "Visit Site ",
    imageClass: "w-[360px] md:w-[420px] translate-x-10",
  },
  //   {
  //     id: 4,
  //     title: "React Docs",
  //     subtitle: "React documentation translation",
  //     image: "react.png",
  //     buttonText: "Visit Site",
  //   },
];

export const KNOW_ME = [
  {
    id: 1,
    title: "About me",
    subtitle: "Who I am and what I do",
    image: charactor,
    imageClass: "w-[200px] h-[200px]",
    path: ABOUT_PATH,
  },
  {
    id: 2,
    title: "Notebook",
    subtitle: "My thoughts, insights, and reflections",
    image: Notebook,
    imageClass: "w-[250px]",
    path: NOTEBOOK_PATH,
  },
  {
    id: 3,
    title: "Bookshelf",
    subtitle: "Books and pieces of wisdom I’ve enjoyed reading",
    image: bookshelf,
    imageClass: "w-[300px] translate-y-7",
    path: NOTEBOOK_PATH,
  },
  {
    id: 4,
    title: "Tech Stack",
    subtitle: "The dev tools, apps, devices, and games I use and play.",
    image: teckStack,
    imageClass: "w-[260px] translate-y-7",
    path: STACK_PATH,
  },
];

export const ABOUT_PAGE_DATA = {
  hero: {
    title: "A little bit about me",
    subtitle: "Who I am and what I do.",
    //shapeImage: aboutHeroShape,
  },

  sections: [
    {
      id: 1,
      heading: "WHO I AM",
      content:
        "I’m Eihab [Pronounced 'Ee-haab'] a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Morocco.",
    },
    {
      id: 2,
      heading: "WHAT I DO",
      content:
        "With two years of invaluable experience in my role at Harmony Technology — a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice. It was an incredibly rewarding experience to develop applications that directly impact the lives of Moroccan citizens.",
    },
    {
      id: 3,
      heading: "WHAT I DID",
      content:
        "Before delving into the realm of front-end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles. It enables me to seamlessly blend functionality and visual appeal in every project I undertake.",
    },
  ],

  footerText: {
    description:
      "Feel free to reach out via email, or follow me on Twitter. Want to see where I’ve worked? Check out my Resume, or connect with me on LinkedIn.",
    closing: "Let’s build something great.",
    //signature: signImage,
  },

  contact: {
    buttonText: "Get in touch",
    buttonPath: CONTACT_PATH,
  },
};

export const TECK_STACK = {
  dev_design: [
    {
      id: 1,
      icon: figma,
      title: "Figma",
      tag: "Design",
    },
    {
      id: 2,
      icon: nexjs,
      title: "Next,js",
      tag: "Web Framework",
    },
    {
      id: 3,
      icon: tailwindcss,
      title: "TailwindCSS",
      tag: "CSS",
    },
    {
      id: 4,
      icon: githug,
      title: "GitHub",
      tag: "Verson Control",
    },
    {
      id: 5,
      icon: wrap,
      title: "Wrap",
      tag: "Terminal",
    },
    {
      id: 6,
      icon: vercel,
      title: "Vercel",
      tag: "Deployment",
    },
    {
      id: 7,
      icon: vsCode,
      title: "VSCode",
      tag: "Editor",
    },
    {
      id: 8,
      icon: frameMotion,
      title: "Frame Motion",
      tag: "Animation",
    },
    {
      id: 9,
      icon: typescript,
      title: "TypeScript",
      tag: "Language",
    },
    {
      id: 10,
      icon: reactHookForm,
      title: "React Hook Form",
      tag: "Library",
    },
    {
      id: 11,
      icon: reactQuery,
      title: "React Query",
      tag: "Server State",
    },
    {
      id: 12,
      icon: zustand,
      title: "Zustand",
      tag: "Global State",
    },
    {
      id: 13,
      icon: zod,
      title: "Zod",
      tag: "Validation",
    },
    {
      id: 14,
      icon: expo,
      title: "Expo",
      tag: "Mobile Framework",
    },
    {
      id: 15,
      icon: sanity,
      title: "Sanity",
      tag: "Headless CMS",
    },
  ],
  apps: [
    {
      id: 1,
      icon: chatGPT,
      title: "ChatGPT",
      tag: "Productivity",
    },
    {
      id: 2,
      icon: chrome,
      title: "Chrome",
      tag: "Browser",
    },
    {
      id: 3,
      icon: discord,
      title: "Discord",
      tag: "Communication",
    },
    {
      id: 4,
      icon: duolingo,
      title: "Duolingo",
      tag: "Education",
    },
    {
      id: 5,
      icon: pocketCasts,
      title: "pocket Cast",
      tag: "Podcast",
    },
    {
      id: 6,
      icon: rayCast,
      title: "Ray Cast",
      tag: "Launcher",
    },
    {
      id: 7,
      icon: spark,
      title: "Spark",
      tag: "Email",
    },
    {
      id: 8,
      icon: spotify,
      title: "Spotify",
      tag: "Music",
    },
    {
      id: 9,
      icon: book,
      title: "Books",
      tag: "Education",
    },
  ],
};
