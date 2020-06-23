const image = '/image.png';


const icons = [
  '/img/asana.svg',
  '/img/bitbucket.svg',
  '/img/bootstrap.svg',
  '/img/css3.svg',
  '/img/express.svg',
  '/img/github.svg',
  '/img/html5.svg',
  '/img/javascript.svg',
  '/img/jquery.svg',
  '/img/mongodb.svg',
  '/img/MySQL.svg',
  '/img/nodejs.svg',
  '/img/PHP.svg',
  '/img/postman.svg',
  '/img/puppeteer.svg',
  '/img/react.svg',
  '/img/sass.svg',
  '/img/vuejs.svg',
  '/img/zeplin.svg'

]


const Aside = [{
    id: 1,
    title: "Professional Profile",
    description: "Full Stack Web Developer, my passion for programming began two years ago, since then I have been gaining new experience in this field every day. My favorite language is Javascript and everything associated with it.",
  },
  {
    id: 2,
    title: "Contact Details",
    city: "Barcelona",
    phone: "+34 602-410-491",
    email: "poninski.w@gmail.com",
    portfolio:"https://poninski.herokuapp.com",
    linkedIn: "https://www.linkedin.com/in/poninski",
    github: "https://github.com/Wojtec",

  },
  {
    id: 3,
    title: "Languages",
    polish: "Native",
    spanish: "Advanced",
    english: "Advanced",
  },
  {
    id: 4,
    title: "Tech Skills",
    skills: [
      "HTML5",
      "CSS3",
      "SASS",
      "JAVASCRIPT",
      "JQUERY",
      "BOOTSTRAP",
      "VUE.JS",
      "REACT",
      "PUPPETEER",
      "NODE.JS",
      "EXPRESS.JS",
      "MONGODB",
      "MySQL",
      "PHP",
      "RESTful API",
      "GIT/GITHUB",
      "BITBUCKET",
      "AGILE ENVIRONMENT",
      "MVC",
      "SCRUM",
      "ASANA",
      "ZEPLIN"
    ],
  },
];

const Bside = [{
    id: 5,
    title: "Work Experience",
    name: "Full Stack Web Developer",
    school: "Assembler School in Barcelona.",
    date: "07/10/2019",
    content: "Bootcamp with 9-months intensive programing based of AGILE methodology building real world web applications based on HTML5, CSS3, Sass, JavaScript, Node.js, Express.js, Puppeteer, Vue.js, React, PHP, MySQL, MongoDB, RESTful APIs, MVC pattern and Git/GitHub.",
    projects: {
      title_project: "Projects",
      property_app: "The real estate application, user can filter posts, publish posts with images, edit posts, check property on the map, send messages, login, register, update avatar and add post to favorites. Created with back-end: Node.js, Express.js, JWT, MongoDB, Node-Geocoder, Cloudinary, ESlint, Swagger.Front-end: React, mapQuest.",
      scraping_data: "Scraping application created for automatically generate and store data in database with images in MongoDB and cloud service. In this application I was used Node.js, Puppeteer, MongoDB and Cloudinary.",
      music_library: "Music library application consume iTunes API. Users can search songs by name, artists, albums and videoclips, filter by country, by explicit content, and choice result limits. Created with JavaScript, jQuery, AJAX, JSON.",
      custom_blog: "Blog application using PHP, MySQL and MVC pattern.Users can create, edit, update and publish articles, can login and logout, search for a post by title and contents.",
      portfolio: "This portfolio application created with React. User can download my curriculum vitae in pdf document."
    }

  },
  {
    id: 6,
    title: "Education",
    school: {
      title: "Full Stack Web Developer",
      name: "Assembler School",
      description: "7 October 2019 - 12 June 2020 (9 months Bootcamp, more than 1300h).",
    }
  },
  {
    id: 7,
    title: "Soft Skills",
    skills: [
      "Ambition",
      "Focus",
      "Empathy",
      "Enthusiasm",
      "Optimism"
    ]
  }
]

export default {
  Aside,
  Bside,
  image,
  icons
};