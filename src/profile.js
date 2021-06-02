// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if true, animation plays only once when element comes on screen
    once: false,
  };
  // Change your display name on tha landing display
  const header = {
    name: "Venu Madhvav Goud Vannela",
  };
  const background = {
    // Options: Snow or Particle
    type: "Snow",
  };
  // Write a para about yourself here
  // To update your image, go to './styles/images.css'
  const section2title = "About Me";
  const about = {
    paragraph:
      "An enthusiastic IT aspirant currently pursuing Masters in Sciences from the prestigious IIITH. I am a confident person who always tries to be unique among all and a leader, who guides people towards their goals. I am flexible to work in any given environment possessing extraordinary interpersonal skills. Needless to mention, the creativity in me always challenges me to present given tasks in different styles. Besides this, I always search for new things to add glitter to my life. ",
  };
  // Edit your skill and the percentage you know about it
  // To Add a skill, copy any one below and paste it after the last comma
  const skillsBar = [
    {
      name: "HTML5",
      faClass: "fab fa-html5",
    },
    {
      name: "CSS3",
      faClass: "fab fa-css3",
    },
    {
      name: "Javascript",
      faClass: "fab fa-js",
    },
    {
      name: "SASS",
      faClass: "fab fa-sass",
    },
    {
      name: "Node",
      faClass: "fab fa-node",
    },
    {
      name: "Python",
      faClass: "fab fa-python",
    },
    {
      name: "Java",
      faClass: "fab fa-java",
    },
   
    {
      name: "Database",
      faClass: "fas fa-database",
    },
   
  ];
  // Edit your projects, its name, your skills used to make it, and the url.
  // You can omit freely anything if you dont have it
  // To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
  const section3Title = "Past Projects";
  const projects = [
    {
      // Add image in './styles/images.css' in #project1
      id: "project1",
      name: "We-Mail",
      skills: ["HTML, Java, Javascript"],
      url: "",
    },
    {
      // Add image in './styles/images.css' in #project2
      id: "project2",
      name: "Banking Application",
      skills: ["Java"],
      url: "",
    },
    {
      // Add image in './styles/images.css' in #project3
      id: "project3",
      name: "Hang-Man",
      skills: ["HTML, CSS, Python"],
      url: "",
    },
    
   
  ];
  // Edit your Miscellaneous Activities, its name and the url.
  // You can omit freely anything if you dont have it
  // To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
  const section4Title = "VAR_Kart Ecommerce Project";
  const miscellaneous = [
    {
      // Add image in './styles/images.css' in #misc1
      id: "misc1",
      name: "Sprint 1",
      paragraph:
      "An enthusiastic IT aspirant currently pursuing Masters in Sciences from the prestigious IIITH.",
      description: "abcd",
      url: "",
    },
    {
      // Add image in './styles/images.css' in #misc2
      id: "misc2",
      name: "Sprint 2",
      url: "",
    },
    {
      // Add image in './styles/images.css' in #misc3
      id: "misc3",
      name: "Sprint 3",
      url: "",
    },
  ];
  // Contact form text, and Jotforms link
  // To get your own jotform link, go to https://www.jotform.com/
  // If you hacve the link already, paste it in the contactUrl below
  const section5Title = "Get in Touch";
  const contact = {
    pitch:
      " ",
    copyright: "Venu Vannela",
    contactUrl: "",
  };
  // Paste your respective social media links. You can omit any if you dont have it
  // Upload your resume in your drive, get the shaareable link and paste it in the resume section
  const social = {
    github: "https://github.com/venuvannela",
    facebook: "https://www.facebook.com/venu.vannela.2/",
    linkedin: "https://www.linkedin.com/in/venu-madhav-vannela-/",
    instagram: "https://www.instagram.com/venu_vannela/",
  };
  // Dont change anything here
  export {
    animation,
    header,
    background,
    about,
    skillsBar,
    projects,
    miscellaneous,
    contact,
    social,
    section2title,
    section3Title,
    section4Title,
    section5Title,
  };
  