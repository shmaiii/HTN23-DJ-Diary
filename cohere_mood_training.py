import cohere
co = cohere.Client('HT8OEn0M36OmOLYY76E3Y7mxxwsWTs50HJEl4rQF')

from cohere.responses.classify import Example

examples=[
    Example("The weather was nice", "happy"),
    Example("I'm in a good mood","happy"),
    Example("Today went well","happy"),
    Example("","happy"),
    Example("","happy"),
    Example("","happy"),
    Example("","happy"),
    Example("","happy"),
    Example("","happy"),
    Example("","happy"),
    Example("I was surprised","hyped"),
    Example("This is exciting","hyped"),
    Example("I feel like dancing","hyped"),
    Example("I can't believe it","hyped"),
    Example("","hyped"),
    Example("","hyped"),
    Example("","hyped"),
    Example("","hyped"),
    Example("","hyped"),
    Example("","hyped"),
    Example("","hyped"),
    Example("I have a problem","sad"),
    Example("Things aren't working","sad"),
    Example("I want to cry","sad"),
    Example("I had the worst experience","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("","sad"),
    Example("It's so frustrating","angry"),
    Example("I want to scream","angry"),
    Example("That was so annoying","angry"),
    Example("","angry"),
    Example("","angry"),
    Example("","angry"),
    Example("","angry"),
    Example("","angry"),
    Example("","angry"),
    Example("","angry"),
    Example("","angry"),
    Example("","angry"),
    Example("It's been a long day","tired"),
    Example("I don't want to do this anymore","tired"),
    Example("","tired"),
    Example("","tired"),
    Example("","tired"),
    Example("","tired"),
    Example("","tired"),
    Example("","tired"),
    Example("","tired"),
    Example("","tired"),
    Example("","tired"),
    Example("Nothing much happened","neutral"),
    Example("The day went okay","neutral"),
    Example("","neutral"),
    Example("","neutral"),
    Example("","neutral"),
    Example("","neutral"),
    Example("","neutral"),
    Example("","neutral"),
    Example("","neutral"),
    Example("","neutral"),
    Example("","neutral")

]

inputs =[
    # sample inputs here
    "",
    "",
    "",
    "",
    ""
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)
print(response)