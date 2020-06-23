import Env from "env";
import { x as g } from "./my";
console.log("x :>> ", g.getX());
export class C {
  getX = () => this.x;
  setX = (newVal) => {
    this.x = newVal;
  };
}

export let x = new C();
export let y = { ...{ some: "value" } };

console.log("Hello JS World!");

console.log("Env :>> ", Env);

const a = "salut";

console.log("a :>> ", a);
