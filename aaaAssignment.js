function greet(name) {
   return name || "Guest";
}
test('returns Guest when name is empty', () => {
   const name = "";
   const result = greet(name);
   expect(result).toBe("Guest");
});


function toggle(value) {
   return !value;
}
test('toggles boolean value', () => {
   const input =true ;
   const result =toggle(value) ;
   expect(result).toBe(false);
});

function addItem(arr, item) {
  arr.push(item);
  return arr;
}
test('adds item to array', () => {
  const arr =[4,5] ;
  const result =addItem(arr,6);
   expect(result).toEqual([4,5,6]);
});

function removeItem(arr, item) {
   return arr.filter(i => i !== item);
}
test('removes item from array', () => {
   const arr = ["Bentley","Mercedes","Audi"];
   const result = removeItem(arr,Bentley);
   expect(result).toEqual(["Mercedes","Audi"]);
});

function isValidPassword(password) {
   return password.length >= 6;
}
test('returns true for valid password length', () => {
   const password ="pass4word";
   const result = isValidPassword ;
   expect(result).toBe(true);
});

function isValidPassword(password) {
  return password.length >= 6;
}
test('returns true for 6+ characters', () => {
  const password = "coolkids573";
  const result = isValidPassword(password);
  expect(result).toBe(true); 
});

test('returns false for 3 characters', () => {
  const password = "cat"; 
  const result = isValidPassword(password);
  expect(result).toBe(false);
});

test('returns true for exactly 6 characters', () => {
  const password = "init12";
  const result = isValidPassword(password);
  expect(result).toBe(true);
});

test('returns true for long password', () => {
  const password = iloverainydays;
  const result = isValidPassword(password);
  expect(result).toBe(true);
});

test('returns false for empty string', () => {
  const password = "";
  const result = isValidPassword(password);
  expect(result).toBe(false);
});


function containsWord(sentence, word) {
  return sentence.includes(word);
}
test('returns true when word is present', () => {
  const sentence = "The girl that died";
  const word = "died";
  const result = containsWord(sentence, word);
  expect(result).toBe(true);
});

test('returns false when word is missing', () => {
  const sentence = "That car is mine";
  const word = "grey";
  const result = containsWord(sentence, "grey");
  expect(result).toBe(false);
});

test('returns true when sentence is exactly the word', () => {
  const sentence = "paint";
  const word = "paint";
  const result = containsWord(sentence,word);
  expect(result).toBe(true);
});

test('returns false for different casing', () => {
  const sentence = "it Ends with us";
  const word = "ends";
  const result = containsWord(sentence,word);
  expect(result).toBe(false);
});

test('returns true when searching for empty string', () => {
  const sentence = "I love your outfit";
  const result = containsWord(sentence,word);
  expect(result).toBe(true);
});

function addItem(arr, item) {
   arr.push(item);
    return arr;
}
test('adds item to existing array', () => {
  const arr = [10,9,8];
  const item =7;
  const result = addItem(arr,item );
  expect(result).toEqual([10,9,8,7]);
});

test('adds item to empty array', () => {
  const arr = [];
  const item = "APPLE";
  const result = addItem(arr, item);
  expect(result).toEqual(["APPLE"]);
});

test('adds null value as valid item', () => {
  const arr = ["Mango"];
  const item = null;
  const result = addItem(arr, item);
  expect(result).toEqual(["Mango", null]);
});

test('adds an item even if it already exists in the array', () => {
  const arr = ["apple","orange","banana"];
  const item = "orange";
  const result = addItem(arr, item);
  expect(result).toEqual(["apple","orange","banana","orange"]);
});








