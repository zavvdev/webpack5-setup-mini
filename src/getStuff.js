import { baz } from "./baz";
import { foo } from "./foo";

function getStuff() {
  console.log("getting stuff..");
  console.log(baz);
  console.log(foo);
}

export default getStuff;
