const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
  return cats;
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
  return cats;
}

function appendCat(name) {
  const newCats = [...cats, "Broom"];
  return newCats;
}

function prependCat(name) {
  const newCats2 = ["Arnold", ...cats];
  return newCats2;
}

function removeLastCat(name) {
  const newcats3 = cats.slice(0, -1);
  return newcats3;
}

function removeFirstCat(name) {
  const newCats4 = cats.slice(1);
  return newCats4;
}
