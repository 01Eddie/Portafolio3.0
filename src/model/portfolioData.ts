import { LinkType, PortfolioType } from './portfolioTypes'

export const links: LinkType[] = [
  {
    link: 'linkedin',
    url : 'https://www.linkedin.com/in/eddiehg/'
  },
  {
    link: 'cv',
    url : 'https://docs.google.com/document/d/1Z8eP1y-kROkic0uYo6oPZCddu-FdspaoFy_0r_tgM-w/edit?usp=sharing'
  },
  {
    link: 'github',
    url : 'https://github.com/01Eddie'
  },
  {
    link: 'medium',
    url : 'https://eddiejesus1197.medium.com/'
  }
]

export const portfolioTextsEnglish: PortfolioType[] = [
  {
    category: 'header',
    id      : 0,
    name    : 'Eddie HG'
  },
  {
    category: 'options',
    id      : 1,
    name    : 'Home'
  },
  {
    category: 'options',
    id      : 2,
    name    : 'About me'
  },
  {
    category: 'options',
    id      : 3,
    name    : 'Resume'
  },
  // {
  //   category: 'options',
  //   id      : 4,
  //   name    : 'Testimonial'
  // },
  {
    category: 'options',
    id      : 5,
    name    : 'Contact me'
  },
  {
    category  : 'headerContent',
    id        : 6,
    knows     : 'Know of building applications with front and back end operations.',
    name      : "Hello I'm Eddie",
    technology: [ 'React js', 'typescript', 'node js', 'orm', 'golang', 'echo', 'c', 'scrum' ]
  },
  {
    category  : 'aboutMeContent',
    content   : 'Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.',
    highlights: [
      {
        idH : 0,
        name: 'Full Stack web and mobile development'
      },
      {
        idH : 1,
        name: 'Interactive Front End as per the design'
      },
      {
        idH : 2,
        name: 'React and React Native'
      },
      {
        idH : 3,
        name: 'Redux for State Management'
      },
      {
        idH : 4,
        name: 'Managing database'
      },
      {
        idH : 5,
        name: 'Building REST API'
      }
    ],
    id      : 7,
    optSgt  : 'Here are a Few Highlights:',
    subtitle: 'Why Choose me?',
    title   : 'About me'
  },
  {
    category: 'resumeContent',
    details : [
      {
        detail: [
          {
            idDD : 0,
            name : 'UNIVERSITY TECHNOLOGY OF PERU',
            named: 'System and Informatics Engineering',
            time : '2018-2022'
          },
          {
            idDD : 1,
            name : 'Holberton School',
            named: 'Bootcamp of Software Engineer',
            time : '2019-2021'
          },
          {
            idDD : 2,
            name : 'UNI',
            named: 'Course PHP',
            time : '2017'
          }
        ],
        idD : 0,
        name: 'EDUCATION'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Rimac Seguros',
            named: 'FrontEnd Engineer',
            time : '2023'
          },
          {
            idDD : 1,
            name : 'So Market',
            named: 'FullStack Engineer',
            time : '2023'
          },
          {
            idDD : 2,
            name : 'Referwell',
            named: 'FullStack Engineer',
            time : '2021-2023'
          },
          {
            idDD : 3,
            name : 'CoreCapital',
            named: 'BackEnd Engineer',
            time : '2021'
          },
          {
            idDD : 4,
            name : 'HackSpace',
            named: 'Facilitator of web development',
            time : '2020'
          },
          {
            idDD : 5,
            name : 'Minister Interior',
            named: 'Analitycs',
            time : '2019-2020'
          },
          {
            idDD : 6,
            name : 'Indeci',
            named: 'Volunteering per visit of Papa Francisco',
            time : '2018'
          }
        ],
        idD : 1,
        name: 'WORK HISTORY'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'JavaScript',
            named: 'Intermediate',
            time : '4 years of experience'
          },
          {
            idDD : 1,
            name : 'Typescript',
            named: 'Intermediate',
            time : '4 years of experience'
          },
          {
            idDD : 2,
            name : 'React',
            named: 'Intermediate',
            time : '4 years of experience'
          },
          {
            idDD : 3,
            name : 'Node js',
            named: 'Intermediate',
            time : '2 years of experience'
          },
          {
            idDD : 4,
            name : 'Golang',
            named: 'Intermediate',
            time : '2 years of experience'
          },
          {
            idDD : 5,
            name : 'Angular',
            named: 'Intermedio',
            time : '1 year of experience'
          },
          {
            idDD : 6,
            name : 'Python',
            named: 'Intermediate',
            time : '1 year of experience'
          },
          {
            idDD : 7,
            name : 'Docker',
            named: 'Intermediate',
            time : '2 years of experience'
          },
          {
            idDD : 8,
            name : 'Material UI',
            named: 'Intermediate',
            time : '3 years of experience'
          },
          {
            idDD : 9,
            name : 'Sass Css',
            named: 'Intermediate',
            time : '2 years of experience'
          }
        ],
        idD : 2,
        name: 'PROGRAMMING SKILLS'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Emulator Terminal',
            named: 'C',
            time : 'https://github.com/01Eddie/simple_shell.git'
          },
          {
            idDD : 1,
            name : 'AirBnb clone',
            named: 'python, html, css',
            time : 'https://github.com/01Eddie/AirBnB_clone_v3.git'
          },
          {
            idDD : 2,
            name : 'NotiNews',
            named: 'php, html, css',
            time : 'https://github.com/01Eddie/PHP_Notinews.git'
          },
          {
            idDD : 3,
            name : 'Checker challenge(Bot discord)',
            named: 'python',
            time : 'https://github.com/AlexisCORAN/Checker_Challenge'
          }

        ],
        idD : 3,
        name: 'PROJECTS'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Interest',
            named: 'Am a web developer with a passion for sports. Apart from hobnobbing, I love playing soccer, running and cycling. These sports provide me with a form of exercise, fun and competition. They also help me maintain a healthy and active lifestyle.',
            time : ''
          }
        ],
        idD : 4,
        name: 'INTEREST'
      }
    ],
    id      : 8,
    subtitle: 'My formal Bio Details',
    title   : 'Resume'
  },
  // {
  //   category: 'testimonialContent',
  //   comments: [
  //     {
  //       comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  //       idC     : 0,
  //       subTitle: 'CEO',
  //       title   : 'Jhon Smith'
  //     },
  //     {
  //       comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  //       idC     : 1,
  //       subTitle: 'CEO',
  //       title   : 'Jhohanna Smith'
  //     },
  //     {
  //       comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  //       idC     : 2,
  //       subTitle: 'Bnaker',
  //       title   : 'Mikel'
  //     }
  //   ],
  //   id      : 9,
  //   subtitle: 'What My Client Say About Me',
  //   title   : 'Testimonial'
  // },
  {
    category: 'contactMe',
    content : 'Send Your Email Here!',
    form    : {
      email  : 'Email',
      message: 'Message',
      name   : 'Name',
      nameBtn: 'Send'
    },
    id      : 8,
    name    : 'Get In Touch',
    subtitle: 'Lets Keep In Touch',
    title   : 'Contact me'

  },
  {
    category: 'footerMe',
    content : '¡Get to know me more!',
    id      : 9,
    knows   : 'Anywhere',
    name    : 'Get in touch',
    subtitle: 'Get to know me more',
    title   : 'More information'
  },
  {
    category: 'nameBtns',
    id      : 10,
    name    : 'Contact me',
    title   : 'Look at my cv'
  }
]

export const portfolioTextsSpanish: PortfolioType[] = [
  {
    category: 'header',
    id      : 0,
    name    : 'Eddie HG'
  },
  {
    category: 'options',
    id      : 1,
    name    : 'Inicio'
  },
  {
    category: 'options',
    id      : 2,
    name    : 'Acerca de mi'
  },
  {
    category: 'options',
    id      : 3,
    name    : 'CV'
  },
  // {
  //   category: 'options',
  //   id      : 4,
  //   name    : 'Comentarios'
  // },
  {
    category: 'options',
    id      : 5,
    name    : 'Contactame'
  },
  {
    category  : 'headerContent',
    id        : 6,
    knows     : 'Conocimiento de la creación de aplicaciones web con operaciones de front-end y back-end.',
    name      : 'Hola Soy Eddie',
    technology: [ 'React js', 'typescript', 'node js', 'orm', 'golang', 'echo', 'c', 'scrum' ]
  },
  {
    category  : 'aboutMeContent',
    content   : 'Desarrollador web con conocimiento de las tecnologias frontend y backend actuales, junto con una habilidad para crear aplicaciones con la máxima eficiencia. Profesional responsable, dinámico y creativo, con fácil adaptación y capacidad para trabajar en equipo, dispuesto a ser un activo para una organización.',
    highlights: [
      {
        idH : 0,
        name: 'Full Stack web'
      },
      {
        idH : 1,
        name: 'Front End interactivo según diseño.'
      },
      {
        idH : 2,
        name: 'React ts y Angular ts'
      },
      {
        idH : 3,
        name: 'Redux'
      },
      {
        idH : 4,
        name: 'Administrar base de datos'
      },
      {
        idH : 5,
        name: 'Construyendo API REST'
      }
    ],
    id      : 7,
    optSgt  : 'Aquí hay algunos puntos destacados:',
    subtitle: 'Porque elegirme a mi?',
    title   : 'Acerca de mi'
  },
  {
    category: 'resumeContent',
    details : [
      {
        detail: [
          {
            idDD : 0,
            name : 'UNIVERSIDAD TECNOLOGICA DEL PERU',
            named: 'Ingenieria de Sistemas e Informatica',
            time : '2018-2023'
          },
          {
            idDD : 1,
            name : 'Holberton School',
            named: 'Bootcamp de ingenieria de Software',
            time : '2019-2021'
          },
          {
            idDD : 2,
            name : 'UNI',
            named: 'Curso PHP',
            time : '2017'
          }
        ],
        idD : 0,
        name: 'EDUCACION'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Rimac Seguros',
            named: 'FrontEnd Engineer',
            time : '2023'
          },
          {
            idDD : 1,
            name : 'So Market',
            named: 'FullStack Engineer',
            time : '2023'
          },
          {
            idDD : 2,
            name : 'Referwell',
            named: 'FullStack Engineer',
            time : '2021-2023'
          },
          {
            idDD : 3,
            name : 'CoreCapital',
            named: 'BackEnd Engineer',
            time : '2021'
          },
          {
            idDD : 4,
            name : 'HackSpace',
            named: 'Facilitador de desarrollo web',
            time : '2020'
          },
          {
            idDD : 5,
            name : 'Ministerio del Interior',
            named: 'Transcriptor',
            time : '2019-2020'
          },
          {
            idDD : 6,
            name : 'Indeci',
            named: 'Voluntariado por visita del Papa Francisco',
            time : '2018'
          }
        ],
        idD : 1,
        name: 'EXPERIENCIA LABORAL'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'JavaScript',
            named: 'Intermedio',
            time : '4 años de experiencia'
          },
          {
            idDD : 1,
            name : 'Typescript',
            named: 'Intermedio',
            time : '4 años de experiencia'
          },
          {
            idDD : 2,
            name : 'React',
            named: 'Intermedio',
            time : '4 años de experiencia'
          },
          {
            idDD : 3,
            name : 'Node js',
            named: 'Intermedio',
            time : '2 años de experiencia'
          },
          {
            idDD : 4,
            name : 'Golang',
            named: 'Intermedio',
            time : '2 años de experiencia'
          },
          {
            idDD : 5,
            name : 'Angular',
            named: 'Intermedio',
            time : '1 años de experiencia'
          },
          {
            idDD : 6,
            name : 'Python',
            named: 'Intermedio',
            time : '1 años de experiencia'
          },
          {
            idDD : 7,
            name : 'Docker',
            named: 'Intermedio',
            time : '2 años de experiencia'
          },
          {
            idDD : 8,
            name : 'Material UI',
            named: 'Intermedio',
            time : '3 años de experiencia'
          },
          {
            idDD : 9,
            name : 'Sass Css',
            named: 'Intermedio',
            time : '2 años de experiencia'
          }
        ],
        idD : 2,
        name: 'Habilidades Tecnicas'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Emulador Terminal',
            named: 'C',
            time : 'https://github.com/01Eddie/simple_shell.git'
          },
          {
            idDD : 1,
            name : 'AirBnb clone',
            named: 'python, html, css',
            time : 'https://github.com/01Eddie/AirBnB_clone_v3.git'
          },
          {
            idDD : 2,
            name : 'NotiNews',
            named: 'php, html, css',
            time : 'https://github.com/01Eddie/PHP_Notinews.git'
          },
          {
            idDD : 3,
            name : 'Checker challenge(Bot para discord)',
            named: 'python',
            time : 'https://github.com/AlexisCORAN/Checker_Challenge'
          }
        ],
        idD : 3,
        name: 'PROYECTOS'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Intereses',
            named: 'Soy un desarrollador web con una pasión por los deportes. Aparte de codear, me encanta jugar al fútbol, correr y andar en bicicleta. Estos deportes me proporcionan una forma de ejercicio, diversión y competencia. También me ayudan a mantener un estilo de vida saludable y activo.',
            time : ''
          }
        ],
        idD : 4,
        name: 'INTERESES'
      }
    ],
    id      : 8,
    subtitle: 'Detalles de mi biografía formal',
    title   : 'CV'
  },
  // {
  //   category: 'testimonialContent',
  //   comments: [
  //     {
  //       comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  //       idC     : 0,
  //       subTitle: 'CEO',
  //       title   : 'Jhon Smith'
  //     },
  //     {
  //       comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  //       idC     : 1,
  //       subTitle: 'CEO',
  //       title   : 'Jhohanna Smith'
  //     },
  //     {
  //       comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  //       idC     : 2,
  //       subTitle: 'Bnaker',
  //       title   : 'Mikel'
  //     }
  //   ],
  //   id      : 9,
  //   subtitle: 'Lo que mi cliente dice sobre mí',
  //   title   : 'Comentarios'
  // },
  {
    category: 'contactMe',
    content : '¡Envíe su correo electrónico aquí!',
    form    : {
      email  : 'Email',
      message: 'Mensaje',
      name   : 'Nombres',
      nameBtn: 'Enviar'
    },
    id      : 8,
    name    : 'Ponte en contacto',
    subtitle: 'Mantengámonos en contacto',
    title   : 'Contactame'
  },
  {
    category: 'footerMe',
    content : '¡Conoceme mas!',
    id      : 9,
    knows   : 'Encuentranos en',
    name    : 'Ponte en contacto',
    subtitle: 'Conoceme mas',
    title   : 'Mas informacion'
  },
  {
    category: 'nameBtns',
    id      : 10,
    name    : 'Contactame',
    title   : 'Mira mi cv'
  }
]
