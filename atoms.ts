import { atom } from "recoil";
type ReactCompo = {
  heading: string;
  description: string;
  frontend: string;
  backend: string;
  image: string;
};
export const showprojects = atom<ReactCompo | null >({
  key: "projects",
  default: null,
});
export const scrollmain = atom({
  key: "scroll",
  default: false,
});
