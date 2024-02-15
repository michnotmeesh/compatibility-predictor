# compatibility-predictor
Compatibility Predictor is an application that takes an input: an array of applicants and an array of team members, and produces an output: an object of applicants with their respective compatibility score.

### SPECIFICATIONS
- Input and Output must be in JSON
- Compatibility score for each applicant should fall in a range from [0, 1]
- Developed in JavaScript

### INSTRUCTIONS
To change the input, edit the array of team members `team` and/or the array of applicants `applicants`.

This code assumes that every team member and applicant has the same format as the following:
`{
  "name" : "nameString",
  "attributes" : {
    "attribute" : integer,
    .
    .
    .
  }
}`

It also assumes that all team members and applicants have the same attributes and will be scored based on these attributes equally.

The code will ouput an the final compatibility scores of each applicant to the `console`. The applicant with the score of 1 will be considered the most compatibile with the original team.

