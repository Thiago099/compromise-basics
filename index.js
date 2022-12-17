const nlp = require('compromise');

function extractMeaning(combination) {
  const result = nlp(combination)
      .out("json")
      .map(x => x.terms.map(x => {return {name:x.text,tags:x.tags}}))
  return result;
}

console.log(JSON.stringify(extractMeaning("The cat is sleeping."),null,4));