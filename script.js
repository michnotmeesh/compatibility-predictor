const OVERALL_SCORE = 10;
const team = [
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
];

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
];


function calculateTeamAttributeScores(currTeam) {
  let attributeScores = {};
  // create attributeScores array
  // {
  //   "intelligence": 13
  //   "strength: 9,
  //   "endurance: 8",
  //   "spicyFoodTolerance: 6"
  // }
  //

  for (let i = 0; i < currTeam.length; i++) {
    let teamMember = currTeam[i];

    for (const memberAttribute in teamMember["attributes"]) {
      let currScore = teamMember["attributes"][memberAttribute];
      if (memberAttribute in attributeScores) {
        attributeScores[memberAttribute] += currScore;
      } else {
        attributeScores[memberAttribute] = currScore;
      }
    }
  }
  return attributeScores;
}

let attributeScores = calculateTeamAttributeScores(team);

function calculateTeamAvgAttributeScores(attributeScores, currTeam) {
  let totalScore = OVERALL_SCORE * currTeam.length;

  for (attributes in attributeScores) {
    attributeScores[attributes] = attributeScores[attributes] / totalScore;
  }
  return attributeScores;
}

// calculate original team's avg attribute scores
let teamAvgScores = calculateTeamAvgAttributeScores(attributeScores, team);
console.log("original team avg score", teamAvgScores);

function teamWithApps() {
  let applicantScores = [];
  for (apps in applicants) {
    console.log(applicants[apps]);
    let teamWithApp = [].concat(team, applicants[apps]);

    const attributScores = calculateTeamAttributeScores(teamWithApp);
    const teamAvgScoresWithApp = calculateTeamAvgAttributeScores(attributScores, teamWithApp);

    // teamAvgScoresWithApp["name"] = applicants[apps]["name"];
    console.log(teamAvgScoresWithApp);

    let appScoreByAttribute = compareScore(teamAvgScores, teamAvgScoresWithApp);
    let final = totalScore(appScoreByAttribute, applicants[apps]["name"]);
    applicantScores.push(final);
  }
  return applicantScores;
}

function compareScore(team, teamWithApp) {
  let appFinalScores = {};
  for (attribute in team) {
    let diff = 0;
    if (team[attribute] < teamWithApp[attribute]) {
      diff = teamWithApp[attribute] - team[attribute];
    }
    appFinalScores[attribute] = diff;
  }
  return appFinalScores;
}

function totalScore(appScoreByAttribute, name) {
  let final = {};
  final["name"] = name;
  let scores = Object.values(appScoreByAttribute);
  final["score"] = scores.reduce((score, curr) => score + curr, 0);
  return final;
}

const result = teamWithApps();

function findHighestScore(result) {
  let findResult = result.map((val) => {
    return val.score;
  });
  return Math.max(...findResult);
}

let highestScore = findHighestScore(result);

result.forEach((app) => {
  app["score"] = app["score"] / highestScore;
});

// final result
// applicant with a score of 1 is the best match
let output = {};
output["scoredApplicants"] = result;
console.log("final", output);
