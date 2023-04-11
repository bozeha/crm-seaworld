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
      return languages["he"][val] || val;
    case "en":
      return languages["en"][val] || val;
  }
};

const languages: languagesInterface = {
  he: {
    _id: "מפתח",
    addFish: "הוסף דג",
    fishesList: "רשימת דגים",
    minimumTankSize: "מינימום גודל אקוריום",
    proneToDisease: "רגיש למחלות",
    beginnerCompatible: "מתאים למתחילים",
    adultSize: "גודל בוגר",
    reefCompatible: "מתאים לריף",
    predatorTankCompatible: "מתאים לאקוריום טורפים",
    careLevel: "קושי גידול",
    pH: "PH",
    temperature: "טמפרטורת מים",
    preferredTankLevel: "העדפת מיקום באקוריום",
    numberToATtank: "מספר פריטים באקוריום",
    key: "מפתח",
    name: "שם",
    otherNames: "שמות נוספים",
    arrOfExtraInfo: "מידע נוסף",
    images: "תמונות",
    update: "עדכן",
    family: "משפחה",
    scientificName: "שם מדעי",
    enName: "שם לועזי",
    hebName: "שם עיברי",
    nickName: "כינוי",
  },
  en: {
    addFish: "Add fish",
  },
};

const currentLang: string = getVal("lang");

export default getTrans;
