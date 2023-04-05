import { getVal } from "./config";
type languagesInterface = {
  he: {
    [key: string]: any;
  };
  en: {
    [key: string]: any;
  };
};

export const getTrans = (val: any) => {
  switch (currentLang) {
    case "he":
      return languages["he"][val];
    case "en":
      return languages["en"][val];
  }
};

const languages: languagesInterface = {
  he: {
    addFish: "הוסף דג",
  },
  en: {
    addFish: "Add fish",
  },
};

const currentLang: string = getVal("lang");

export default getTrans;
