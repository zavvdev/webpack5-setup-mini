import "./styles/index.scss";
import getStuff from "./stuff/getStuff";

const obj = {
  one: "one",
  two: "two",
};

const newObj = {
  ...obj,
  three: "three",
};

console.log(obj);
console.log(newObj);
getStuff();
