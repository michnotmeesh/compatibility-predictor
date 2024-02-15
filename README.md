# compatibility-predictor
Compatibility Predictor is an application that takes an input: an array of applicants and an array of team members, and produces an output: an object of applicants with their respective compatibility score.

### SPECIFICATIONS
- Input and Output must be in JSON
- Compatibility score for each applicant should fall in a range from [0, 1]
- Developed in JavaScript

### INSTRUCTIONS
#### INPUT
To change the input, edit the array of team members `team` and/or the array of applicants `applicants`.
This can be found at the top of the file `const team = [ ... ]` and `const applicants = [ ... ]`

Example `team` input:
```
const team =  [
  {
    "name": "Eddie",
    "attributes": {
      "intelligence": 1,
      "strength": 5,
      "endurance": 3,
      "spicyFoodTolerance": 1
    }
  },
  {
    "name": "Will",
    "attributes": {
      "intelligence": 9,
      "strength": 4,
      "endurance": 1,
      "spicyFoodTolerance": 6
    }
  },
  {
    "name": "Mike",
    "attributes": {
      "intelligence": 3,
      "strength": 2,
      "endurance": 9,
      "spicyFoodTolerance": 5
    }
  }
]
```

Example `applicants` input:
```
const applicants = [
  {
    "name": "John",
    "attributes": {
      "intelligence": 4,
      "strength": 5,
      "endurance": 2,
      "spicyFoodTolerance": 1
    }
  }, {
    "name": "Jane",
    "attributes": {
      "intelligence": 7,

      "strength": 4,
      "endurance": 3,
      "spicyFoodTolerance": 2
    }
  }, {
    "name": "Joe",
    "attributes": {
      "intelligence": 1,
      "strength": 1,
      "endurance": 1,
      "spicyFoodTolerance": 10
    }
  }
]
```
#### OUTPUT
The code will ouput an the final compatibility scores of each applicant to the `console`. The applicant with the score of 1 will be considered the most compatibile with the original team.

Example output:
```
{
    “scoredApplicants” : [
        {
            “name” : “John”,
            “score” : 0.2
        }, {
            “name” : “Jane”,
            “score” : 0.4
        }, {
            “name” : “Joe”,
            “score” : 0.9
        }
    ]
}
```

### ASSUMPTIONS
This code assumes that every team member and applicant have the same format as the following:
```
{
  "name" : "name",
  "attributes" : {
    "attribute" : integer,
    .
    .
    .
  }
}
```

It also assumes that all team members and applicants have the same attributes and will be scored based on these attributes equally. No attribute has more weight than the other.
It also assumes that scores for each attribute should fall in the range of [0 to 10], where 0 is the lowest and 10 is the highest possible scores. If you'd like to change the max overall score for each attribute, change the `OVERALL_SCORE` variable.
