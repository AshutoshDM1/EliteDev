import { atom } from "recoil";
type ReactCompo = {
  heading: string;
  description: string;
  href: string;
  frontend: string;
  backend: string;
  devops: string;
  image: string;
  github: string;
};
export const showprojects = atom<ReactCompo>({
  key: "projects",
  default: {
    heading: "Default Heading",
    description: "Default Description",
    href: "https://github.com/AshutoshDM1?tab=repositories",
    frontend: "Default Frontend Tech",
    backend: "Default Backend Tech",
    devops: "Default Devops Tech",
    image: "image1.png",
    github: "https://github.com/AshutoshDM1?tab=repositories",
  },
});
export const scrollmain = atom({
  key: "scroll",
  default: false,
});
