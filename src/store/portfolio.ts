import { proxyWithComputed } from 'valtio/utils'
import memoize from 'proxy-memoize'
import axios, { AxiosError } from 'axios'
import { LinkType, PortfolioType, SendEmailType } from '../model/portfolioTypes'
import { links, portfolioTextsEnglish, portfolioTextsSpanish } from '../model/portfolioData'
import { NonFunctionProperties } from '../types'
import { Post } from '../utils/Request'

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
const sendEmailInit: SendEmailType = {
  mailField: '',
  message  : '',
  nameField: ''
}

class header {
  portfolio: PortfolioType[] = []
  lang: boolean = true
  links: LinkType[] = []
  fieldsSend: SendEmailType = sendEmailInit

  setChangeLang() {
    this.lang = !this.lang
    this.setPortfolio()
  }

  setFieldsSend<K extends keyof NonFunctionProperties<SendEmailType>>(key: K, value: NonFunctionProperties<SendEmailType>[K]) {
    (this.fieldsSend as NonFunctionProperties<SendEmailType>)[key] = value
  }

  clearDataField() {
    this.fieldsSend.nameField = ''
    this.fieldsSend.message = ''
    this.fieldsSend.mailField = ''
  }

  setPortfolio() {
    this.lang ? this.portfolio = portfolioTextsSpanish :
      this.portfolio = portfolioTextsEnglish
  }

  setLinks() {
    this.links = links
  }

  async postDataSend() {
    try {
      const payload = {
        mailField: this.fieldsSend.mailField,
        message  : this.fieldsSend.message,
        nameField: this.fieldsSend.nameField
      }
      const resp = await Post('https://smartforms.dev/submit/61700c967a195017922d97ea', payload)

      return resp
    } catch (error) {
      if(axios.isAxiosError(error)) {
        const { message } = (error as AxiosError).response?.data as Record<string, string>

        return {
          error  : message,
          success: false
        }
      }

      return {
        error  : (error as Error).message,
        success: false
      }
    }
  }
}

export const headerStore = proxyWithComputed(new header(), {
  aboutMe      : memoize(({ portfolio }) => portfolio.find(filter => filter.category.includes('aboutMeContent'))),
  contact      : memoize(({ portfolio }) => portfolio.find(filter => filter.category.includes('contactMe'))),
  disabledBtn  : memoize(({ fieldsSend: { nameField, message } }) => nameField && message),
  footer       : memoize(({ portfolio }) => portfolio.find(filter => filter.category.includes('footerMe'))),
  headerContent: memoize(({ portfolio }) => (
    portfolio.find(filter => filter.category.includes('headerContent')))
  ),
  isEmailInvalid: memoize(({ fieldsSend: { mailField } }) =>
    Boolean(mailField?.length === 0 || mailField?.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]/i))
  ),
  nameBtns   : memoize(({ portfolio }) => portfolio.find(names => names.category.includes('nameBtns'))),
  resume     : memoize(({ portfolio }) => portfolio.find(filter => filter.category.includes('resumeContent'))),
  testimonial: memoize(({ portfolio }) => portfolio.find(filter => filter.category.includes('testimonialContent')))
})
