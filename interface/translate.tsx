export default interface translate {
  translate: {
    hero: {
      en: {
        pronoun: string
        title: string
        description: string
        button: string
      }
      es: {
        pronoun: string
        title: string
        description: string
        button: string
      }
    }

    jobs: {
      title: {
        en: string
        es: string
      }
      travel: {
        en: {
          description: string
        }
        es: {
          description: string
        }
      }
      airdrop: {
        en: {
          description: string
        }
        es: {
          description: string
        }
      }
      zink: {
        en: {
          description: string
        }
        es: {
          description: string
        }
      }
    }
  }
  language: string
}
