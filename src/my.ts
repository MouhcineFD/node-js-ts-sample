import Env from "env";

export class C {
  private x = 10;
  getX = () => this.x;
  setX = (newVal: number) => {
    this.x = newVal;
  };
}

export const x = new C();
export const y = { ...{ some: "value" } };

console.log("Hello TS World!");

console.log("Env :>> ", Env);
