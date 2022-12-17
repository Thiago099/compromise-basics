const nlp = require('compromise');

function extractMeaning(combination) {
  const result = nlp(combination).out("json").map(x=>x.terms.map(x=>{return {text:x.text,tags:x.tags}}))
  return result;
}

console.log(extractMeaning("The cat is sleeping."));