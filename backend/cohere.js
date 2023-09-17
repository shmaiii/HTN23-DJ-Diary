import cohere from 'cohere-ai'
cohere.init('HT8OEn0M36OmOLYY76E3Y7mxxwsWTs50HJEl4rQF')

export const classifyJournal = async(input) => {
    const examples= [
        { "text": "The weather was nice", "label": "happy" },
        { "text": "I'm in a good mood", "label": "happy" },
        { "text": "Today went well", "label": "happy" },
        { "text": "I loved ", "label": "happy" },
        { "text": "I won", "label": "happy" },
        { "text": "I saw the most amazing thing", "label": "happy" },
        { "text": "I thought it was so funny", "label": "happy" },
        { "text": "It was a beautiful day", "label": "happy" },
        { "text": ":)", "label": "happy" },
        { "text": "I feel satisfied", "label": "happy" },
        { "text": "I was surprised", "label": "hyped" },
        { "text": "This is exciting", "label": "hyped" },
        { "text": "I feel like dancing", "label": "hyped" },
        { "text": "I can't believe it", "label": "hyped" },
        { "text": "Yay", "label": "hyped" },
        { "text": "I'm so lucky", "label": "hyped" },
        { "text": "Today was the best day", "label": "hyped" },
        { "text": "My dreams came true", "label": "hyped" },
        { "text": "I can't wait", "label": "hyped" },
        { "text": ":D", "label": "hyped" },
        { "text": "I'm amazed", "label": "hyped" },
        { "text": "I have a problem", "label": "sad" },
        { "text": "Things aren't working", "label": "sad" },
        { "text": "I want to cry", "label": "sad" },
        { "text": "I had the worst experience", "label": "sad" },
        { "text": "I ruined it", "label": "sad" },
        { "text": "I'm upset", "label": "sad" },
        { "text": "I miss", "label": "sad" },
        { "text": "This has been hard on me", "label": "sad" },
        { "text": "I feel dpressed", "label": "sad" },
        { "text": ":(", "label": "sad" },
        { "text": "I need space", "label": "sad" },
        { "text": "I need someone", "label": "sad" },
        { "text": "I'm anxious", "label": "sad" },
        { "text": "I'm hurt", "label": "sad" },
        { "text": "It's so frustrating", "label": "angry" },
        { "text": "I want to scream", "label": "angry" },
        { "text": "That was so annoying", "label": "angry" },
        { "text": "I'm so upset", "label": "angry" },
        { "text": "I failed", "label": "angry" },
        { "text": "I hate", "label": "angry" },
        { "text": ">:(", "label": "angry" },
        { "text": "My mind isn't working", "label": "angry" },
        { "text": "This is disappointing", "label": "angry" },
        { "text": "I was embarrassed", "label": "angry" },
        { "text": "I give up", "label": "angry" },
        { "text": "It sucks", "label": "angry" },
        { "text": "It's been a long day", "label": "tired" },
        { "text": "I don't want to do this anymore", "label": "tired" },
        { "text": "I want to sleep", "label": "tired" },
        { "text": "I can't wait to go to bed", "label": "tired" },
        { "text": "I'm nervous", "label": "tired" },
        { "text": "I need some time", "label": "tired" },
        { "text": "I need sleep", "label": "tired" },
        { "text": "There's a lot on my mind", "label": "tired" },
        { "text": "I'm bored", "label": "tired" },
        { "text": "This is overwhelming", "label": "tired" },
        { "text": "I was exhausted", "label": "tired" },
        { "text": "I'm sick", "label": "tired" },
        { "text": "Nothing much happened", "label": "neutral" },
        { "text": "The day went okay", "label": "neutral" },
        { "text": "I should have done something differently", "label": "neutral" },
        { "text": "Things used to be better", "label": "neutral" },
        { "text": "I had a weird dream", "label": "neutral" },
        { "text": "It was nice", "label": "neutral" },
        { "text": "Why did I", "label": "neutral" },
        { "text": ":|", "label": "neutral" },
        { "text": "I forgot", "label": "neutral" },
        { "text": "It's not that important", "label": "neutral" },
        { "text": "Things are going normally", "label": "neutral" }
      ]

      const response = await cohere.classify({
        inputs: [input],
        examples: examples
      })

      console.log(response)
      console.log(response.body.classifications[0]);

      return response.body.classifications[0];
}