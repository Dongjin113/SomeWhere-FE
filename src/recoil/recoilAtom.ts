import { atom } from "recoil";

export const isOpenState = atom({
  key: "isOpenState",
  default: Array(5).fill(false), 
});