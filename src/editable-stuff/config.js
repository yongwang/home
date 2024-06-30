// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Yong',
  middleName: '',
  lastName: 'Wang',
  message: ' Passionate about changing the world with technology. ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/yongwang',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/yong-wang-91136816/',
    },
    {
      image: 'fa-twitter',
      url: 'https://www.twitter.com/wangyongabx/',
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/yongwang.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/yongwang.png'),
  imageSize: 375,
  message:
    'Chief Architect at Airbox Systems, where he spearheads the development of innovative solutions tailored for the aviation, emergency and Policing sectors. With a robust background in technology architecture, Yong combines deep technical expertise with strategic foresight to drive advancements in operational technologies and systems integration. His work is pivotal in enhancing product functionality and optimizing user experiences, making significant impacts in how emergency professionals engage with critical data and systems. Based in the UK, Yong continues to push the boundaries of technology to deliver cutting-edge, reliable solutions that meet the complex demands of modern situational awareness operations.',
  resume:
    'https://docs.google.com/document/d/1E3ea3zpqAnRXjIGN7yrJltzM4jxtNRmBxr39otZQnsQ/edit?usp=sharing',
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'yongwang', //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/yongwang.png'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: require('../editable-stuff/yongwang.png'),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'Python', value: 90 },
    { name: 'SQL', value: 75 },
    { name: 'Data Structures', value: 85 },
    { name: 'C/C++', value: 65 },
    { name: 'JavaScript', value: 90 },
    { name: 'React', value: 65 },
    { name: 'HTML/CSS', value: 55 },
    { name: 'C#', value: 80 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 75 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 75 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "Wang to talk about Architecture, Cloud Transformation, or Software Development? Feel free to reach out. I'm always interested in discussing innovative ideas and projects.",
  email: 'wangyong@outlook.com',
};

//TODO update experiences
const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    {
      role: 'Software Engineer', // Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
