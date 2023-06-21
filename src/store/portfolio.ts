import { proxyWithComputed } from 'valtio/utils'
import memoize from 'proxy-memoize'

const portfolioTextsEnglish: PortfolioType[] = [
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
  {
    category: 'options',
    id      : 4,
    name    : 'Testimonial'
  },
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
    technology: [ 'React/React Native', 'Enthusiastic dev' ]
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
            named: 'bachelor of System Engineering',
            time : '2018-2022'
          }
        ],
        idD : 0,
        name: 'EDUCATION'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Minister Interior',
            named: 'Analitycs',
            time : '2019-2020'
          }
        ],
        idD : 1,
        name: 'WORK HISTORY'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Programming skills',
            named: 'skills',
            time : '2019-2020'
          }
        ],
        idD : 2,
        name: 'PROGRAMMING SKILLS'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Projects',
            named: 'js',
            time : '2019-2022'
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
            named: 'Sports',
            time : '2012-2020'
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
  {
    category: 'testimonialContent',
    comments: [
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 0,
        subTitle: 'CEO',
        title   : 'Jhon Smith'
      },
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 1,
        subTitle: 'CEO',
        title   : 'Jhohanna Smith'
      },
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 2,
        subTitle: 'Bnaker',
        title   : 'Mikel'
      },
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 3,
        subTitle: 'CEO',
        title   : 'Jhon Smith'
      },
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 4,
        subTitle: 'CEO',
        title   : 'Jhohanna Smith'
      },
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 5,
        subTitle: 'Bnaker',
        title   : 'Mikel'
      }
    ],
    id      : 9,
    subtitle: 'What My Client Say About Me',
    title   : 'Testimonial'
  }
]

const portfolioTextsSpanish: PortfolioType[] = [
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
  {
    category: 'options',
    id      : 4,
    name    : 'Comentarios'
  },
  {
    category: 'options',
    id      : 5,
    name    : 'Contactame'
  },
  {
    category  : 'headerContent',
    id        : 6,
    knows     : 'Conocimiento de la creación de aplicaciones con operaciones de front-end y back-end.',
    name      : 'Hola Soy Eddie',
    technology: [ 'React/React Native', 'Enthusiastic dev' ]
  },
  {
    category  : 'aboutMeContent',
    content   : 'Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.',
    highlights: [
      {
        idH : 0,
        name: 'Full Stack web y desarrollo movil'
      },
      {
        idH : 1,
        name: 'Interactive Front End as per the design'
      },
      {
        idH : 2,
        name: 'React y React Native'
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
            named: 'bachelor of System Engineering',
            time : '2018-2022'
          }
        ],
        idD : 0,
        name: 'EDUCACION'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Ministerio del Interior',
            named: 'Transcriptor',
            time : '2019-2020'
          }
        ],
        idD : 1,
        name: 'WORK HISTORY'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Programming skills',
            named: 'skills',
            time : '2019-2020'
          }
        ],
        idD : 2,
        name: 'PROGRAMMING SKILLS'
      },
      {
        detail: [
          {
            idDD : 0,
            name : 'Projects',
            named: 'js',
            time : '2019-2022'
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
            named: 'Deportes',
            time : '2012-2020'
          }
        ],
        idD : 4,
        name: 'INTERESES'
      }
    ],
    id      : 8,
    subtitle: 'My formal Bio Details',
    title   : 'CV'
  },
  {
    category: 'testimonialContent',
    comments: [
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 0,
        subTitle: 'CEO',
        title   : 'Jhon Smith'
      },
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 1,
        subTitle: 'CEO',
        title   : 'Jhohanna Smith'
      },
      {
        comment : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        idC     : 2,
        subTitle: 'Bnaker',
        title   : 'Mikel'
      }
    ],
    id      : 9,
    subtitle: 'Lo que mi cliente dice sobre mí',
    title   : 'Comentarios'
  }
]

// const language = [
//   {
//     en: [ ...portfolioTextsEnglish ],
//     es: [ ...portfolioTextsSpanish ]
//   }
// ]

// interface LanguageType {
//   en: PortfolioType[]
//   es: PortfolioType[]
// }

interface TestimonialType {
  comment: string,
  idC: number,
  subTitle: string,
  title: string
}

interface AboutMeType {
  idH: number,
  name: string
}

interface ResumeType {
  idD: number,
  name: string,
  detail: ResumeDetailType[]
}

interface ResumeDetailType {
  idDD: number,
  name: string,
  named: string,
  time: string
}

interface PortfolioType {
  category: string
  id: number
  name?: string
  knows?: string
  subtitle?: string
  content?: string
  optSgt?: string
  title?: string
  technology?: string[]
  highlights?: AboutMeType[]
  details?: ResumeType[]
  comments?: TestimonialType[]
  en?: string
}

class header {
  portfolio: PortfolioType[] = []
  lang: boolean = true

  setChangeLang() {
    this.lang = !this.lang
    this.setPortfolio()
  }

  setPortfolio() {
    this.lang ? this.portfolio = portfolioTextsSpanish :
      this.portfolio = portfolioTextsEnglish
  }
}

export const headerStore = proxyWithComputed(new header(), {
  aboutMe      : memoize(({ portfolio }) => portfolio.find(filter => filter.category.includes('aboutMeContent'))),
  headerContent: memoize(({ portfolio }) => (
    portfolio.find(filter => filter.category.includes('headerContent')))
  ),
  resume     : memoize(({ portfolio }) => portfolio.find(filter => filter.category.includes('resumeContent'))),
  testimonial: memoize(({ portfolio }) => portfolio.find(filter => filter.category.includes('testimonialContent')))
})
