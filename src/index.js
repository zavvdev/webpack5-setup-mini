import getStuff from "./getStuff";

console.log("index.js");
getStuff();

const moreStuff = {
  one: "one",
  two: "two",
};

const moreMoreStuff = { ...moreStuff, three: "three" };
console.log(moreMoreStuff);
