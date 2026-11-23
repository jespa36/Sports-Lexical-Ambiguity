/* The vader-sentiment package ships no type declarations. */

declare module 'vader-sentiment' {
  export const SentimentIntensityAnalyzer: {
    polarity_scores(text: string): {
      neg: number
      neu: number
      pos: number
      compound: number
    }
  }
}

declare module 'vader-sentiment/src/vader_lexicon.js' {
  export const lexicon: Record<string, number>
}
