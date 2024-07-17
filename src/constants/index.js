import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developement",
    icon: web,
  },
  {
    title: "Frontend Developement",
    icon: mobile,
  },
  {
    title: "Backend Developement",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Xotiv Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2022 - Now",
    points: [
      "Led the development of various web applications using React, Redux Toolkit, Node.js, Express.js and three.js, with databases including MySQL, Postgres, and MongoDB",
      "Led multi-disciplinary 11 developers team to design, develop, and launch online e-commerce store; prioritized and resolved 45+ new features and bug fixes",
      "Spearheaded a cross-functional team (Technology, Business Development, Management) to implement new ERP system; successful adoption accelerated revenue growth by 25% in 1 year",
      "Developed strategic insights across 10 developers team, including front-end and back-end developers, revenue, and operations, departments",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "YAV Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - May 2022",
    points: [
      "Led architecture, design, and development of 30+ new features using React.js, Node.js and MySQL.",
      "Implemented RESTful APIs and integrated various third-party APIs such as Google Maps, Map box and payment gateways.",
      "Used various ideas from distributed computing, large-scale design, real-time data processing, data storage, ML, and AI to solve challenging dataset problems",
      "Worked closely with clients to understand their business requirements and translate them into technical specifications. ",
      "Designed and wrote the front-end of our eCommerce application using ReactJS with 900 reusable components"
    ],
  },
  {
    title: "🚀 Features Implemented",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Login/Signup User Account",
      "Update Profile/Reset Password",
      "Cart Add/Remove Items | Update Quantities",
      "Save For Later Add/Remove Items",
      "Wishlist Add/Remove Items",
      "Products Pagination (Default 12 Products Per Page)",
      "Product Search/Product Filters Based on Category / Ratings | Price Range",
      "My Orders (With All Filters) / Order Details of All Ordered Item",
      "Stock Management: Decrease stock of product when shipped",
      "Admin: Dashboard access to only admin roles",
      "Admin: Update Order Status | Delete Order",
      "Admin: List Review of Product | Delete Review",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Akme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jebelz",
    description:
      "An online platform dedicated to coffee enthusiasts, offering a wide range of coffee products and accessories. From premium coffee beans and high-quality coffee machines to grinders and brewing tools, our platform provides everything you need to enjoy the perfect cup of coffee. Whether you're a home barista or a café owner, explore our curated selection to enhance your coffee experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://in.jebelz.com/in",
  },
  {
    name: "E-Commerce WebApp",
    description:
      "Your ultimate online shopping destination, offering a vast selection of products across various categories including electronics, fashion, home essentials, travel accessories, appliances, furniture, beauty products, toys, groceries, and more. With unbeatable deals and discounts, our platform provides a convenient and enjoyable shopping experience, ensuring you find everything you need in one place, secure checkout process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rituraj1949/Full-Stack-MERN-E-Commerce",
  },
  {
    name: "Task Manager",
    description:
      "Discover the future of business automation with Task Tracker! Our innovative, mobile-first solution powered by AI is designed to digitize and streamline every aspect of your business operations. With Task Tracker, coordinating teams, tracking tasks, and monitoring performance has never been easier, Task Tracker's user-friendly interface allows you to say goodbye to complexity and hello to efficient business growth",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rituraj1949/MERN-Stack-Task-Manager",
  },
];

export { services, technologies, experiences, testimonials, projects };
