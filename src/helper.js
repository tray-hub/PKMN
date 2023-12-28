/**
  Replaces all instances of a literal sequence in a string
  @param {string} initial - Initial string to modify
  @param {string} replace - What to insert into the string
  @param {string} sequence - The sequence to replace
  @returns {string} Modified initial string
*/
function replaceAll(initial, replace, sequence) {
  while(initial.includes(replace)) {
    initial = initial.replace(replace, sequence);
  }
  return initial;
}

/**
  Uses a single string to climb down a JSON tree and return the final value
  @param {json} json - The JSON object to search
  @param {string} key - The keys seperated by '.'
  @returns {object} Key value
*/
function getJSONKeyValue(json, key) {
  let keys = key.includes('.')?key.split('.'):[key];
  for(let k of keys) {
    if(json[k] != undefined) {
      json = json[k];
    }
  }
  return json;
}

/**
  Sets an attribute of an object if the value is not undefined
  @param {object} object - The object to set the attribute of
  @param {string} attribute - The name of the attribute
  @param {object} value - The value to set for the attribute
*/
function setPropertyIfUndefined(object, attribute, value) {
  if(value != undefined) {
    if(object != undefined) {
      object.attribute = value;
    }
  }
}

module.exports = {
  replaceAll,
  getJSONKeyValue,
  setValueIfUndefined
}
