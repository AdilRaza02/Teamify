export default {
  createTeams(responses) {
    const names = this.shuffleArray(responses[1].split("\n"));

    if (responses[2] === "no_of_teams") {
      return this.numberOfTeams(names, responses[3]);
    } else {
      return this.numberOfParticipants(names, responses[4]);
    }
  },

  // Taken from https://stackoverflow.com/questions/8188548/splitting-a-js-array-into-n-arrays/51514813#51514813
  //Some modifications done according to the requirements

  numberOfTeams(names, size) {
    if (size === 0 || !isFinite(size)) {
      size = names.length;
    }
    let newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push([]);
    }
    for (let i = 0; i < names.length; i++) {
      let mod = i % size;
      newArray[mod].push(names[i]);
    }
    return newArray;
  },

  // Taken from https://stackoverflow.com/a/27218068/11760200
  //Some modifications done according to the requirements

  numberOfParticipants(names, size) {
    if (size === 0 || !isFinite(size)) {
      size = names.length;
    }

    let namesTemp = names.slice(0);
    let newArray = [];

    while (namesTemp.length > 0) {
      newArray.push(namesTemp.splice(0, size));
    }

    return newArray;
  },

  //Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  //Randomize array in-place using Durstenfeld shuffle algorithm
  shuffleArray(array) {
    let tempArray = array.slice(0);
    for (let i = tempArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    return tempArray;
  },
};
