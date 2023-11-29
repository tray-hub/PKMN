function replaceAll(initial, replace, sequence) {
  while(initial.includes(replace)) {
    initial = initial.replace(replace, sequence);
  }
  return initial;
}

module.exports = {
  replaceAll
}
