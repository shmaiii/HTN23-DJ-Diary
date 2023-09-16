import cohere
import re
co = cohere.Client('HT8OEn0M36OmOLYY76E3Y7mxxwsWTs50HJEl4rQF')

from cohere.responses.classify import Example

examples=[
    Example("The weather was nice", "happy"),
    Example("I'm in a good mood","happy"),
    Example("Today went well","happy"),
    Example("I loved ","happy"),
    Example("I won","happy"),
    Example("I saw the most amazing thing","happy"),
    Example("I thought it was so funny","happy"),
    Example("It was a beautiful day","happy"),
    Example(":)","happy"),
    Example("I feel satisfied","happy"),

    Example("I was surprised","hyped"),
    Example("This is exciting","hyped"),
    Example("I feel like dancing","hyped"),
    Example("I can't believe it","hyped"),
    Example("Yay","hyped"),
    Example("I'm so lucky","hyped"),
    Example("Today was the best day","hyped"),
    Example("My dreams came true","hyped"),
    Example("I can't wait","hyped"),
    Example(":D","hyped"),
    Example("I'm amazed","hyped"),

    Example("I have a problem","sad"),
    Example("Things aren't working","sad"),
    Example("I want to cry","sad"),
    Example("I had the worst experience","sad"),
    Example("I ruined it","sad"),
    Example("I'm upset","sad"),
    Example("I miss","sad"),
    Example("This has been hard on me","sad"),
    Example("I feel dpressed","sad"),
    Example(":(","sad"),
    Example("I need space","sad"),
    Example("I need someone","sad"),
    Example("I'm anxious","sad"),
    Example("I'm hurt","sad"),

    Example("It's so frustrating","angry"),
    Example("I want to scream","angry"),
    Example("That was so annoying","angry"),
    Example("I'm so upset","angry"),
    Example("I failed","angry"),
    Example("I hate","angry"),
    Example(">:(","angry"),
    Example("My mind isn't working","angry"),
    Example("This is disappointing","angry"),
    Example("I was embarrassed","angry"),
    Example("I give up","angry"),
    Example("It sucks","angry"),

    Example("It's been a long day","tired"),
    Example("I don't want to do this anymore","tired"),
    Example("I want to sleep","tired"),
    Example("I can't wait to go to bed","tired"),
    Example("I'm nervous","tired"),
    Example("I need some time","tired"),
    Example("I need sleep","tired"),
    Example("There's a lot on my mind","tired"),
    Example("I'm bored","tired"),
    Example("This is overwhelming","tired"),
    Example("I was exhausted","tired"),
    Example("I'm sick","tired"),

    Example("Nothing much happened","neutral"),
    Example("The day went okay","neutral"),
    Example("I should have done something differently","neutral"),
    Example("Things used to be better","neutral"),
    Example("I had a weird dream","neutral"),
    Example("It was nice","neutral"),
    Example("Why did I","neutral"),
    Example(":|","neutral"),
    Example("I forgot","neutral"),
    Example("It's not that important","neutral"),
    Example("Things are going normally","neutral")

]

inputs =[
    #user input form will go here:

    # sample inputs below
    #"I thought today was a good day",
    #"I'm so happy things are doing incredible",
    #"I'm going to cry",
    #"I need a nap",
    #"Things are alright",
    #"I thought today was a good day, and it was. I'm so happy! Things are going incredibly. However, I'm going to cry. I need a nap. But things are alright.",
    #"Today was the best day ever! I'm so surprised with how well it went. I passed my math test with flying colours and I cried of excitement.",
    "Today was a normal day, I woke up on time and ate the regular breakfast. Lunch was good and I talked with my friends. I am going to play baseball at the park."
    #"My cat is sick so I had to go to the vet today."
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)
#print(response)
restr = str(response)
print(restr[29:32])
# instead, we will take out the prediction: "" part to classify the emotion
# hap = happy
# hyp = hyped
# sad = sad
# ang = angry
# tir = tired
# neu = neutral